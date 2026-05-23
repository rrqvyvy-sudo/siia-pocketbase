/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Blanquette de Veau'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 295000);
    record.set("description", "A creamy veal stew with pearl onions, mushrooms, and a silky white sauce enriched with egg yolk and cream. This classic French dish is tender, comforting, and refined.");
    record.set("ingredients", "Veal shoulder, pearl onions, mushrooms, butter, flour, white wine, cream, egg yolk, stock");
    record.set("allergens", "Dairy, eggs, gluten (flour), alcohol (wine)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=55");
    record.set("ar_model_url", "/models/blanquette-de-veau.glb");
    record.set("category", "main");
    record.set("preparation_time", 40);
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
