/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Moules Marinières'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 195000);
    record.set("description", "Fresh mussels steamed in white wine with shallots, garlic, and parsley. This simple yet elegant preparation highlights the briny sweetness of the mussels.");
    record.set("ingredients", "Mussels, white wine, shallots, garlic, parsley, butter, salt, pepper");
    record.set("allergens", "Shellfish, alcohol (wine), dairy");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=65");
    record.set("ar_model_url", "/models/moules-marinieres.glb");
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
