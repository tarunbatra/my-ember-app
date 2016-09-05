import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  account: DS.attr(),
  customerSince: DS.attr(),
  productsPurchased: DS.attr(),
  revenueGenerated: DS.attr(),
  relationshipManager: DS.attr()
});
