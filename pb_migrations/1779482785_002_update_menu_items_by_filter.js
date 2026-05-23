/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Ratatouille'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 145000);
    record.set("description", "A vibrant Proven\u00e7al vegetable stew featuring eggplant, zucchini, bell peppers, and tomatoes simmered in olive oil and herbs. This colorful dish celebrates the bounty of Mediterranean gardens.");
    record.set("ingredients", "Eggplant, zucchini, bell peppers, tomatoes, onion, garlic, olive oil, thyme, basil");
    record.set("allergens", "None");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=70");
    record.set("ar_model_url", "/models/ratatouille.glb");
    record.set("category", "main");
    record.set("preparation_time", 30);
    record.set("dietary_tags", "vegetarian, vegan, gluten-free");
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
