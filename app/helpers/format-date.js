import Ember from 'ember';

export function formatDate(params) {
  return new Date(params[0] * 1000).toDateString();
}

export default Ember.Helper.helper(formatDate);
