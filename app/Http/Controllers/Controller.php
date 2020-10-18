<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserSession;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    final public function testFunction(){

        DB::table('sessions')->insert(
            [
                "user_id" => session('id'),
                "payload" => json_encode(["name" => "joshua john atkin"]),
                "last_activity" => time()
            ]
        );

        $user = User::find( session('id'));
        dd($user->session());
    }
}
