<?php

use Illuminate\Database\Seeder;
use App\UserType;

class UserTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $usertype = new UserType;
        // $usertype->type_id = 0;
        $usertype->type = 'Admin';

        $usertype->save();

        $usertype = new UserType;
        // $usertype->type_id = 1;
        $usertype->type = 'Reviewer';

        $usertype->save();

        $usertype = new UserType;
        // $usertype->type_id = 2;
        $usertype->type = 'Translator';

        $usertype->save();
    }
}
