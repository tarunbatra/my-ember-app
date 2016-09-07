import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    this._super(...arguments);
    this.set('filteredList', this.get('list'));
  },
  actions: {
    filter: function(params) {
      let data = this.get('list');

      // Filtering logic
      let filteredList = data.filter(function (dataItem) {
        let rshipManager = dataItem.get('relationshipManager');
        return rshipManager.toLowerCase().indexOf(params) !== -1;
      });
      this.set('filteredList', filteredList);
    }
  }
});
