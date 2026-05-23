/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("order_tracking");

  const existing = collection.fields.getByName("current_status");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("current_status"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "current_status"
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("order_tracking");
    collection.fields.removeByName("current_status");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
