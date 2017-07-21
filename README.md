# VueAndBootstrap

Examples of VueJS and Bootstrap working together

----

This is a set of **self-contained** examples of using VueJS and Bootstrap together. They are intended to
demonstrate basic concepts of VueJS within an attractive, commonly-used UI framework.

No additional build tools are required. All JS is loaded from CDNs. The focus here is on learning VueJS and
how it can be applied to existing projects without adopting a new toolchain or throwing out old, working code.

## [Example 1](./Example%201) - Bootstrap panel rendered with Vue

A basic "hello world"-type example, showing how to instantiate Vue and render of data inside the DOM.

## [Example 2](./Example%202) - Rendering a list view with `v-for`

Rendering an array of data into a list view using the [`v-for` directive](https://vuejs.org/v2/guide/list.html). 

## [Example 3]](./Example%203) - Rendering a *sorted* list view with `computed`

Using a [`computed` property](https://vuejs.org/v2/guide/computed.html) to render alphabetically-sorted data without modifying the original array. 

## [Example 4](./Example%204) - Add and delete items in list view dynamically

Adding functionality via [`methods`](https://vuejs.org/v2/guide/events.html#Method-Event-Handlers) to add and remove items from an array, and demonstrating the automatic
re-rendering of Vue.

## [Example 5](./Example%205) - Conditional rendering

Utilize the [`v-if` directive](https://vuejs.org/v2/guide/conditional.html) to conditionally render based on the state of the data.

## [Example 6](./Example%206) - Simple custom component

A simple example of a [custom component](https://vuejs.org/v2/guide/components.html), allowing for complex custom functionality to be wrapped in
HTML-style tags.

## [Example 7](./Example%207) - Complex custom component, slots

Use a [custom component](https://vuejs.org/v2/guide/components.html) to encapsulate the complex functionality of the editable list group in simple HTML tags.
Demonstrates more complex use of the [`<slot>` tag](https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots) for "content distribution"
a la [Web Components](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md)

----

Ed Finkler    
<coj@funkatron.com>        
[@funkatron](https://twitter.com/funkatron)
