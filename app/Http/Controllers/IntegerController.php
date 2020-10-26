<?php

namespace App\Http\Controllers;

use App\Models\Integer;
use Illuminate\Http\Request;

class IntegerController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
        //$this->middleware('userDeviceAuth');
    }

    final public function getNumbers(){
        try {

            $integers = new Integer();
            $numbers = $integers::all();
            if(count($numbers) < 1){
                $this->insertNumbers(100);
            }

            $numbers = $integers::all();

            return response($numbers, 200)
                ->header('Content-Type', 'application/json');

        }catch(\Exception $exception){
            return response('failed request', 500)
                ->header('Content-Type', 'text/plain');
        }
    }

    final public function insertNumbers($num){
        try{
            $data = array();

            for($i = 1; $i <= $num; $i++){
                $int = array("number" => $i, "used" => 0);
                array_push($data, $int);
            }

            Integer::insert($data);

            return true;
        }catch (\Exception $exception){
            return false;
        }
    }

    final public function swapIntegerUsage(Request $request){

            $number = $request->number;

            $int = Integer::where('number', $number)->first();

            $used = ($int->used === 0)? 1 : 0;


            Integer::where('number', $number)
                    ->update(['used' => $used]);

            return response('successful request', 200)
                ->header('Content-Type', 'text/plain');
    }

}
