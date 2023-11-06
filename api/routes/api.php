<?php

use App\Http\Controllers\PictureController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/** Picture of the day */
Route::group(['prefix' => 'pictures'], function () {
    Route::get('/day', 'App\Http\Controllers\PictureController@getPicture')->name('picture.day');
    Route::get('/date-range', 'App\Http\Controllers\PictureController@getPictureForDateRange')->name('picture.range');
    Route::get('/random', 'App\Http\Controllers\PictureController@getRandomPictures')->name('picture.random');
});
