/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Pâté en Croûte'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 220000);
    record.set("description", "A rustic French charcuterie featuring layers of forcemeat, liver, and meat in a pastry crust, served with cornichons and mustard. This traditional appetizer is a celebration of French culinary heritage.");
    record.set("ingredients", "Pork, liver, veal, forcemeat, pastry, aspic, salt, pepper, spices");
    record.set("allergens", "Gluten (pastry)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=45");
    record.set("ar_model_url", "/models/pate-en-croute.glb");
    record.set("category", "appetizer");
    record.set("preparation_time", 30);
    record.set("dietary_tags", "");
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
