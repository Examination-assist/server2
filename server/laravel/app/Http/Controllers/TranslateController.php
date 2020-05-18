<?php

namespace App\Http\Controllers;

use App\Translate;
use Illuminate\Http\Request;

class TranslateController extends Controller
{
    function view_lines(Request $request)
    {
        $validated = $request->validate([
            'doc_id' => 'required'
        ]);

        $translate=Translate::where('doc_id',$request->doc_id)->get();
        return response()->json(['translate'=>$translate]);

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
}
