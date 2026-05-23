/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Quenelles de Brochet'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 240000);
    record.set("description", "Delicate pike dumplings poached and served in a creamy sauce with mushrooms. These light, airy quenelles showcase the refined technique of classical French cuisine.");
    record.set("ingredients", "Pike, cream, eggs, butter, flour, mushrooms, white wine, shallots, salt, pepper");
    record.set("allergens", "Fish, eggs, dairy, gluten (flour), alcohol (wine)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=50");
    record.set("ar_model_url", "/models/quenelles-de-brochet.glb");
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
