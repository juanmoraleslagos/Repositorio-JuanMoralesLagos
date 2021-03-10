<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * Indicates whether the XSRF-TOKEN cookie should be set on the response.
     *
     * @var bool
     */
    protected $addHttpCookie = true;

    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
         /* Users API ROUTES */
         '/users/index','/users/store','/users/update','/users/delete','/users/login','/users/searchRecovery',

         /* Regions API ROUTES */
         '/regions/index','/regions/store','/regions/update','/regions/delete',

         /* Notarys API ROUTES */
         '/notarys/index','/notarys/store','/notarys/update','/notarys/delete',

         /* Dates API ROUTES */
         '/dates/index','/dates/store','/dates/update','/dates/delete',

         /* Times API ROUTES */
         '/times/index','/times/store','/times/update','/times/delete',

         /* Administrators API ROUTES */
         '/administrators/index','/administrators/store','/administrators/update','/administrators/delete','/administrators/login',

         /* Gender API ROUTES */
         '/genders/index','/genders/store',

         /* Communes API ROUTES */
         '/communes/index','/communes/store','/communes/delete',

         /* Notarias API ROUTES */
         '/notarias/index','/notarias/store','/notarias/update','/notarias/delete',

         /* TypeDocument API ROUTES */
         '/typedocuments/index','/typedocuments/store',

         /* Document API ROUTES */
         '/documents/index','/documents/store',

         /* DateTime API ROUTES */
         '/datetime/index','/datetime/store',

         /* NotariaDocument API ROUTES */
         '/notariadocument/index','/notariadocument/store',

         /* DocumentPdf API ROUTES */
         '/documentpdf/index','/documentpdf/store',

         /* UserNotaria API ROUTES */
         '/usernotaria/index','/usernotaria/store',

         /* Detail Order API ROUTES */
         '/detailorder/index','/detailorder/store',
    ];
}
