---
layout: page
title: "Laravel Best Practices"
permalink: 'code-style/laravel-best-practices'
---
<small class="owner">Owner: Development</small>

- [Naming Conventions](#naming-conventions)
- [Commands](#commands)
- [Routing](#routing)
- [Service Classes](#service-classes)
- [Validation](#validation)
{: .toc}


## Naming Conventions[#](#naming-conventions)
Naming things is often seen as one of the harder things in programming. That's why we've established some high level guidelines for naming classes.

### Commands[#](#naming-commands) {#naming-commands}
The names given to artisan commands should all be kebab-cased.

```
# Good
php artisan delete-old-records

# Bad
php artisan deleteOldRecords
```

### Configuration files[#](#naming-configuration-files) {#naming-configuration-files}
Configuration files must use kebab-case.

```
config/
  pdf-generator.php
```

Configuration keys must use snake_case.

```php
// config/pdf-generator.php
return [
    'chrome_path' => env('CHROME_PATH'),
];
```

Avoid using the ```env``` helper outside of configuration files. Create a configuration value from the ```env``` variable like above.

### Controllers[#](#naming-controllers) {#naming-controllers}
Generally controllers are named by the plural form of their corresponding resource and a Controller suffix. This is to avoid naming collisions with models that are often equally named.

e.g. `UsersController` or `PostsController`

Try to keep controllers simple and stick to the default CRUD keywords (index, create, store, show, edit, update, destroy). Extract a new controller if you need other actions.

In the following example, we could have `PostsController@favorite`, and `PostsController@unfavorite`, or we could extract it to a separate `FavoritePostsController`.

```php
class PostsController
{
    public function create()
    {
        // ...
    }

    // ...

    public function favorite(Post $post)
    {
        request()->user()->favorites()->attach($post);

        return response(null, 200);
    }

    public function unfavorite(Post $post)
    {
        request()->user()->favorites()->detach($post);

        return response(null, 200);
    }
}
```

Here we fall back to default CRUD words, create and destroy.

```php
class FavoritePostsController
{
    public function create(Post $post)
    {
        request()->user()->favorites()->attach($post);

        return response(null, 200);
    }

    public function destroy(Post $post)
    {
        request()->user()->favorites()->detach($post);

        return response(null, 200);
    }
}
```

This is a loose guideline that doesn't need to be enforced.

When writing non-resourceful controllers you might come across invokable controllers that perform a single action. These can be named by the action they perform again suffixed by Controller.

e.g. `PerformCleanupController`

### Events[#](#naming-events) {#naming-events}
Events will often be fired before or after the actual event. This should be very clear by the tense used in their name.

E.g. `ApprovingLoan` before the action is completed and `LoanApproved` after the action is completed.

### Form Requests[#](#naming-form-requests) {#naming-form-requests}
Always name your form requests by the singular name of your resource, suffixed with `Request`.

e.g. `PostRequest`

In some cases, you need separate form requests for the `create()` and `update()` controller methods. In these cases put the method name between the name of your resource and the `Request` suffix.

e.g. `PostCreateRequest` or `PostUpdateRequest`

### Jobs[#](#naming-jobs) {#naming-jobs}
A job's name should describe its action.

E.g. `CreateUser` or `PerformDatabaseCleanup`

### Listeners[#](#naming-listeners) {#naming-listeners}
Listeners will perform an action based on an incoming event. Their name should reflect that action with a `Listener` suffix. This might seem strange at first but will avoid naming collisions with jobs.

E.g. `SendInvitationMailListener`

### Mailables[#](#naming-mailables) {#naming-mailables}
Again to avoid naming collisions we'll suffix mailables with `Mail`, as they're often used to convey an event, action or question.

e.g. `AccountActivatedMail` or `NewEventMail`

### Models[#](#naming-models) {#naming-models}
Always name your models by the singular name of your resource.
 
e.g. `User` or `Post`

### Notifications[#](#naming-notifications) {#naming-notifications}
Again to avoid naming collisions we'll suffix notifications with `Notification`, as they're often used to convey an event, action or question.

e.g. `AccountActivatedNotification` or `NewEventNotication`
                       
                       

### Services[#](#naming-services) {#naming-services}
Always name your services by the singular name of your resource, suffixed with `Service`.

e.g. `PostService`

### Views[#](#naming-views) {#naming-views}
View files must use kebab-case.

```
resources/
    views/
        pages/
            cookies-policy.blade.php
```

## Commands[#](#commands)
A command should always give some feedback on what the result is. Minimally you should let the ```handle``` method spit out a comment at the end indicating that all went well.

```php
// in a Command
public function handle()
{
    // do some work

    $this->comment('All ok!');
}
```

If possible use a descriptive success message eg. ```Old records deleted```.

## Facades[#](#facades)
Whenever possible, avoid using facades in controllers, models or services.

Instead, use a the available helper function or inject the underlying class into your object. Use the [Facade Class Reference](https://laravel.com/docs/master/facades#facade-class-reference) to find the underlying class.

```php
// Good
session(['cart' => $data]);

// Bad
Session::put('cart', $data);
```

```php
// Good
use Illuminate\Database\DatabaseManager;

class MyClass
{
    protected $db;

    public function __construct(DatabaseManager $db)
    {
        $this->db = $db;
    }
    
    public function getComplexQueryResult()
    {
        return $this->db->raw("...");
    }
}

// Bad
class MyClass
{    
    public function getComplexQueryResult()
    {
        return DB::raw("...");
    }
}
```

## Routing[#](#routing)
Public-facing urls must use kebab-case.

```
https://gofurther.digital/en/custom-software-development
https://gofurther.digital/en/blog/posts/digital-transformation-pt1-introduction
```

Route names must use kebab-case with dot notation.

```php
// Good
Route::get('custom-software-development', 'CustomSoftwareDevelopmentController@show')
    ->name('custom-software-development');
Route::get('blog/posts/{blogPath}', 'BlogController@show')->name('blog.show');

// Bad
Route::get('custom-software-development', 'CustomSoftwareDevelopmentController@show')
       ->name('customSoftwareDevelopment');
Route::get('blog/posts/{blogPath}', 'BlogController@show')->name('blog-show');
```

When defining routes, use method chaining instead of the array notation.

```php
// Good
Route::get('custom-software-development', 'CustomSoftwareDevelopmentController@show')
    ->name('custom-software-development');

// Bad
Route::get('custom-software-development', [
    'as' => 'custom-software-development',
    'uses' => 'CustomSoftwareDevelopmentController@show',
]);
```

All routes have an http verb, that's why we like to put the verb first when defining a route. It makes a group of routes very readable. Any other route options should come after it.

```php
// Good
Route::get('custom-software-development', 'CustomSoftwareDevelopmentController@show')
    ->name('custom-software-development');

// Bad
Route::name('custom-software-development')
    ->get('custom-software-development', 'CustomSoftwareDevelopmentController@show');
```

Route parameters should use camelCase.

```php
// Good
Route::get('blog/posts/{blogPath}', 'BlogController@show')->name('blog.show');

// Bad
Route::get('blog/posts/{blog_path}', 'BlogController@show')->name('blog.show');
```

A route url should not start with ```/``` unless the url would be an empty string.

```php
// Good
Route::get('/', 'HomeController@show')->name('home');
Route::get('custom-software-development', 'CustomSoftwareDevelopmentController@show')
    ->name('custom-software-development');

// Bad
Route::get('', 'HomeController@show')->name('home');
Route::get('/custom-software-development', 'CustomSoftwareDevelopmentController@show')
    ->name('custom-software-development');
```

If your route only needs to return a view, you may use the ```Route::view``` method.

```php
// Good
Route::view('privacy-policy', 'pages.privacy')->name('privacy');

// Bad
Route::get('privacy-policy', 'PrivacyPolicyController@show')->name('privacy');
```

## Service Classes[#](#service-classes)
A controller must only have the responsibility to return a response. Move business logic from controllers to service classes.
 
```php
// Good
public function store(Request $request)
{
    $this->articleService->handleUploadedImage($request->file('image'));

    // ...
}

class ArticleService
{
    public function handleUploadedImage($image)
    {
        if (!is_null($image)) {
            $image->move(public_path('images') . 'temp');
        }
    }
}

// Bad
public function store(Request $request)
{
    if ($request->hasFile('image')) {
        $request->file('image')->move(public_path('images') . 'temp');
    }
    
    // ...
}
```

## Validation[#](#validation)
In most cases it is preferable to move validation in separate form request classes.

```php
// Good
public function store(PostRequest $request)
{    
    // ...
}

class PostRequest extends Request
{
    public function rules()
    {
        return [
            'title' => 'required|unique:posts|max:255',
            'body' => 'required',
            'publish_at' => 'nullable|date',
        ];
    }
}


// Bad
public function store(Request $request)
{
    $request->validate([
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
        'publish_at' => 'nullable|date',
    ]);

    // ...
}
```

When using multiple rules for one field in a form request, avoid using ```|```, always use array notation. Using an array notation will make it easier to apply custom rule classes to a field.

```php
// Good
public function rules()
{
    return [
        'email' => ['required', 'email'],
    ];
}

// Bad
public function rules()
{
    return [
        'email' => 'required|email',
    ];
}
```

Custom validation rules should be always defined using a rule object instead of closures or extending the ```Validator``` facade. 