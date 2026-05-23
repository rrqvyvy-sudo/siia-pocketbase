/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("menu_items");

  const existing = collection.fields.getByName("ar_model_file");
  if (existing) {
    if (existing.type === "file") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("ar_model_file"); // exists with wrong type, remove first
  }

  collection.fields.add(new FileField({
    name: "ar_model_file",
    required: false,
    maxSelect: 1,
    maxSize: 20971520
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("menu_items");
    collection.fields.removeByName("ar_model_file");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
