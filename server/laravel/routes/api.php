<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

class DocxConversion
{
    private $filename;

    public function __construct($filePath)
    {
        $this->filename = $filePath;
    }

    private function read_doc()
    {
        $fileHandle = fopen($this->filename, "r");
        $line = @fread($fileHandle, filesize($this->filename));
        $lines = explode(chr(0x0D), $line);
        $outtext = "";
        foreach ($lines as $thisline) {
            $pos = strpos($thisline, chr(0x00));
            if (($pos !== FALSE) || (strlen($thisline) == 0)) {
            } else {
                $outtext .= $thisline . " ";
            }
        }
        $outtext = preg_replace("/[^a-zA-Z0-9\s\,\.\-\n\r\t@\/\_\(\)]/", "", $outtext);
        return $outtext;
    }

    private function read_docx()
    {

        $striped_content = '';
        $content = '';

        $zip = zip_open($this->filename);

        if (!$zip || is_numeric($zip)) return false;

        while ($zip_entry = zip_read($zip)) {

            if (zip_entry_open($zip, $zip_entry) == FALSE) continue;

            if (zip_entry_name($zip_entry) != "word/document.xml") continue;

            $content .= zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));

            zip_entry_close($zip_entry);
        } // end while

        zip_close($zip);

        $content = str_replace('</w:r></w:p></w:tc><w:tc>', " ", $content);
        $content = str_replace('</w:r></w:p>', "\r\n", $content);
        $striped_content = strip_tags($content);

        return $striped_content;
    }

    /************************excel sheet************************************/

    function xlsx_to_text($input_file)
    {
        $xml_filename = "xl/sharedStrings.xml"; //content file name
        $zip_handle = new ZipArchive;
        $output_text = "";
        if (true === $zip_handle->open($input_file)) {
            if (($xml_index = $zip_handle->locateName($xml_filename)) !== false) {
                $xml_datas = $zip_handle->getFromIndex($xml_index);
                $xml_handle = DOMDocument::loadXML($xml_datas, LIBXML_NOENT | LIBXML_XINCLUDE | LIBXML_NOERROR | LIBXML_NOWARNING);
                $output_text = strip_tags($xml_handle->saveXML());
            } else {
                $output_text .= "";
            }
            $zip_handle->close();
        } else {
            $output_text .= "";
        }
        return $output_text;
    }

    /*************************power point files*****************************/
    function pptx_to_text($input_file)
    {
        $zip_handle = new ZipArchive;
        $output_text = "";
        if (true === $zip_handle->open($input_file)) {
            $slide_number = 1; //loop through slide files
            while (($xml_index = $zip_handle->locateName("ppt/slides/slide" . $slide_number . ".xml")) !== false) {
                $xml_datas = $zip_handle->getFromIndex($xml_index);
                $xml_handle = DOMDocument::loadXML($xml_datas, LIBXML_NOENT | LIBXML_XINCLUDE | LIBXML_NOERROR | LIBXML_NOWARNING);
                $output_text .= strip_tags($xml_handle->saveXML());
                $slide_number++;
            }
            if ($slide_number == 1) {
                $output_text .= "";
            }
            $zip_handle->close();
        } else {
            $output_text .= "";
        }
        return $output_text;
    }


    public function convertToText()
    {

        if (isset($this->filename) && !file_exists($this->filename)) {
            return "File Not exists";
        }

        $fileArray = pathinfo($this->filename);
        $file_ext  = $fileArray['extension'];
        if ($file_ext == "doc" || $file_ext == "docx") {
            if ($file_ext == "doc") {
                return $this->read_doc();
            } elseif ($file_ext == "docx") {
                return $this->read_docx();
            }
        } else {
            return "Invalid File Type";
        }
    }
}

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/upload', function (Request $request) {
    $request->validate([
        'file' => 'required', //mimes:pdf,xlx,csv|max:2048',
    ]);


    $fileName = time() . '.' . $request->filename;
    $request->file->move(public_path('uploads'), $fileName);

    $paths = public_path('uploads') . $fileName;
    $docObj = new DocxConversion(public_path('uploads') . '/' . $fileName);

    // Log::info();
    // return 'ok';
    return response()->json(['data' => 'ok', 'file' => $fileName, 'text' => $docObj->convertToText(), 'paths' => $paths]);
    // ->with('success', 'You have successfully upload file.');
    // ->with('file', $fileName);
});

Route::get('/display', function (Request $request) {
    $str = DB::table('document')->select();
    Log::info($str);
    // return response()->json('document'=>$str);
});

Route::post('/convert', function (Request $request) {
    $phpWord_s = new \PhpOffice\PhpWord\PhpWord();
    $phpWord_both = new \PhpOffice\PhpWord\PhpWord();

    $section_s = $phpWord_s->addSection();
    $section_both = $phpWord_both->addSection();

    $s = "";
    $s1 = "";

    $input = json_decode($request->input);
    $output = json_decode($request->output);
    for ($para = 0; $para < count($input); $para++) {
        for ($line = 0; $line < count($input[$para]); $line++) {
            try {
                $s = $s . $input[$para][$line];
                $s = $s . "\n";
                $s = $s . $output[$para][$line];
                $s = $s . "\n";
                $s = $s . "\n";

                $s1 = $s1 . $output[$para][$line];
                $s1 = $s1 . "\n";
            } catch (Exception $e) {
            }
        }
        $s = $s . "\n";
        $s1 = $s1 . "\n";
    }


    $section_s->addText($s1);
    $section_both->addText($s);

    $serial_input = serialize($input);
    $serial_output = serialize($output);
    DB::table('document')->insert([
        ['input' => $serial_input, 'output' => $serial_output]
    ]);

    $objWriter_s = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord_s, 'Word2007');
    $objWriter_both = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord_both, 'Word2007');

    $time = time();

    $objWriter_s->save(storage_path('app/public') . '/' . 's' . $time . '.docx');
    $objWriter_both->save(storage_path('app/public') . '/' . 'both' . $time . '.docx');
    $str = DB::table('document')->select('input')->where('doc_id',1)->get();
    
    Log::info(($str[0])->input);
   
    return response()->json([
        's' => $s,
        's1' => $s1,
        'path_s' => 'http://localhost:8000/storage/' . 's' . $time . '.docx',
        'path_both' => 'http://localhost:8000/storage/' . 'both' . $time . '.docx'
    ]);
});
