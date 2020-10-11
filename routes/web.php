<?php

use Illuminate\Support\Facades\Route;


//FALLBACK ROUTE
Route::fallback(function () {return redirect('/home');});

Route::get('/', function () {
    return view('home');
});
Route::get('/home', function () {
    return view('home');
});

Auth::routes();

//DEVICE VERIFICATION ROUTES
Route::get('/verify-device', [App\Http\Controllers\DeviceVerificationController::class, 'index'])->name('device-verification');
Route::post('/verify-device/resend-code', [App\Http\Controllers\DeviceVerificationController::class, 'resendDeviceVerificationCode']);
Route::post('/verify-device/submit', [App\Http\Controllers\DeviceVerificationController::class, 'submitDeviceVerificationCode']);

//APP ROUTES
Route::get('/app', [App\Http\Controllers\AppController::class, 'index'])->name('app');


//RESOURCES ROUTES
Route::get('/resources/app/data/session/all', [App\Http\Controllers\UserController::class, 'fetchAllSessionData']);
