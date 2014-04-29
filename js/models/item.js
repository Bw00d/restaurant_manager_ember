App.Item = DS.Model.extend( {
  name: DS.attr('string'),
  price: DS.attr('float')
});

App.Item.FIXTURES = [
  {
    name: "Coffee",
    price: 1.99
  },
  {
    name: "Martini",
    price: 7.00
  },
  {
    name: "Tea",
    price: 1.99
  },
  {
    name: "Beer",
    price: 4.50
  },
  {
    name: "Tea Pot",
    price: 7.00
  }
]
