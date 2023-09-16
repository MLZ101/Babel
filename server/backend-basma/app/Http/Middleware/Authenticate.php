<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Closure;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null : route('login');
    }

    public function handle($req, Closure $next, ...$guards)
    {
        if ($jwt = $req->cookie('jwt')) {
            $req->headers->set('Authorization', 'Bearer ' . $jwt);
        }

        $this->authenticate($req, $guards);

        return $next($req);
    }
}
