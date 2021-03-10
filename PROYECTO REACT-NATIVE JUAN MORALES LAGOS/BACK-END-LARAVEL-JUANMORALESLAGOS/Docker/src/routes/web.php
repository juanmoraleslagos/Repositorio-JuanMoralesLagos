<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Regions' API ROUTE
|--------------------------------------------------------------------------
|
*/

Route::post('regions/index','RegionsController@index')->name('regions.index');
Route::post('regions/store','RegionsController@store')->name('regions.store');
Route::post('regions/update','RegionsController@update')->name('regions.update');
Route::post('regions/delete','RegionsController@delete')->name('regions.delete');


/*
|--------------------------------------------------------------------------
| Users' API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('users/index','UsersController@index')->name('users.index');
Route::post('users/store','UsersController@store')->name('users.store');
Route::post('users/update','UsersController@update')->name('users.update');
Route::post('users/delete','UsersController@delete')->name('users.delete');
Route::post('users/login','UsersController@login')->name('users.login');
Route::post('users/searchRecovery','UsersController@searchRecovery')->name('searchRecovery');

/*
|--------------------------------------------------------------------------
| Notarys' API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('notarys/index','NotarysController@index')->name('notarys.index');
Route::post('notarys/store','NotarysController@store')->name('notarys.store');
Route::post('notarys/update','NotarysController@update')->name('notarys.update');
Route::post('notarys/delete','NotarysController@delete')->name('notarys.delete');

/*
|--------------------------------------------------------------------------
| Dates' API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('dates/index','DatesController@index')->name('dates.index');
Route::post('dates/store','DatesController@store')->name('dates.store');
Route::post('dates/update','DatesController@update')->name('dates.update');
Route::post('dates/delete','DatesController@delete')->name('dates.delete');

/*
|--------------------------------------------------------------------------
| Times' API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('times/index','TimesController@index')->name('times.index');
Route::post('times/store','TimesController@store')->name('times.store');
Route::post('times/update','TimesController@update')->name('times.update');
Route::post('times/delete','TimesController@delete')->name('times.delete');


/*
|--------------------------------------------------------------------------
| Administrators' API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('administrators/index','AdministratorsController@index')->name('administrators.index');
Route::post('administrators/store','AdministratorsController@store')->name('administrators.store');
Route::post('administrators/update','AdministratorsController@update')->name('administrators.update');
Route::post('administrators/delete','AdministratorsController@delete')->name('administrators.delete');
Route::post('administrators/login','AdministratorsController@login')->name('administrators.login');


/*
|--------------------------------------------------------------------------
| Gender' API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('genders/index','GendersController@index')->name('genders.index');
Route::post('genders/store','GendersController@store')->name('genders.store');


/*
|--------------------------------------------------------------------------
| Communes' API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('communes/index','CommunesController@index')->name('communes.index');
Route::post('communes/store','CommunesController@store')->name('communes.store');
Route::post('communes/delete','CommunesController@delete')->name('communes.delete');


/*
|--------------------------------------------------------------------------
| Notarias' API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('notarias/index','NotariasController@index')->name('notarias.index');
Route::post('notarias/store','NotariasController@store')->name('notarias.store');
Route::post('notarias/update','NotariasController@update')->name('notarias.update');
Route::post('notarias/delete','NotariasController@delete')->name('notarias.delete');

/*
|--------------------------------------------------------------------------
| TypeDocument's API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('typedocuments/index','TypeDocumentsController@index')->name('typedocuments.index');
Route::post('typedocuments/store','TypeDocumentsController@store')->name('typedocuments.store');


/*
|--------------------------------------------------------------------------
| Document's API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('documents/index','DocumentsController@index')->name('documents.index');
Route::post('documents/store','DocumentsController@store')->name('documents.store');


/*
|--------------------------------------------------------------------------
| DateTime's API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('datetime/index','DateTimeController@index')->name('datetime.index');
Route::post('datetime/store','DateTimeController@store')->name('datetime.store');


/*
|--------------------------------------------------------------------------
| NotariaDocument's API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('notariadocument/index','NotariaDocumentController@index')->name('notariadocument.index');
Route::post('notariadocument/store','NotariaDocumentController@store')->name('notariadocument.store');


/*
|--------------------------------------------------------------------------
| DocumnentPdf's API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('documentpdf/index','DocumentPdfController@index')->name('documentpdf.index');
Route::post('documentpdf/store','DocumentPdfController@store')->name('documentpdf.store');

/*
|--------------------------------------------------------------------------
| UserNotaria's API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('usernotaria/index','UserNotariaController@index')->name('usernotaria.index');
Route::post('usernotaria/store','UserNotariaController@store')->name('usernotaria.store');


/*
|--------------------------------------------------------------------------
| DetailOrder's API ROUTE
|--------------------------------------------------------------------------
|
*/
Route::post('detailorder/index','DetailOrderController@index')->name('detailorder.index');
Route::post('detailorder/store','DetailOrderController@store')->name('detailorder.store');

