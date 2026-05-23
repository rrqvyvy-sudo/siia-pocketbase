/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name ~ 'Tripes'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 195000);
    record.set("description", "A traditional Norman dish of tripe braised with vegetables, cider, and Calvados in a rich sauce. This rustic specialty showcases the depth of French regional cooking.");
    record.set("ingredients", "Tripe, cider, Calvados, onions, carrots, celery, garlic, tomato paste, beef stock");
    record.set("allergens", "Alcohol (cider, Calvados)");
    record.set("image_url", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=40");
    record.set("ar_model_url", "/models/tripes-a-la-mode-de-caen.glb");
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
