import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  actions: {
    toggleSort: function (params) {
      let sortedList = this.get('list').sortBy(params);
      this.set('list', sortedList);
    }
  }
});
