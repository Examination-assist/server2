<?php

namespace App\Http\Controllers;

use App\User;
use App\UserType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Crypt;

use Firebase\JWT\JWT;

class UserController extends Controller
{

    function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('email', $validated['email'])->select(['email', 'password', 'user_id', 'type_id'])->first();

        if ($validated['password'] == Crypt::decryptString($user->password)) {
            $secret = base64_encode(env('SECRET'));
            $encoded = JWT::encode(['email' => $validated['email']], $secret, 'HS512');

            return response()->json([
                'token' => $encoded,
                'email' => $validated['email'],
                'user_id' => $user->user_id,
                'type_id' => $user->type_id,
            ]);
        } else {
            return response()->json([], 403);
        }
    }

    function get_user(Request $request)
    {
        $request->user_id;
        return User::where('user_id',$request->user_id)->get()->first;
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

        $user->course_name = $request->course_name;

        Log::info($user);
        $user->save();

        return response()->json(['user' => '']);
    }
}
