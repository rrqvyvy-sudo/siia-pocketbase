/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Sole Meunière'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 340000);
    record.set("description", "A delicate preparation of Dover sole, lightly floured and pan-fried in brown butter until golden. Finished with fresh lemon juice and parsley, this elegant dish celebrates the fish's subtle flavor.");
    record.set("ingredients", "Dover sole, butter, flour, lemon, parsley, salt, pepper");
    record.set("allergens", "Fish, gluten (flour), dairy");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=85");
    record.set("ar_model_url", "/models/sole-meuniere.glb");
    record.set("category", "main");
    record.set("preparation_time", 25);
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
