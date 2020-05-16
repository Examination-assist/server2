<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\User;
=======
>>>>>>> 09d0e54db4f350ff457aa85388ceedb29db6e150
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
<<<<<<< HEAD
        // Log::info();
        $type_id = UserType::where('type',$validated['user_type'])->first()->type_id;
        Log::info($type_id);
        
        $user = new User;

        $user->email = $request->email;
        $user->username = $request->username;

        $user->password = Crypt::encryptString($request->password);
        
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->type_id = $type_id;
        

        Log::info($user);
        $user->save();
        // Log::info($model)
=======
        
        // Log::info($validated->user_type);
        $model = UserType::where('user_type','Admin');
        Log::info($model);
        // UserType::
>>>>>>> 09d0e54db4f350ff457aa85388ceedb29db6e150
        // Log::info(Crypt::encryptString($request->user));
        // Log::info(Crypt::decryptString(Crypt::encryptString($request->user)));

        return response()->json(['user'=>'']);
    }
}
