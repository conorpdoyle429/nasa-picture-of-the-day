<?php

namespace App\Http\Controllers;

use App\Http\Requests\PictureRequest;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Client\Response;

class PictureController extends Controller
{
    public const URL = 'https://api.nasa.gov/planetary/apod';

    public const NASA_KEY = 'gCPcRJcKxsfhpk7qLGFUoVN2sxd6RcdqkY5El5KZ';

    /** Get a picture of the day for a specified day. */
    public function getPicture(PictureRequest $request): Response
    {
        $date = $request->get('date');
        return Http::get(self::URL, [
            'date' => $date,
            'api_key' => self::NASA_KEY,
        ]);
    }

    /** Get a picture of the day for a specified date range. */
    public function getPictureForDateRange(PictureRequest $request): Response
    {
        $startDate = $request->get('startDate');
        $endDate = $request->get('endDate');
        return Http::get(self::URL, [
            'startDate' => $startDate,
            'endDate' => $endDate,
            'api_key' => self::NASA_KEY,
        ]);
    }

    /** Get a specified amount of random picture of the days. */
    public function getRandomPictures(PictureRequest $request): Response
    {
        $count = $request->get('count');
        return Http::get(self::URL, [
            'count' => $count,
            'api_key' => self::NASA_KEY,
        ]);
    }
}
