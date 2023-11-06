<?php

namespace Tests\Feature;

use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class PictureRouteTest extends TestCase
{
    public function test_date(): void
    {
        $date = Carbon::now()->format('Y-m-d');

        Http::shouldReceive('get')
            ->once();

        $this->get(route('picture.day', ['date' => $date]));
    }

    public function test_date_range(): void
    {
        $startDate = Carbon::now()->subDays(1)->format('Y-m-d');
        $endDate = Carbon::now()->format('Y-m-d');

        Http::shouldReceive('get')
            ->once();

        $this->get(route('picture.range',
            [
                'startDate' => $startDate,
                'endDate' => $endDate,
            ]
        ));
    }

    public function test_random(): void
    {
        $count = 1;

        Http::shouldReceive('get')
            ->once();

        $this->get(route('picture.random', ['count' => $count]));
    }
}
