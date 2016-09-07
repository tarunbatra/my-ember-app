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

let _filterByRelationshipManager = function (list, query) {
  return list.filter(function (listItem) {
    let rshipManager = listItem.get('relationshipManager');
    return rshipManager.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
};

let _extractNumberFromCurrency = function (currency) {
  return Number(currency.replace(/[^0-9\.]+/g,""));
};

let _restrictListByRevenue = function (list, minValue, maxValue) {
  return list.filter(function(listItem) {
    var revenue = _extractNumberFromCurrency(listItem.get('revenueGenerated'));
    return (revenue >= (minValue || 0) && revenue <= (maxValue || Number.MAX_SAFE_INTEGER));
  });
};

export default Ember.Component.extend({

  init: function() {
    this._super(...arguments);
    let list = this.get('list');
    this.set('filteredList', list);
    _generateSelectBoxOptions.call(this, list);
  },

  actions: {
    filter: function(searchText) {

      let list = this.get('list');
      console.log('---',searchText);
      // Filtering logic
      let filteredList = searchText ? _filterByRelationshipManager(list, searchText): list;

      let minValue = this.get('min');
      let maxValue = this.get('max');

      if (minValue || maxValue) {
        filteredList = _restrictListByRevenue(filteredList, minValue, maxValue);
      }

      this.set('filteredList', filteredList);
    }
  }
});
