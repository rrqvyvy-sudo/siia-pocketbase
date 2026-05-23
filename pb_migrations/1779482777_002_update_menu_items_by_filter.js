/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Escargots de Bourgogne'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 165000);
    record.set("description", "Tender snails baked in their shells with a rich garlic, parsley, and herb butter. This iconic French appetizer is a true delicacy that showcases traditional Burgundian preparation.");
    record.set("ingredients", "Snails, butter, garlic, parsley, shallots, white wine, salt, pepper");
    record.set("allergens", "Shellfish, dairy, alcohol (wine)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=90");
    record.set("ar_model_url", "/models/escargots-de-bourgogne.glb");
    record.set("category", "appetizer");
    record.set("preparation_time", 20);
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
