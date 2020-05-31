<?php

use Illuminate\Support\Facades\DB;
use JeroenZwart\CsvSeeder\CsvSeeder;

class Courses extends CsvSeeder
{
    public function __construct()
    {
        $this->file = '/database/seeds/Courses.csv';
        $this->header = TRUE;
        $this->tablename='courses';
        $this->delimiter=',';
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::disableQueryLog();
	    parent::run();
    }
}
