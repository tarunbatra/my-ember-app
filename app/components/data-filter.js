import Ember from 'ember';

let _generateSelectBoxOptions = function (list) {
  let options = Ember.makeArray('');

  list.forEach(function (listItem) {
    var rshipManager = listItem.get('relationshipManager');
    if (!options.contains(rshipManager)) {
      options.pushObject(rshipManager);
    }
  });
  this.set('options', options);
};

export default Ember.Component.extend({
  init: function() {
    this._super(...arguments);
    let list = this.get('list');
    this.set('filteredList', list);
    _generateSelectBoxOptions.call(this, list);
  },
  actions: {
    filter: function(params) {
      let data = this.get('list');

      // Filtering logic
      let filteredList = data.filter(function (dataItem) {
        let rshipManager = dataItem.get('relationshipManager');

        return rshipManager.toLowerCase().indexOf(params.toLowerCase()) !== -1;
      });
      this.set('filteredList', filteredList);
    }
  }
});
