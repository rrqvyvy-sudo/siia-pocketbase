/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("menu_items");

  const existing = collection.fields.getByName("dietary_tags");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("dietary_tags"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "dietary_tags",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("menu_items");
    collection.fields.removeByName("dietary_tags");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
