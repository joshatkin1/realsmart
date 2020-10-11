@component('mail::message')

    Welcome {{$name}} to {{ config('app.name') }}!

    you are now set up as a user using the email address: {{$email}}

{{--    Please let us know if this was not you by following the link below--}}

{{--    {{$unregister_link}}--}}

    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
