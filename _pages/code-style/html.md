---
layout: page
title: "HTML"
permalink: 'code-style/html'
---
<small class="owner">Owner: Development</small> _Last revision: 24.04.2020_

- [General Rules and Guidelines](#general-rules-and-guidelines)
- [Formatting](#formatting)
- [Code Clean-up](#code-clean-up)
{: .toc}

## General Rules and Guidelines[#](#general-rules-and-guidelines)

### Doctype[#](#doctype)
Enforce standards mode and more consistent rendering in every browser possible with this simple doctype at the beginning of every HTML page.
```html
<!DOCTYPE html>
```

### HTML Validity[#](#html-validity)
Use valid HTML where possible.

Using valid HTML is a measurable baseline quality attribute that contributes to learning about technical requirements and constraints, and that ensures proper HTML usage.

### Language Attributes[#](#language-attributes)
From the HTML5 spec: Authors are encouraged to specify a lang attribute on the root html element, giving the document's language. This aids speech synthesis tools to determine what pronunciations to use, translation tools to determine what rules to use, and so forth.

```html
<html lang="en-gb">
    ...
</html>
```

### Character Encoding[#](#character-encoding)
Quickly and easily ensure proper rendering of your content by declaring an explicit character encoding. When doing so, you may avoid using character entities in your HTML, provided their encoding matches that of the document (generally UTF-8).

```html
<meta charset="UTF-8" />
```

### CSS and JS includes[#](#css-and-js-includes)
Per HTML5 spec, typically there is no need to specify a type when including CSS and JavaScript files as text/css and text/javascript are their respective defaults.

```html
// Good
<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>

// Bad
<link type="text/css" rel="stylesheet" href="style.css" />
<script type="text/javascript" src="script.js"></script>
```

### Separation of Concerns[#](#separation-of-concerns)
Separate structure from presentation from behavior.

Strictly keep structure (markup), presentation (styling), and behavior (scripting) apart, and try to keep the interaction between the three to an absolute minimum.

```html
// Good
<strong class="highlighted-text">I'm cool.</strong>

// Bad
<strong style="background-color: #fff00; font-size: 20px;>I'm frowned upon.</strong>
```

### Semantics[#](#semantics)
Use elements for what they have been created for. For example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.

Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons.

```html
// Good
<strong>Good semantics</strong>

// Bad
<span class="bold">Bad semantics</span>
```

### JS Generated Markup[#](#js-generated-markup)
Writing markup in a JavaScript file makes the content harder to find, harder to edit, and less performant. Avoid it whenever possible.

## Formatting[#](#formatting)

### Indentation[#](#indentation)
Code MUST use an indent of 4 spaces, and MUST NOT use tabs for indenting.

```html
<a href="/open-source">
    Open Source
</a>
```

### Capitalization[#](#capitalization)
Use only lowercase.

All code has to be lowercase: This applies to HTML element names, attributes and attribute values (unless text/CDATA).

```html
// Good
<img src="davinci.jpg" alt="Portrait of Leondardo Da Vinci" />

// Bad
<IMG SRC="davinci.jpg" ALL="Portrait of Leondardo Da Vinci" />
```

### Trailing Whitespace[#](#trailing-whitespace)
Remove trailing white spaces.

Trailing white spaces are unnecessary and can complicate diffs.
 
```html
// Good
<p>I'm alright</p>

// Bad
<p>Diff will cry</p>_
```

### Quotes[#](#quotes)
Always use double quotes, never single quotes on attributes.

```html
// Good
<a class="btn" href="https://gofurther.digital" target="_blank">Further</a>

// Bad
<a class='btn' href='https://gofurther.digital' target='_blank'>Further</a>
```

### Self-closing Tags[#](#self-closing-tags)
Always include trailing slashes in self-closing elements. Trailing slashes were only required in the old XHTML spec, HTML5 spec says they're optional. But we find them to help us more quickly identify elements that don't need a closing tag.

```html
// Good
<meta charset="UTF-8" />
<img src="davinci.jpg" alt="Portrait of Leondardo Da Vinci" />
<br />

// Bad
<link rel="stylesheet" href="style.css">
<input type="text" name="email" value="" placeholder="Your email">
```

### Optional Closing Tags[#](#optional-closing-tags)
Don’t omit optional closing tags (e.g. ```</li>``` or ```</body>```).

### General Formatting[#](#general-formatting)
Use a new line for every block, list, or table element, and indent every such child element.

Independent of the styling of an element (as CSS allows elements to assume a different role per display property), put every block, list, or table element on a new line.

Also, indent them if they are child elements of a block, list, or table element.

```html
<blockquote>
    <p><em>Space</em>, the final frontier.</p>
</blockquote>

<ul>
    <li>Moe</li>
    <li>Larry</li>
    <li>Curly</li>
</ul>

<table>
    <thead>
        <tr>
            <th scope="col">Income</th>
            <th scope="col">Taxes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>$ 5.00</td>
            <td>$ 4.50</td>
        </tr>
    </tbody>
</table>
```

### Mark End of Large Elements[#](#mark-end-of-large-elements)
You should always mark the end of a DOM element with a lots of content by placing a comment after the closing tag.

```html
<div class="content">
<!-- ... -->
</div> <!-- .content -->
```

### Attribute Order[#](#attribute-order)
HTML attributes should come in this particular order for easier reading of code. Classes make for great reusable components, so they come first. Ids are more specific and should be used sparingly (e.g., for in-page bookmarks), so they come second.

```html
<input class="form-control" id=”firstname" name="firstname" type="text" value="" />
```

### Boolean Attributes[#](#boolean-attributes)
A boolean attribute is one that needs no declared value. XHTML required you to declare a value, but HTML5 has no such requirement:

The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value. If the attribute is present, its value must either be the empty string or [...] the attribute's canonical name, with no leading or trailing whitespace.

**In short, don't add a value.**

```html
<input type="checkbox" value="1" checked />

<select>
    <option value="1" selected>1</option>
</select>
```

## Code Clean-up[#](#code-clean-up)
Do not leave commented out HTML code in place.

