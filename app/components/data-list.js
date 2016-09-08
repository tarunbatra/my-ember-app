import Ember from 'ember';

export default Ember.Component.extend({
  // Tells if the sort has to be made in ascending order or descending
  sortAscending: true,
  // The property to be sorted by. 'customerSince' by default
  sortCriteria: ['customerSince'],

  sortedList: Ember.computed.sort('list','sortCriteria'),

  actions: {
    //
    // Function to sort the list
    //
    toggleSort: function (property) {
      // Determine the direction of the sort (ascending/descending)
      let sortDirection = this.get('sortAscending') ? '' : ':desc';

      // Update the sort criteria with new direction
      this.set('sortCriteria', [ `${property}${sortDirection}` ]);

      // Toggle the direction for next call
      this.toggleProperty('sortAscending');
    }
  }
});
