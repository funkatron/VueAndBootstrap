var panel = new Vue({
    el: "#vue-panel",  // this attaches Vue to a DOM element
    data: {
        panelTitle: 'Awesome bands',
        panelBody: 'This is a list of awesome bands I like',
        bands: [ // this will be rendered with the v-for directive in the <li> tag
            { name: "Chemlab" },
            { name: "Front 242" },
            { name: "Skinny Puppy"},
            { name: "Convenant" },
            { name: "16 Volt" }
        ]
    },
    computed: {  // these are like data properties, but dynamic
        bandsAlpha: function() {
            // using Lodash here to do generate sorted array
            return _.orderBy(this.bands, ['name'], ['asc'])
        }
    }
});