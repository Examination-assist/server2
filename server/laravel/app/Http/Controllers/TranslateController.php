<?php

namespace App\Http\Controllers;

use App\Translate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TranslateController extends Controller
{
    function view_lines(Request $request)
    {
        $validated = $request->validate([
            'doc_id' => 'required'
        ]);

        $translate = Translate::where('doc_id', $request->doc_id)->get();
        return response()->json(['translate' => $translate]);
    }
    function save_lines(Request $request)
    {
        $validated = $request->validate([
            'translate' => 'required',
            'doc_id' => 'required'
        ]);
        for ($i = 0; $i < count($request->translate); $i++) {
            $elem = ($request->translate[$i]);
            $line = new Translate($elem);
            $line->doc_id = $request->doc_id;
            $line->save();
        }
    }
    function update_lines(Request $request)
    {
        $validated=$request->validate(['translate'=>'required']);
        Log::info($request);

        for ($i=0; $i < count($request->translate); $i++) { 
            $elem = $request->translate[$i];
            Translate::where('translate_id',$elem['translate_id'])->update(['output'=>$elem['output']]);
        }
        return response()->json();
    }
}
