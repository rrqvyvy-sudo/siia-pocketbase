/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Bouillabaisse'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 320000);
    record.set("description", "A legendary Proven\u00e7al fish stew from Marseille, brimming with Mediterranean seafood and saffron-infused broth. Served with rouille and crusty bread, this aromatic dish captures the essence of the sea.");
    record.set("ingredients", "Mixed fish, shellfish, saffron, fennel, orange zest, garlic, tomato, olive oil, bread");
    record.set("allergens", "Fish, shellfish, gluten (bread)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800");
    record.set("ar_model_url", "/models/bouillabaisse.glb");
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
