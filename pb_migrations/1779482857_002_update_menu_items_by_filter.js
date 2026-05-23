/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name ~ 'Crepes'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 105000);
    record.set("description", "Delicate cr\u00eapes folded and flamb\u00e9ed in a buttery orange sauce with Grand Marnier. This theatrical dessert is a timeless classic that combines elegance with indulgence.");
    record.set("ingredients", "Cr\u00eapes, butter, sugar, orange juice, orange zest, Grand Marnier, eggs, flour, milk");
    record.set("allergens", "Eggs, dairy, gluten (flour), alcohol (Grand Marnier)");
    record.set("image_url", "https://images.unsplash.com/photo-1567327613485-f429f8ef26e8?w=800");
    record.set("ar_model_url", "/models/crepes-suzette.glb");
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
