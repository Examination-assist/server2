<?php

// use App\Course;
// use App\User;
use Illuminate\Database\Seeder;

use League\Csv\Reader;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class Course extends Model
{
    protected $table = 'courses';
    protected $id = 'course_id';

    public $incrementing = true;
    public $timestamps = true;

    protected $fillable =  ['stream', 'discipline', 'course_name'];
    //
}


class UserSeeder extends Seeder
{
    function run()
    {
        $csv = Reader::createFromPath('database/seeds/Translators.csv', 'r');
        $csv->setHeaderOffset(0);
        foreach ($csv as $record) {
            // try {
            // DB
            $d=[];
            $course_id = DB::table('courses')->where([
                // 'stream' => $record['stream'],
                // 'discipline' => $record['discipline'],
                'course_name' => $record['course_name']
                ])->select('course_id')->get();
            if(count($course_id)==2){echo($record['course_name']."\n");}
            // }
        }
        // $user = new User([
        //     'first_name' => 'Aniket',
        //     'last_name' => 'Chowdhury',
        //     'email' => '8.aniket.chowdhury@gmail.com',
        //     'password' => 'eyJpdiI6InZWZW5keXpJcDc2NTVZRTJYZ094Q0E9PSIsInZhbHVlIjoibU9hTFRGZmRsRzY4YUk1bDFIL2JxUT09IiwibWFjIjoiNGQ3NmE0M2UwZjk3ZGY2NTA0ZDg3YzU3ZjllNzc5MjVlYmQzYWRiNDdkMzAyOTUwOGU1OWM4ZTE5NTgwZmQ3YyJ9',
        //     'username' => 'aniketbiprojit',
        //     'type_id' => '3'
        // ]);
        // $user->save();

        // $user = new User([
        //     'first_name' => 'Aaryan',
        //     'last_name' => 'Kapur',
        //     'email' => 'aaryankapur1309@gmail.com',
        //     'password' => 'eyJpdiI6InZWZW5keXpJcDc2NTVZRTJYZ094Q0E9PSIsInZhbHVlIjoibU9hTFRGZmRsRzY4YUk1bDFIL2JxUT09IiwibWFjIjoiNGQ3NmE0M2UwZjk3ZGY2NTA0ZDg3YzU3ZjllNzc5MjVlYmQzYWRiNDdkMzAyOTUwOGU1OWM4ZTE5NTgwZmQ3YyJ9',
        //     'username' => 'aaryankapur',
        //     'type_id' => '3'
        // ]);
        // $user->save();

        // $user = new User([
        //     'first_name' => 'R',
        //     'last_name' => 'K',
        //     'email' => 'rk@gmail.com',
        //     'password' => 'eyJpdiI6InZWZW5keXpJcDc2NTVZRTJYZ094Q0E9PSIsInZhbHVlIjoibU9hTFRGZmRsRzY4YUk1bDFIL2JxUT09IiwibWFjIjoiNGQ3NmE0M2UwZjk3ZGY2NTA0ZDg3YzU3ZjllNzc5MjVlYmQzYWRiNDdkMzAyOTUwOGU1OWM4ZTE5NTgwZmQ3YyJ9',
        //     'username' => 'rk',
        //     'type_id' => '2'
        // ]);
        // $user->save();
    }
}
