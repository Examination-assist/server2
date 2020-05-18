<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\document;

class DocumentController extends Controller
{
    //
    function create(Request $request)
    {
        $user_id = ($request->header('user_id'));

        $validated = $request->validate([
            'name' => 'required',
        ]);

        $doc = new document;

        $doc->name = $request->name;
        $doc->from_ = $request->from_;
        $doc->to_ = $request->to_;
        $doc->input = $request->input;
        $doc->output = $request->output;

        $doc->user_id = $user_id;

        $doc->save();

        Log::info($doc);

        return response()->json();
    }
}
