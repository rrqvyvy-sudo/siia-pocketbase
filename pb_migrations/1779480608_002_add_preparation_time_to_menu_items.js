/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("menu_items");

  const existing = collection.fields.getByName("preparation_time");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("preparation_time"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "preparation_time",
    required: false,
    min: 1,
    max: 120
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("menu_items");
    collection.fields.removeByName("preparation_time");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
