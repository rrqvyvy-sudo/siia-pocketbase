/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("menu_items", "name ~ 'Soupe'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("price", 85000);
    record.set("description", "A classic French onion soup with caramelized onions in a rich beef broth, topped with crusty bread and melted Gruy\u00e8re cheese. This humble yet sophisticated soup is pure comfort.");
    record.set("ingredients", "Onions, beef stock, butter, white wine, bread, Gruy\u00e8re cheese, salt, pepper");
    record.set("allergens", "Gluten (bread), dairy, alcohol (wine)");
    record.set("image_url", "https://images.unsplash.com/photo-1547592166-7aae4d755744?w=800");
    record.set("ar_model_url", "/models/soupe-a-loignon-gratinee.glb");
    record.set("category", "appetizer");
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
