---
layout: page
title: "Laravel Best Practices"
permalink: 'code-style/laravel-best-practices'
---
<small class="owner">Owner: Development</small>

- [Controllers](#controllers)
- [Form Requests](#form-requests)
- [Service Classes](#service-classes)
{: .toc}
                       
## Controllers[#](#controllers)
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

## Form Requests[#](#form-requests)
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
