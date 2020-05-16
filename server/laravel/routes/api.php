<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register','UserController@register');

Route::post('/upload', 'UploadFile@index');

Route::any('/display', function (Request $request) {
    $str = DB::table('document')->select('input', 'output')->get();
    $data = [];
    for ($i = 0; $i < count($str); $i++) {
        $unserial_input = (unserialize(strval($str[$i]->input)));
        $unserial_output = (unserialize(strval($str[$i]->output)));
        array_push($data, array('input' => $unserial_input, 'output' => $unserial_output));
    }
    return response()->json(
        $data,
        200,
        ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'],
        JSON_UNESCAPED_UNICODE
    );
});

// Route::any(('/test'),'UploadFile');

Route::post('/convert', 'UploadFile@convert');
