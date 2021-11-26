---
layout: page
title: "Vue Best Practices"
permalink: 'coding/vue-best-practices'
---
<small class="owner">Owner: Development</small> _Last revision: 12.11.2021_

- [General Rules](#general-rules)
- [Directive Shorthands](#directive-shorthands)
- [Component/instance Options Order](#component-instance-options-order)
- [Element Attribute Order](#element-attribute-order)
- [Templates](#templates)
{: .toc}
                      

## General Rules[#](#general-rules)
When writing Vue code, always adhere to the [Vue style guide](https://vuejs.org/v2/style-guide/), unless otherwise specified below.

## Directive Shorthands[#](#directive-shorthands)
Directive shorthands (: for v-bind:, @ for v-on: and # for v-slot) should not be used, as they are less readable.

```html
// Good
<input
  v-bind:value="newTodoText"
  v-bind:placeholder="newTodoInstructions"
>

// Bad
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>
```

## Component/instance Options Order[#](#component-instance-options-order) {#component-instance-options-order}
The [Vue style guide](https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended) specifies a recommended order for component/instance options, but we prefer putting them in alphabetical order, the only exception being ```el```, which might go first.

```javascript
const app = new Vue({
    el: '#app',
    components: {
        // ...
    },
    created: function () {
        // ...
    },
    data: {
        // ...
    },
    methods: {
        // ...
    },
    mounted: function () {
        // ...
    },
    watch: {
        // ...
    }
});
```

## Element Attribute Order[#](#element-attribute-order)
The [Vue style guide](https://vuejs.org/v2/style-guide/#Element-attribute-order-recommended) specifies a recommended order for element attributes, but we prefer putting standard HTML attributes first, followed by Vue attributes in alphabetical order.

```html
<my-element class="component__element has-modifier" id="my-first-element"
    v-bind:value="myValue"
    v-if="isMyElementVisible"
    v-on:click="toggleMyElement"
></my-element>
```

## Templates
If a Vue component has so many props (or listeners, directives, ...) that they don't fit on one line anymore you need to put every prop on its own line. Every line needs to be intended with 4 spaces. The closing ```>``` goes on a new unintended line followed by the closing tag.

```html
<template>
    <!-- Good -->
    <my-component myProp="value"></my-component>
</template>
```

```html
<template>
    <!-- Good -->
    <my-component
        v-if="shouldDisplay"
        myProp="value"
        @change="handleEvent"
    ></my-component>
</template>
```

```html
<template>
    <!-- Bad: wrong indentation, closing `>` is not correct placed -->
    <my-component
            v-if="shouldDisplay"
            myProp="value"
            @change="handleEvent">
    </my-component>
</template>
```