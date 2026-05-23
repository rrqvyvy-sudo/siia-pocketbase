/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name ~ 'Riesling'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 280000);
    record.set("description", "Chicken braised in Alsatian Riesling wine with mushrooms, pearl onions, and cream. This elegant variation on coq au vin showcases the delicate sweetness of white wine.");
    record.set("ingredients", "Chicken, Riesling wine, mushrooms, pearl onions, cream, butter, garlic, thyme");
    record.set("allergens", "Dairy, alcohol (wine)");
    record.set("image_url", "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80");
    record.set("ar_model_url", "/models/coq-au-riesling.glb");
    record.set("category", "main");
    record.set("preparation_time", 40);
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
