/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Homard Thermidor'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 450000);
    record.set("description", "A luxurious lobster dish with meat bound in a creamy mustard sauce, returned to the shell, and gratin\u00e9ed until golden. This Belle \u00c9poque classic is the ultimate expression of French elegance.");
    record.set("ingredients", "Lobster, cream, mustard, egg yolk, butter, white wine, breadcrumbs, salt, pepper");
    record.set("allergens", "Shellfish, dairy, eggs, alcohol (wine), gluten (breadcrumbs)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=60");
    record.set("ar_model_url", "/models/homard-thermidor.glb");
    record.set("category", "main");
    record.set("preparation_time", 35);
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
