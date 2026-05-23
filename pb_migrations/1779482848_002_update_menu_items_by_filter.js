/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name ~ 'Salade'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 145000);
    record.set("description", "A vibrant salad from Nice featuring tuna, hard-boiled eggs, anchovies, olives, and fresh vegetables dressed with Dijon vinaigrette. This Mediterranean classic is light yet satisfying.");
    record.set("ingredients", "Tuna, eggs, anchovies, olives, tomatoes, green beans, potatoes, lettuce, olive oil, vinegar");
    record.set("allergens", "Fish, eggs");
    record.set("image_url", "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800");
    record.set("ar_model_url", "/models/salade-nicoise.glb");
    record.set("category", "appetizer");
    record.set("preparation_time", 20);
    record.set("dietary_tags", "gluten-free");
    try {
      app.save(record);
    } catch (e) {
      if (e.message.includes("Value must be unique")) {
        console.log("Record with unique value already exists, skipping");
      } else {
        throw e;
      }
    }
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})
