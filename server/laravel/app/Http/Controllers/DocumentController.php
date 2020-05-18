<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DocumentController extends Controller
{
    //
    function create(Request $request)
    {
        Log::info($request)
    ;}
}
