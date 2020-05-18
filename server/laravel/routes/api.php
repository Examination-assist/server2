<?php

use Illuminate\Support\Facades\Route;
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

Route::post('/register','UserController@register');
Route::post('/login','UserController@login');

Route::post('/create_document','DocumentController@create');
Route::post('/store_document','DocumentController@store');
Route::post('/about_document','DocumentController@about');
Route::post('/show_documents','DocumentController@show');

Route::post('/upload', 'UploadFile@index');
Route::post('/convert', 'UploadFile@convert');
