<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{
    function register(Request $request){
        $validated=$request->validate([
            'username'=>'required',
            'password'=>'required',
            'user_type'=>''
        ]);

        // Log::info(Crypt::encryptString($request->user));
        // Log::info(Crypt::decryptString(Crypt::encryptString($request->user)));

        return response()->json(['user'=>'']);
    }
}
