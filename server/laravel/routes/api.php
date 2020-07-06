<?php

// use GuzzleHttp\Psr7\Request;

use App\Audio;
use App\Course;
use App\links;
use App\User;
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

Route::post('/courses', function (Request $request) {
    $send = $request->query('get');

    if ($send == 'course_name') {
        $data = Course::where('discipline', $request->query('discipline'))->select('course_name')->get();
    } else
        $data = (collect(Course::select($send)->get())->unique()->values());
    return response()->json($data);
});

Route::post('/get_user_data', function (Request $request) {
    $course_id = Course::where(['discipline' => $request->discipline, 'course_name' => $request->course_name])->get()->first()['course_id'];
    if ($request->language)
        $data = User::where(['course_id' => $course_id, 'language' => $request->language])->select('first_name', 'last_name', 'user_id', 'username', 'approved')->get();
    $data = User::where(['course_id' => $course_id])->select('first_name', 'last_name', 'user_id', 'username', 'approved')->get();

    foreach ($data as $key => $value) {
        $value['name'] = $value['first_name'] . " " . $value['last_name'];
    }
    return $data;
});

Route::post('/get_doc_fill_data', function (Request $request) {
    $user_id = ($request->user_id);
    $user = (User::where('user_id', $user_id)->get()->first());
    // Log::info(($user));

    $course = Course::where('course_id', $user['course_id'])->get()->first();
    return response()->json(['user' => $user,'course'=>$course]);
});

Route::post('/approve', function (Request $request) {
    $user = User::where('user_id', $request->user_id);
    $updated = $user->get()[0]->approved == 'Yes' ? 'No' : 'Yes';
    $user->update(['approved' => $updated]);
    return $updated;
});

Route::post('/links', function (Request $request) {
    $links = links::all();
    return $links;
});

Route::post('/register', 'UserController@register');
Route::post('/login', 'UserController@login');
Route::post('/get_user', 'UserController@get_user');

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

    if ($audio::where(['doc_id' => $request->doc_id, 'count' => $request->count])->exists()) {
        $d = ($audio::where(['doc_id' => $request->doc_id, 'count' => $request->count])->get()->first());
        $filename = $d->filename;
        Storage::disk('public')->put('audio/' . $filename, file_get_contents($blobInput));

        // $audio::where(['doc_id'=>$request->doc_id,'count'=>$request->count])->update(['filename'=>$filename])->save();

        return (asset('storage/audio/' . $filename));
    };

    $filename = time() . '.' . 'audio.wav';
    Storage::disk('public')->put('audio/' . $filename, file_get_contents($blobInput));

    // Log::info($request->count);

    $audio = new Audio;
    $audio->doc_id = $request->doc_id;
    $audio->count = $request->count;
    $audio->filename = 'audio/' . $filename;

    $audio->save();

    return (asset('storage/audio/' . $filename));
});

Route::post('/get_audio', function (Request $request) {
    $audio = new Audio;
    $data = $audio::where(['doc_id' => $request->doc_id, 'count' => $request->count])->get();

    // Log::info();
    if (count($data) > 0)
        return (asset('storage/' . $data[0]->filename));
    else return response()->json([]);
});
