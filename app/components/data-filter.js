import Ember from 'ember';
import  _ from 'lodash/lodash';

export default Ember.Component.extend({
  init: function() {
    this._super(...arguments);
    this.set('filteredList', this.get('list'));
  },
  actions: {
    filter: function(params) {
      let data = this.get('list');
      //
      // Filter logic which isnt working because
      // I dont yet understand Ember object system
      //
      // let filteredList = _.filter(data, function (dataItem) {
      //   return dataItem['registeredManager'].indexOf(params) !== -1;
      // });
      this.set('filteredList', data);
    }
  }
});
