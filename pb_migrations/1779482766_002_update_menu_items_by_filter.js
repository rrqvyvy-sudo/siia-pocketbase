/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Crème Brûlée'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 95000);
    record.set("description", "The quintessential French dessert featuring a silky vanilla custard topped with a caramelized sugar crust. The contrast between the crisp caramel shell and creamy interior is pure indulgence.");
    record.set("ingredients", "Heavy cream, egg yolks, vanilla bean, sugar, butter");
    record.set("allergens", "Eggs, dairy");
    record.set("image_url", "https://images.unsplash.com/photo-1470521598063-6f3ee1c9276d?w=800");
    record.set("ar_model_url", "/models/creme-brulee.glb");
    record.set("category", "dessert");
    record.set("preparation_time", 20);
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
