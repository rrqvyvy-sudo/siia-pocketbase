/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Coq au Vin'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 285000);
    record.set("description", "A classic French dish of chicken braised in red wine with mushrooms, pearl onions, and lardons. This rustic yet elegant preparation showcases tender chicken infused with deep, complex flavors from the Burgundy wine reduction.");
    record.set("ingredients", "Chicken, red wine, mushrooms, pearl onions, lardons, garlic, thyme, bay leaf, butter");
    record.set("allergens", "Alcohol (wine)");
    record.set("image_url", "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800");
    record.set("ar_model_url", "/models/coq-au-vin.glb");
    record.set("category", "main");
    record.set("preparation_time", 45);
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
