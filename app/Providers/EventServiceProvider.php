<?php

namespace App\Providers;
use App\Listeners\Administrado\NewRegisterEventSubscriber;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();


        // TrabajadorDia::observe(TrabajadorDiaObserver::class);
    }

    protected $subscribe = [
        NewRegisterEventSubscriber::class,
    ];
}
