Tables.TablesController = Ember.ArrayController.extend({
  count: function(){
    return this.filterBy('number').get('length');
  }.property('@each'),

  actions: {
    createTable: function(count) {
      var num = count + 1;
      var table = this.store.createRecord('table', {
        number: num
      });
      table.save();
    }
  }

});
