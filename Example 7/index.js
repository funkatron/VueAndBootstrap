// first, register a component
Vue.component('bootstrap-item-panel', {
    // inlining the template is the safest approach, and keeps code together. Note that the
    // ticks-string that supports line breaks is an ES6 thing.
    // Editing these can be a big pain, though, so you might consider another approach and
    // put the template in the HTML file with `<script type="text/x-template">` tags. See
    // https://vuejs.org/v2/guide/components.html#X-Templates
    template: `<div class="panel panel-info">
        <div class="panel-heading">
            <h2 class="panel-title">
                <slot name="header"></slot>
            </h2>
        </div>
        <div class="panel-body">
            <p v-if="hasItems">
                <slot name="body-items"></slot>
            </p>
            <!-- v-else has to follow right after -->
            <p v-else>
                <slot name="body-noitems"></slot>
            </p>
        </div>

        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in itemsAlpha">
                <div class="pull-right"><button v-on:click.prevent="removeItem(index)" class="btn btn-danger btn-xs">-</button></div>
                <em>{{ item.name }}</em>
            </li>
        </ul>

        <div class="panel-footer">
            <form class="form-inline" v-on:submit.prevent="addItem">
                <div class="input-group">
                    <input class="form-control" type="text" v-model='newItemName' placeholder="Add Item Name">
                    <span class="input-group-btn">
                        <input type="button" class="btn btn-success" value="+" v-on:click.prevent="addItem">
                    </span>
                </div>
            </form>
        </div>
    </div>`,
    // these define the attributes in the tag that can pass data into component
    props: [], // no props here; we are using slots to pass basic content
    // with a component, data prop has to be a function that returns the data properties hash
    data: function() {
        return {
            items: [ // this will be rendered with the v-for directive in the <li> tag
            ],
            newItemName: ''
        }
    },
    computed: {  // these are like data properties, but dynamic
        itemsAlpha: function() {
            // using Lodash here to do generate sorted array
            return _.orderBy(this.items, ['name'], ['asc'])
        },
        hasItems: function() { // this just determines if this.items.length > 0
            return 0 < this.items.length;
        }
    },
    methods: {
        addItem: function() {
            var newItemName = this.newItemName; // pull value from bound form model
            if (_.trim(newItemName)) { // don't allow empty names
                this.items.push({ name: newItemName });
            }
            this.newItemName = ''; // reset value, which also updates form field
        },
        removeItem: function(index) {
            this.items.splice(index, 1); // remove one item at the passed index
        }
    }
});

// init the root Vue instance. We can use any global components we have previously registered as needed
var vueRoot = new Vue({
    el: "#vue-root",  // this attaches Vue to a DOM element
});
