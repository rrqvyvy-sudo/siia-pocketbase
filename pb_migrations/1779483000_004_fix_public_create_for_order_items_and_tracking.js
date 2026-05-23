/// <reference path="../pb_data/types.d.ts" />

// Fix: customers (unauthenticated) must be able to create order_items and
// order_tracking records when they submit an order. The previous rule
// "@request.auth.id != ''" blocked all guest checkouts.
migrate((app) => {
  const orderItems = app.findCollectionByNameOrId("order_items");
  orderItems.createRule = "";
  app.save(orderItems);

  const orderTracking = app.findCollectionByNameOrId("order_tracking");
  orderTracking.createRule = "";
  app.save(orderTracking);
}, (app) => {
  const orderItems = app.findCollectionByNameOrId("order_items");
  orderItems.createRule = "@request.auth.id != ''";
  app.save(orderItems);

  const orderTracking = app.findCollectionByNameOrId("order_tracking");
  orderTracking.createRule = "@request.auth.id != ''";
  app.save(orderTracking);
});
