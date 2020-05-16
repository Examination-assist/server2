<?php

namespace App\Http\Controllers;

use App\User;
use App\UserType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{

    function login(Request $request)
    {
        Log::info($request);

        $validated = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('email', $validated['email'])->select(['email', 'password'])->first();

        if ($validated['password'] == Crypt::decryptString($user->password)) {
            return response()->json([
                'token'=>'token'
            ]);
        }
        else{
            return response()->json([],403);
        }
    }
    function register(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required',
            'password' => 'required',
            'user_type' => 'required'
        ]);
        // Log::info();
        $type_id = UserType::where('type', $validated['user_type'])->first()->type_id;
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
        // Log::info(Crypt::encryptString($request->user));
        // Log::info(Crypt::decryptString(Crypt::encryptString($request->user)));

        return response()->json(['user' => '']);
    }
}
