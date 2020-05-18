<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder_ extends Seeder
{
    function run()
    {
        $user = new User([
            'first_name' => 'Aniket',
            'last_name' => 'Chowdhury',
            'email' => '8.aniket.chowdhury@gmail.com',
            'password' => 'eyJpdiI6InZWZW5keXpJcDc2NTVZRTJYZ094Q0E9PSIsInZhbHVlIjoibU9hTFRGZmRsRzY4YUk1bDFIL2JxUT09IiwibWFjIjoiNGQ3NmE0M2UwZjk3ZGY2NTA0ZDg3YzU3ZjllNzc5MjVlYmQzYWRiNDdkMzAyOTUwOGU1OWM4ZTE5NTgwZmQ3YyJ9',
            'username' => 'aniketbiprojit',
            'type_id' => '3'
        ]);
        $user->save();

        $user = new User([
            'first_name' => 'Aaryan',
            'last_name' => 'Kapur',
            'email' => 'aaryankapur1309@gmail.com',
            'password' => 'eyJpdiI6InZWZW5keXpJcDc2NTVZRTJYZ094Q0E9PSIsInZhbHVlIjoibU9hTFRGZmRsRzY4YUk1bDFIL2JxUT09IiwibWFjIjoiNGQ3NmE0M2UwZjk3ZGY2NTA0ZDg3YzU3ZjllNzc5MjVlYmQzYWRiNDdkMzAyOTUwOGU1OWM4ZTE5NTgwZmQ3YyJ9',
            'username' => 'aaryankapur',
            'type_id' => '3'
        ]);
        $user->save();

        $user = new User([
            'first_name' => 'R',
            'last_name' => 'K',
            'email' => 'rk@gmail.com',
            'password' => 'eyJpdiI6InZWZW5keXpJcDc2NTVZRTJYZ094Q0E9PSIsInZhbHVlIjoibU9hTFRGZmRsRzY4YUk1bDFIL2JxUT09IiwibWFjIjoiNGQ3NmE0M2UwZjk3ZGY2NTA0ZDg3YzU3ZjllNzc5MjVlYmQzYWRiNDdkMzAyOTUwOGU1OWM4ZTE5NTgwZmQ3YyJ9',
            'username' => 'rk',
            'type_id' => '2'
        ]);
        $user->save();
    }
}
