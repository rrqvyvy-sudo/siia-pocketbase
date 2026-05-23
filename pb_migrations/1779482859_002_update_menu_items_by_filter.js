/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name ~ 'Mousse'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 75000);
    record.set("description", "A silky, decadent chocolate mousse made with dark chocolate, whipped cream, and eggs. This simple yet sophisticated dessert is the ultimate chocolate lover's dream.");
    record.set("ingredients", "Dark chocolate, eggs, cream, sugar, butter, vanilla, salt");
    record.set("allergens", "Eggs, dairy");
    record.set("image_url", "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=25");
    record.set("ar_model_url", "/models/mousse-au-chocolat.glb");
    record.set("category", "dessert");
    record.set("preparation_time", 15);
    record.set("dietary_tags", "vegetarian, gluten-free");
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
