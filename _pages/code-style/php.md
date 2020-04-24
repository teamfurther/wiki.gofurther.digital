---
layout: page
title: "PHP"
permalink: 'code-style/php'
---
<small class="owner">Owner: Development</small>

- [General PHP Rules](#general-php-rules)
- [Organizing Classes](#organizing-classes)
- [Routing](#routing)
- [Views](#views)
- [Blade Templates](#blade-templates)
- [Code Clean-up](#code-clean-up)
{: .toc}

## General PHP Rules[#](#general-php-rules)
Code style must follow [PSR-1](http://www.php-fig.org/psr/psr-1/) and [PSR-2](http://www.php-fig.org/psr/psr-2/). In some cases we might introduce even stricter rules. Generally speaking, everything string-like that's not public-facing should use camelCase.

### PHP Tags[#](#php-tags)
PHP code MUST use the long `<?php ?>` tags; it MUST NOT use the other tag variations, including the short echo `<?= ?>` tags.

### Use Declarations[#](#use-declarations)
Unutilised use declarations should not be left in place.

When more than one use declaration is present, it is preferred they are ordered alphabetically.

### Docblocks[#](#docblocks)
Don't use docblocks for methods that can be fully type hinted (unless you need a description).

Only add a description when it provides more context than the method signature itself. Use full sentences for descriptions, including a period at the end.

```php
// Good
class Url
{
    public static function fromString(string $url): Url
    {
        // ...
    }
}

// Bad: The description is redundant, and the method is fully type-hinted.
class Url
{
    /**
     * Create a url from a string.
     *
     * @param string $url
     *
     * @return \Further\Url\Url
     */
    public static function fromString(string $url): Url
    {
        // ...
    }
}
```

Always use fully qualified class names in Docblocks.

```php
// Good
/**
 * @param string $url
 *
 * @return \Further\Url\Url
 */

// Bad
/**
 * @param string $foo
 *
 * @return Url
 */
```

Docblocks for class properties are required, as there's currently no other way to to typehint these.

```php
// Good
class Foo
{
    /** @var \Further\Url\Url */
    protected $url;

    /** @var string */
    protected $name;
}

// Bad
class Foo
{
    protected $url;
    protected $name;
}
```

When possible, docblocks should be written on one line.

```php
// Good
/** @var string */
/** @test */

// Bad
/**
 * @test
 */
```

If a variable has multiple types, the most common occurring type should be first.

```php
// Good
/** @var \Further\Goo\Bar|null */

// Bad
/** @var null|\Further\Goo\Bar */
```

### Comments[#](#comments)
Comments should be avoided as much as possible by writing expressive code. If you do need to use a comment format it like this:

```php
// There should be space before a single line comment.

/*
 * If you need to explain a lot you can use a comment block. Notice the
 * single * on the first line. Comment blocks don't need to be three
 * lines long or three characters shorter than the previous line.
 */
```

### Whitespace[#](#whitespace)
Statements should have to breathe. In general always add blank lines between statements, unless they're a sequence of single-line equivalent operations. This isn't something enforceable, it's a matter of what looks best in its context.

```php
// Good
public function getPage($url)
{
    $page = $this->pages()->where('slug', $url)->first();

    if (!$page) {
        return null;
    }

    if ($page['private'] && !Auth::check()) {
        return null;
    }

    return $page;
}

// Bad: Everything's cramped together.
public function getPage($url)
{
    $page = $this->pages()->where('slug', $url)->first();
    if (!$page) {
        return null;
    }
    if ($page['private'] && !Auth::check()) {
        return null;
    }
    return $page;
}
```

```php
// Good: A sequence of single-line equivalent operations.
public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->increments('id');
        $table->string('name');
        $table->string('email')->unique();
        $table->string('password');
        $table->rememberToken();
        $table->timestamps();
    });
}
```

Don't add any extra empty lines between {} brackets.

```php
// Good
if ($foo) {
    $this->foo = $foo;
}

// Bad
if ($foo) {

    $this->foo = $foo;

}
```

### Class Properties and Array Keys[#](#class-properties-and-array-keys)
Both class properties and array keys should be in camelCase.

```php
// Good
$array = ['someValue', 'someOtherValue'];
$value = $obj->someValue;

// Bad
$array = ['some_value', 'some_other_value'];
$value = $obj->some_value;
```

Exceptions are configuration variables and language string keys, which should be snake_case.

### Trailing commas
```php
// Good
const person = [
    'Adrian',
    'Sebastian',
];

// Bad, no trailing comma.
const person = [
    'Adrian',
    'Sebastian'
];
```

### If Statements[#](#if-statements)
Always use curly brackets.

```php
// Good
if ($condition) {
   ...
}

// Bad
if ($condition) …
```

Since according to `PSR-2`, the opening brace should be separated from the `if()` condition by a space character, and the `else` should be on the same line and next to the preceding closing brace, comments for the entire `if` or `else` statement should be at the top of the body and formatted as a block comment, like so:

```php
if ($condition) {
    /* What happens in if */
    ...
} else {
    ...
}
```

### Ternary Operators[#](#ternary-operators)
Every portion of a ternary expression should be on its own line unless it's a really short expression.

```php
// Good
$result = $object instanceof Model
    ? $object->name
    : 'A default value';

$name = $isFoo ? 'foo' : 'bar';

// Bad
$result = $object instanceof Model ?
    $object->name :
   'A default value';
```

### Null Coalesce Operators[#](#null-coalesce-operators)
Use null coalesce operators where possible.

```php
// Good
$username = $_GET['user'] ?? 'nobody';

// Bad
$username = $_GET['user'] ?: 'nobody';

$username = isset($_GET['user']) ? $_GET['user'] : 'nobody';
```

### Happy Path[#](#happy-path)
Generally a function should have its unhappy path first and its happy path last. In most cases this will cause the happy path being in an unindented part of the function which makes it more readable.

```php
// Good

if (!$goodCondition) {
    throw new Exception;
}

// do work
```

```php
// Bad

if ($goodCondition) {
    // do work
}

throw new Exception;
```

### Avoid Else[#](#avoid-else)
In general, ```else``` should be avoided because it makes code less readable. In most cases it can be refactored using early returns. This will also cause the happy path to go last, which is desirable.

```php
// Good

if (!$conditionBA) {
   // conditionB A failed
   
   return;
}

if (!$conditionB) {
   // conditionB A passed, B failed
   
   return;
}

// condition A and B passed
```

### Compound Ifs[#](#compound-ifs)
In general, separate ```if``` statements should be preferred over a compound condition. This makes debugging code easier.

```php
// Good
if (!$conditionA) {
   return;
}

if (!$conditionB) {
   return;
}

if (!$conditionC) {
   return;
}

// do stuff
```

```php
// bad
if ($conditionA && $conditionB && $conditionC) {
  // do stuff
}
```

### Infix Operators[#](#infix-operators)
Always use spaces before and after infix operators in expressions.

- Bad: `$i<10`, `$a+$b`, `$a!=$b`, `$a=[]`, `$key=>$value`
- Good: `$i < 10`, `$a + $b`, `$a != $b`, `$a = []`, `$key => $value`

## Organizing Classes[#](#organizing-classes)

### Property and method order[#](#property-and-method-order)
All properties and methods in a class should be ordered alphabetically. Constants should preceed variables. The constructor should always be the first method.

```php
// Good
class Person
{
    public const $id;

    private $address;
    private $age;
    private $name;
    private $title;

    public function __construct() {
        // ...
    }
    
    public function changeAddress($newAddress) {
        // ...    
    }

    public function incrementAge() {
        // ...    
    }
}

// Bad
class Person
{
    private $name;
    private $title;
    private $address;
    private $age;

    public const $id;

    public function __construct() {
        // ...
    }

    public function incrementAge() {
        // ...    
    }
    
    public function changeAddress($newAddress) {
        // ...    
    }
}
```

### Traits[#](#traits)
Traits should always come first in the class definition.

```php
// Good
class Person
{
    use IsMammal;
    
    // ...
}

// Bad
// Good
class Person
{
    public $name;

    use IsMammal;
    
    // ...
}
```

## Routing[#](#routing)
Public-facing urls must use kebab-case.

`https://gofurther.digital/open-source`, `https://gofurther.digital/solutions/time-tracking`

Route names must use camelCase. You are also encouraged to use namespaces.

```php
Route::get('open-source', 'OpenSourceController@index')->name('openSource');
Route::get('solutions/time-tracking', 'SolutionsController@timeTracking')->name('solutions.timeTracking');
```

```html
<a href="{{ route('solutions.timeTracking') }}">
    Time Tracking
</a>
```

All routes have an http verb, that's why we like to put the verb first when defining a route. It makes a group of routes very readable. Any other route options should come after it.

```php
// Good: all http verbs come first
Route::get('/', 'HomeController@index')->name('home');
Route::get('open-source', 'OpenSourceController@index')->middleware('openSource');

// Bad: http verbs not easily scannable
Route::name('home')->get('/', 'HomeController@index');
Route::middleware('openSource')->get('OpenSourceController@index');
```

Route parameters should use camelCase.

```php
Route::get('news/{newsItem}', 'NewsItemsController@index');
```

A route url should not start with `/` unless the url would be an empty string.

```php
// Good
Route::get('/', 'HomeController@index');
Route::get('open-source', 'OpenSourceController@index');

// Bad
Route::get('', 'HomeController@index');
Route::get('/open-source', 'OpenSourceController@index');
```

## Views[#](#views)
View files must use camelCase.

```
resources/
  views/
    openSource.blade.php
```

```php
class OpenSourceController
{
    public function index() {
        return view('openSource');
    }
}
```

## Blade Templates[#](#blade-templates)
Indent using four spaces.

```html
<a href="/open-source">
    Open Source
</a>
```

Always add spaces after control structures.

```html
@if ($condition)
    Something
@endif
```

Translations must be rendered with the `__` function. We prefer using this over `@lang` in Blade views because `__` can be used in both Blade views and regular PHP code. Here's an example:

```html
<h2>{{ __('newsletter.form.title') }}</h2>

{!! __('newsletter.form.description') !!}
```


## Code Clean-up[#](#code-clean-up)
No debugging code can be left in place, i.e. `dd()`, `var_dump()`, `print_r()`, `die()`.

