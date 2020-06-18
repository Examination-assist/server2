<?php

use Illuminate\Support\Facades\DB;
use JeroenZwart\CsvSeeder\CsvSeeder;

class LinkSeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->file = '/database/seeds/Links.csv';
        $this->header = TRUE;
        $this->tablename='links';
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
