// first, register a component
Vue.component('bootstrap-panel', {
    // inlining the template is the safest approach, and keeps code together. Note that the
    // ticks-string that supports line breaks is an ES6 thing
    template: `<div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">{{ heading }}</h3>
        </div>
        <div class="panel-body">
            <slot>
            default body
            </slot>
        </div>
        <div class="panel-footer">{{ footer }}</div>
    </div>`,
    // these define the attributes in the tag that can pass data into component
    props: ['heading', 'footer']
});

// then create the root Vue instance
var vueRoot = new Vue({
    el: "#vue-root",  // this attaches Vue to a DOM element
});
