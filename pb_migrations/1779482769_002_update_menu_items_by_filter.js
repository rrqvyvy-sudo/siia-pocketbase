/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Foie Gras Terrine'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 380000);
    record.set("description", "A luxurious appetizer showcasing premium foie gras in a silky terrine, served with toasted brioche and fig compote. This delicacy represents the pinnacle of French gastronomy.");
    record.set("ingredients", "Foie gras, brioche, figs, port wine, salt, pepper, aspic");
    record.set("allergens", "Gluten (brioche), alcohol (port wine)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80");
    record.set("ar_model_url", "/models/foie-gras-terrine.glb");
    record.set("category", "appetizer");
    record.set("preparation_time", 15);
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
