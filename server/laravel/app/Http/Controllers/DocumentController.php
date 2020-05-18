<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\document;
use App\User;

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

        $doc->user_id = $user_id;

        $doc->course_name=User::where('user_id',$user_id)->select('course_name')->first()['course_name'];

        $doc->save();

        Log::info($doc);

        return response()->json();
    }
}
