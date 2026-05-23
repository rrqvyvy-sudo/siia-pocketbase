/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Profiteroles'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 85000);
    record.set("description", "Delicate choux pastry puffs filled with vanilla ice cream and topped with warm chocolate sauce. These bite-sized treats are the perfect ending to any meal.");
    record.set("ingredients", "Choux pastry, vanilla ice cream, chocolate, butter, sugar, eggs, flour");
    record.set("allergens", "Gluten, eggs, dairy");
    record.set("image_url", "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800");
    record.set("ar_model_url", "/models/profiteroles.glb");
    record.set("category", "dessert");
    record.set("preparation_time", 25);
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
