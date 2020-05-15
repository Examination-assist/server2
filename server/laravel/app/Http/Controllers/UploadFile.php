<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class UploadFile extends Controller
{
    //
    public function __invoke(Request $request)
    {
        $phpWord_s = new \PhpOffice\PhpWord\PhpWord();
        $phpWord_both = new \PhpOffice\PhpWord\PhpWord();

        $section_s = $phpWord_s->addSection();
        $section_both = $phpWord_both->addSection();

        $s = "";
        $s1 = "";

        $input = json_decode($request->input);
        $output = json_decode($request->output);

        $to_ = $request->to_;
        $user_id = $request->user_id;
        for ($para = 0; $para < count($input); $para++) {
            for ($line = 0; $line < count($input[$para]); $line++) {
                $s = $s . $input[$para][$line];
                $s = $s . "\n";
                $s = $s . $output[$para][$line];
                $s = $s . "\n";
                $s = $s . "\n";

                $s1 = $s1 . $output[$para][$line];
                $s1 = $s1 . "\n";
            }
            $s = $s . "\n";
            $s1 = $s1 . "\n";
        }


        $section_s->addText($s1);
        $section_both->addText($s);
        // $serial_input = serialize($input);
        // $serial_output = serialize($output);
        // DB::table('document')->insert([
        //     ['input' => $serial_input, 'output' => $serial_output, 'to_' => $to_, 'user_id' => $user_id]
        // ]);

        $objWriter_s = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord_s, 'Word2007');
        $objWriter_both = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord_both, 'Word2007');

        $time = time();

        $objWriter_s->save(storage_path('app/public') . '/' . 's' . $time . '.docx');
        $objWriter_both->save(storage_path('app/public') . '/' . 'both' . $time . '.docx');

        return response()->json([
            's' => $s,
            's1' => $s1,
            'path_s' => 'http://localhost:8001/storage/' . 's' . $time . '.docx',
            'path_both' => 'http://localhost:8001/storage/' . 'both' . $time . '.docx'
        ]);
    }
}
