/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name ~ 'Souffle'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 155000);
    record.set("description", "A light and airy cheese souffl\u00e9 that rises majestically from the oven, with a creamy center and crispy exterior. This classic French preparation is a testament to culinary technique.");
    record.set("ingredients", "Eggs, butter, flour, milk, Gruy\u00e8re cheese, salt, pepper, nutmeg");
    record.set("allergens", "Eggs, dairy, gluten (flour)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=30");
    record.set("ar_model_url", "/models/souffle-au-fromage.glb");
    record.set("category", "main");
    record.set("preparation_time", 30);
    record.set("dietary_tags", "vegetarian");
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
