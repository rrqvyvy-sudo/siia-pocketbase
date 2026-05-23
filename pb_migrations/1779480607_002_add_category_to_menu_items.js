/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("menu_items");

  const existing = collection.fields.getByName("category");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("category"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "category",
    required: false,
    values: ["appetizer", "main", "dessert", "beverage"]
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("menu_items");
    collection.fields.removeByName("category");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
