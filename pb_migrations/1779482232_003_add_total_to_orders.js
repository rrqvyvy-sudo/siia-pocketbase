/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("orders");

  const existing = collection.fields.getByName("total");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("total"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "total"
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("orders");
    collection.fields.removeByName("total");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
