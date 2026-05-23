/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Tarte Tatin'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 105000);
    record.set("description", "An inverted apple tart with caramelized apples and buttery pastry, served warm with vanilla ice cream. This classic French dessert is a perfect balance of sweet and tart.");
    record.set("ingredients", "Apples, butter, sugar, puff pastry, vanilla, salt");
    record.set("allergens", "Gluten (pastry), dairy, eggs (in pastry)");
    record.set("image_url", "https://images.unsplash.com/photo-1535920527894-b400150fecee?w=800");
    record.set("ar_model_url", "/models/tarte-tatin.glb");
    record.set("category", "dessert");
    record.set("preparation_time", 35);
    record.set("dietary_tags", "vegetarian");
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
