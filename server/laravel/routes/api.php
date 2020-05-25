<?php

// use GuzzleHttp\Psr7\Request;

use App\Audio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

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

Route::post('/register', 'UserController@register');
Route::post('/login', 'UserController@login');
Route::post('/login', 'UserController@get_user');

Route::post('/create_document', 'DocumentController@create');
Route::post('/store_document', 'DocumentController@store');
Route::post('/about_document', 'DocumentController@about');
Route::post('/review_document', 'DocumentController@review');
Route::post('/show_documents', 'DocumentController@show');
Route::post('/show_documents_review', 'DocumentController@show_review');



Route::post('/save_lines', 'TranslateController@save_lines');
Route::post('/view_lines', 'TranslateController@view_lines');
Route::post('/update_lines', 'TranslateController@update_lines');

//view_translates

Route::post('/upload', 'UploadFile@index');
Route::post('/convert', 'UploadFile@convert');


Route::post('/upload_audio', function (Request $request) {
    $blobInput = $request->file('upl');
    
    
    $audio = new Audio;
    
    if($audio::where(['doc_id'=>$request->doc_id,'count'=>$request->count])->exists()){
        $d=($audio::where(['doc_id'=>$request->doc_id,'count'=>$request->count])->get()->first());
        $filename=$d->filename;
        Storage::disk('public')->put('audio/' . $filename, file_get_contents($blobInput));
        
        // $audio::where(['doc_id'=>$request->doc_id,'count'=>$request->count])->update(['filename'=>$filename])->save();
        
        return (asset('storage/audio/' . $filename));
    };
    
    $filename = time() . '.' . 'audio.wav';
    Storage::disk('public')->put('audio/' . $filename, file_get_contents($blobInput));

    // Log::info($request->count);
    
    $audio = new Audio;
    $audio->doc_id=$request->doc_id;
    $audio->count=$request->count;
    $audio->filename='audio/'.$filename;
    
    $audio->save();

    return (asset('storage/audio/' . $filename));
});
