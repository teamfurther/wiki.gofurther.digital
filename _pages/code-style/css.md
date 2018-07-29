---
layout: page
title: "CSS"
permalink: 'code-style/css'
---

- [BEVM](#bevm)
- [DOM Structure](#dom-structure)
- [File Structure](#file-structure)
- [General Rules and Guidelines](#general-rules-and-guidelines)
- [Formatting](#formatting)
- [Code Clean-up](#code-clean-up)
{: .toc}

## BEVM[#](#bevm)
We use a CSS naming convention loosely based on [BEM](https://getbem.com).

We only use classes for styling, with the following ingredients:

```css
.component                      /* Component */   
.component__element             /* Child */
.component__element__element    /* Grandchild */

.items                          /* Use plurals if possible */
.item                        

.has-modifier                   /* Single property modifier, can be chained */
.is-modifier     

.component--variation           /* Standalone variation of a component */
.component__element--variation  /* Standalone variation of an element */

.js-hook                        /* Script hook, not used for styling */
```

### .component and .component__element[#](#component-and-component__element)
```html
<div class="member">
    <h2 class="member__name">John Doe</h2>
    ...
</div>
```

- a single reusable component or pattern;
- children are separated with ```__```;
- all lowercase, can contain ```-``` in name;
- avoid more than 3 levels deep.

Be descriptive with component elements. Consider ```class="team__member"``` instead of ```class="team__item"```.

```html
<div class="team">
    <div class="team__member">
    ...
    </div>
</div>
```

You can use plurals & singulars for readability. Consider ```class="member"``` instead of ```class="members__member"```.

```html
<div class="members">
    <div class="member">
    ...
    </div>
</div>
```

### .has-modifier, .is-modifier[#](#has-modifier-is-modifier)
```html
<a class="btn has-error is-active">Click me</a>
```

```scss
.btn {
    &.has-error {
        …  
    }

    &.is-active {
        …
    }
}
```

- a modifier changes only simple properties of a component, or adds a property;
- multiple modifiers are possible. Each modifier is responsible for a property: ```class="alert is-large is-rounded is-success"```. If you keep using these modifiers together, consider a **variation** (see below);
- since modifiers have a single responsibility, the order in HTML or CSS shouldn't matter. Consider using ordering the alphabetically.

### Global .has-modifier, .is-modifier[#](#global-has-modifier-is-modifier)
```html
<div class="is-text-right">...</div>
<div class="is-hidden">...</div>
<div class="has-marginT30">...</div>
```

- reusable utility classes throughout the entire project;
- each modifier class is responsible for a well-defined set of properties. It should be clear that these are not components.

### .component\-\-variation [#](#component--variation) {#component--variation}
```html
<a class="btn btn--delete">Click me</a>
```

```scss
.btn {   
    &--delete {   
        /* Overwrite properties from .btn */
        background-color: red;
        /* Add own properties */ 
        color: white;
        text-transform: uppercase;
    }
}
```

- a variation adds more than one properties at once to a class, and acts as a shorthand for multiple modifiers often used together;
- even variations should be generic and reusable if possible: ```class="team team--large"``` is better than ```class="team team--management"```.

### .js-hook[#](#js-hook)
```html
<div class="js-map …" data-map-icon="url.png" data-map-lat="4.56" data-map-lon="1.23">
     ...
</div>
```

## DOM Structure[#](#dom-structure)

- all styling is done by classes (except for HTML that is out of our control);
- avoid ```#id``` 's for styling;
- make elements easily reusable, moveable in a project, or between projects;
- avoid multiple components on 1 DOM-element. Break them up.

```html
// Good
<div class="grid__col">
    <article class="news">
        …
    </article>
</div>   

// Bad 
<div class="grid__col news">
    …
</div>    
```

Tags are interchangeable since styling is done by class.

```html
// All the same
<div class="article">
<section class="article">
<article class="article">
```

HTML tags that are out of control (eg. the output of an editor) are scoped by the component.

```html
<div class="article">
    <!-- Editor output -->
</div>
```

```css
.article {
    /* Tag instead of class here */
    & h2 {
        …
    }

    & p {
        …
    }    
}    
```

### Class Order[#](#class-order)

```html
<div class="component__element has-modifier js-hook">...</div>
```

Visual class grouping can be done with ```|```:

```html
<div class="news__item is-active is-blue is-small | js-modal-trigger">...</div>
```

## File Structure[#](#file-structure)
We typically use 4 folders and a main ```app.scss``` or ```site.scss``` file:

```
|-- base       : reset, basic html elements, global modifiers, mixins, variables
|-- components : less reusable specific components
|-- elements   : reusable elements
|-- vendor     : custom files from 3rd party components like fancybox, select2 etc.
`-- app.scss   : main file
```

## General Rules and Guidelines[#](#general-rules-and-guidelines)

### Shorthand Notation[#](#shorthand-notation)
CSS offers a variety of shorthand properties (like font) that should be used whenever possible, even in cases where only one value is explicitly set.

Using shorthand properties is useful for code efficiency and understandability.

```scss
// Good
.element {
    border-top: none;
    font: 1em / 1.5 georgia, serif;
    padding: 0 1em 2em;
}

// Bad
.element {
    border-top-style: none;
    font-family: georgia, serif;
    font-size: 1em;
    line-height: 1.5;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;
}
```

### Magic Numbers Are Evil[#](#magic-numbers) {#magic-numbers}
Despite the super fun sounding name, magic numbers are a bad thing. It is a term for "unnamed numerical constant". As in, just some number plunked into the code that is probably vital to things working correctly but are very difficult for anyone not intimately familiar with the code to understand what it is for.

Magic numbers in CSS refer to values which "work" under some circumstances but are frail and prone to break when those circumstances change.

```scss
.box {
    margin-top: 37px;
}
```

## Formatting[#](#formatting)

### Indentation[#](#indentation)
Code MUST use an indent of 4 spaces, and MUST NOT use tabs for indenting.

```scss
.element {
    border: 1px solid black;
}
```

### Capitalization[#](#capitalization)
Use only lowercase.

All code has to be lowercase: This applies to CSS selectors, properties, and property values (with the exception of strings).

```scss
// Good
color: #E5E5E5;

// Bad
color: #e5e5e5;
```

### Trailing Whitespace[#](#trailing-whitespace)
Remove trailing white spaces.

Trailing white spaces are unnecessary and can complicate diffs.
 
```scss
// Good
content: 'I am alright';

// Bad
content: 'Diff will cry';_
```

### Quotes[#](#quotes)
Use single ('') rather than double ("") quotation marks for attribute selectors or property values. Do not use quotation marks in URI values.

```scss
// Good
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

html {
    font-family: 'Open Sans', arial, sans-serif;
}

// Bad
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
    font-family: "Open Sans", arial, sans-serif;
}
```

Quote attribute values in selectors.

```scss
// Good
input[type="value"] {
    ...
}

// Bad
input[type=value] {
    ...
}
```

### General Formatting[#](#general-formatting)
```scss
/* Comment */
.component {                      /* Space before bracket */                                   
    @at-rule …;                   /* @at-rules first */
         
    a-property: value;            /* Props sorted alphabetically */
    b-property: #eebbcc;          /* We prefer the use of 6 character hexadecimal notation */ 
    c-property: .45em;            /* No leading zero's */
    d-property: 0;            	  /* Omit unit specification after “0” values */
    
    @include tablet() {           /* We use a mobile first approach. You should include mobile properties first, then overwrite them with tablet, desktop and so on */
        …
    }

    &:hover {                     /* Pseudo class */
        …
    }
    
    &:before,
    &:after {                     /* Pseudo-element, each on a line */
        …                       
    }
    
    &.has-modifier {
        …                           
    }
     
    &.is-modifier {
        …                        
    }

    &--variation {                /* A component with few extra modifications often used together */
        …
    }
    
    /* Try to avoid */      
    h1 {                          /* Avoid unless you have no control over the HTML inside the `.component` */
        …
    }
    
    &__element {                  /* Use `&__element` so that generated CSS is flat */
        …
    }     
}
```

## Code Clean-up[#](#code-clean-up)
Do not leave commented out CSS code in place.

