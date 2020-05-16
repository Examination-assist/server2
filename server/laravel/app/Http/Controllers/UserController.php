<?php

namespace App\Http\Controllers;

use App\UserType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{
    function register(Request $request){
        $validated=$request->validate([
            'email'=>'required',
            'password'=>'required',
            'user_type'=>'required'
        ]);
        
        // Log::info($validated->user_type);
        $model = UserType::where('type','Admin');
        Log::info($model->first());
        // UserType::
        // Log::info(Crypt::encryptString($request->user));
        // Log::info(Crypt::decryptString(Crypt::encryptString($request->user)));

        return response()->json(['user'=>'']);
    }
}
