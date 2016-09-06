import Ember from 'ember';

export function formatDate(params) {
  console.log(params[0]);
  return new Date(params[0] * 1000).toDateString();
}

export default Ember.Helper.helper(formatDate);
