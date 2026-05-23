/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("orders");

  const existing = collection.fields.getByName("estimated_ready_time");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("estimated_ready_time"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "estimated_ready_time",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("orders");
    collection.fields.removeByName("estimated_ready_time");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
