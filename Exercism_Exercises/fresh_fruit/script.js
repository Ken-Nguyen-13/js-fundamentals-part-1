function onSuccess(notify) {
  notify(`SUCCESS!`);
}
function onError(notify) {
  notify(`ERROR!`);
}
function notify(message) {
  console.log(message);
}
/*You are creating a new online portal for your patrons 
to order their fruit fresh from the grocer. 
The grocer has an API that you can use to see 
if they have the inventory desired by your customers. 
You need to create a small library of functions 
for interacting with the grocer's API. */

function Order(variety, quantity) {
  this.variety = variety;
  this.quantity = quantity;
}

function orderFromGrocer(query, success, error) {
  // function order(query, success, error) {
  //   // if (inventory.variety === query.variety &&
  //   //     inventory.quantity >= query.quantity) {
  //   //   success(notify);
  //   // } else {
  //   //   error(notify);
  //   // }
  // }
  order(query, success, error);
}
orderFromGrocer(new Order("pear", 12), onSuccess, onError);
