/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name='Beef Bourguignon'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 310000);
    record.set("description", "Julia Child's iconic beef stew braised in red wine with pearl onions, mushrooms, and bacon. This hearty, soul-warming dish exemplifies French comfort food at its finest.");
    record.set("ingredients", "Beef chuck, red wine, pearl onions, mushrooms, bacon, garlic, tomato paste, beef stock");
    record.set("allergens", "Alcohol (wine)");
    record.set("image_url", "https://images.unsplash.com/photo-1599043513c4-6e9e6e6e6e6e?w=800");
    record.set("ar_model_url", "/models/beef-bourguignon.glb");
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
