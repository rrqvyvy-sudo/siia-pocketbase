/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Cassoulet'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 275000);
    record.set("description", "A rustic French cassole from Occitanie featuring white beans, duck confit, pork, and sausage baked until golden. This hearty, warming dish is pure comfort and tradition.");
    record.set("ingredients", "White beans, duck confit, pork shoulder, sausage, garlic, onion, tomato, breadcrumbs");
    record.set("allergens", "Gluten (sausage may contain)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=75");
    record.set("ar_model_url", "/models/cassoulet.glb");
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
