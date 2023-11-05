<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/** Picture of the day */
Route::group(['prefix' => 'pictures'], function () {
    Route::get('/day', 'PictureController@getPicture')->name('picture.day');
    Route::get('/date-range', 'PictureController@getPictureForDateRange')->name('picture.range');
    Route::get('/random', 'PictureController@getRandomPictures')->name('picture.random');
  });
