var panel = new Vue({
    el: "#vue-panel",  // this attaches Vue to a DOM element
    data: {
        panelTitle: 'Awesome bands',
        panelBody: 'This is a list of awesome bands I like',
        noBandsPanelBody: 'Add some bands, dude',
        bands: [ // this will be rendered with the v-for directive in the <li> tag
        ],
        newBandName: ''
    },
    computed: {  // these are like data properties, but dynamic
        bandsAlpha: function() {
            // using Lodash here to do generate sorted array
            return _.orderBy(this.bands, ['name'], ['asc'])
        },
        hasBands: function() { // this just determines if this.bands.length > 0
            return 0 < this.bands.length;
        }
    },
    methods: {
        addBand: function() {
            var newBandName = this.newBandName; // pull value from bound form model
            if (_.trim(newBandName)) { // don't allow empty names
                this.bands.push({
                    id: uuidv4(), // use UUID for unique identifier
                    name: newBandName
                });
            }
            this.newBandName = ''; // reset value, which also updates form field
        },
        removeBand: function(id) {
            // we have to remove by ID, because of the alpha sorting
            var index = _.findIndex(this.bands, {id:id});
            this.bands.splice(index, 1); // remove one item at the passed index
        }
    }
});
