/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name ~ 'Gratin'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 125000);
    record.set("description", "Thinly sliced potatoes layered with cream, garlic, and nutmeg, then baked until golden and tender. This luxurious side dish from the Dauphin\u00e9 region is pure indulgence.");
    record.set("ingredients", "Potatoes, cream, milk, garlic, nutmeg, butter, salt, pepper");
    record.set("allergens", "Dairy");
    record.set("image_url", "https://images.unsplash.com/photo-1599043513c4-6e9e6e6e6e6e?w=800&q=35");
    record.set("ar_model_url", "/models/gratin-dauphinois.glb");
    record.set("category", "main");
    record.set("preparation_time", 35);
    record.set("dietary_tags", "vegetarian, gluten-free");
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
