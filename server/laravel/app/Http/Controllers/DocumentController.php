<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\document;
use App\Translate;
use App\User;

class DocumentController extends Controller
{
    //
    function create(Request $request)
    {
        $user_id = ($request->user_id);

        $validated = $request->validate([
            'name' => 'required',
        ]);

        $doc = new document;

        $doc->name = $request->name;
        $doc->from_ = $request->from_;
        $doc->to_ = $request->to_;

        $doc->book_name = $request->book_name;
        $doc->chapter_number = $request->chapter_number;

        $doc->user_id = $user_id;

        // $doc->course_name = User::where('user_id', $user_id)->select('course_name')->first()['course_name'];

        $doc->save();

        return response()->json(['doc_id' => $doc->id]);
    }
    function review(Request $request)
    {
        $user_id = ($request->user_id);
        $validated = $request->validate(['doc_id' => 'required']);
        document::where('doc_id',$request->doc_id)->update(['status'=>'Under Review']);

    }

    function about(Request $request)
    {
        $validated = $request->validate(['doc_id' => 'required']);

        $doc = document::where('doc_id', $request->doc_id)->first();

        return response()->json($doc);
    }

    function show(Request $request)
    {
        $user_id = ($request->user_id);
        $docs = document::where('user_id', $user_id)->get();
        return response()->json(['docs' => ($docs)]);
    }

    function show_review(Request $request){
        $user_id = ($request->user_id);
        $docs = document::where('status','!=', 'In Progress')->get();
        return response()->json(['docs' => ($docs)]);
    }

}
