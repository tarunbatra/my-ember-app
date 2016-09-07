import Ember from 'ember';

export function eq(firstObj, secondObj) {
   return Ember.isEqual(firstObj, secondObj);
};

export default Ember.Helper.helper(eq);
