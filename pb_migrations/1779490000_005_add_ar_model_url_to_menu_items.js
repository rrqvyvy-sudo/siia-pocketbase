/// <reference path="../pb_data/types.d.ts" />

// Add ar_model_url text field to menu_items collection.
// The frontend uses this field to load .glb files from /models/ on the web server.
// Admin can set it via the Admin Menu Management page using the filename input.
migrate((app) => {
  const collection = app.findCollectionByNameOrId("menu_items");

  const existing = collection.fields.getByName("ar_model_url");
  if (existing) {
    return; // already exists, skip
  }

  collection.fields.add(new TextField({
    name: "ar_model_url",
    required: false,
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("menu_items");
    collection.fields.removeByName("ar_model_url");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      return;
    }
    throw e;
  }
});
