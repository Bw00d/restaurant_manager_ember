App.Router.map(function(){
  this.resource('index',{path : '/'},function(){
        this.resource('table', { path:'/tables/:table_id' });
    });

});

App.IndexRoute = Ember.Route.extend({
  model: function(){
    var tables = this.get('store').findAll('table');
    return tables;
  }
})

App.TableRoute = Ember.Route.extend({
  model: function(params){
    var store = this.get('store');
    return store.find('table', params.table_id);
  }
})



// App.ItemsRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('item');
//   }
// });

// App.ApplicationRoute = Ember.Route.extend({
//   setupController : function (params) {
//     this.controllerFor('item').set('model', App.Item.find(params.item_id));
//   }
// });
