@component('mail::message')

    Please find your verification code below.

    Verification Code : {{$code}}

    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
