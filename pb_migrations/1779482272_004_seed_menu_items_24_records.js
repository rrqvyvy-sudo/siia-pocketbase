/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("menu_items");

  const record0 = new Record(collection);
    record0.set("name", "Amuse-Bouche Surprise");
    record0.set("description", "Chef's selection of delicate bites to awaken the palate");
    record0.set("price", 8);
    record0.set("category", "appetizer");
    record0.set("ingredients", "Seasonal vegetables, foie gras, truffle");
    record0.set("allergens", "Shellfish, Nuts");
    record0.set("dietary_tags", "Gluten-free option available");
    record0.set("preparation_time", 5);
    record0.set("is_available", true);
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("name", "Oysters Rockefeller");
    record1.set("description", "Fresh oysters topped with herb butter and breadcrumbs");
    record1.set("price", 18);
    record1.set("category", "appetizer");
    record1.set("ingredients", "Oysters, butter, parsley, spinach, breadcrumbs");
    record1.set("allergens", "Shellfish, Gluten");
    record1.set("dietary_tags", "Pescatarian");
    record1.set("preparation_time", 8);
    record1.set("is_available", true);
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("name", "Foie Gras Terrine");
    record2.set("description", "Silky foie gras with brioche and fig compote");
    record2.set("price", 22);
    record2.set("category", "appetizer");
    record2.set("ingredients", "Foie gras, brioche, figs, port wine");
    record2.set("allergens", "Gluten, Alcohol");
    record2.set("dietary_tags", "None");
    record2.set("preparation_time", 10);
    record2.set("is_available", true);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("name", "Lobster Bisque");
    record3.set("description", "Creamy lobster soup with cognac and creme fraiche");
    record3.set("price", 16);
    record3.set("category", "appetizer");
    record3.set("ingredients", "Lobster, cream, cognac, shallots");
    record3.set("allergens", "Shellfish, Alcohol, Dairy");
    record3.set("dietary_tags", "None");
    record3.set("preparation_time", 12);
    record3.set("is_available", true);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "Beef Wellington");
    record4.set("description", "Prime beef tenderloin wrapped in mushroom duxelles and puff pastry");
    record4.set("price", 48);
    record4.set("category", "main");
    record4.set("ingredients", "Beef tenderloin, mushrooms, pate, puff pastry, beef stock");
    record4.set("allergens", "Gluten, Dairy");
    record4.set("dietary_tags", "None");
    record4.set("preparation_time", 35);
    record4.set("is_available", true);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "Dover Sole Meuniere");
    record5.set("description", "Whole Dover sole pan-fried with brown butter and lemon");
    record5.set("price", 42);
    record5.set("category", "main");
    record5.set("ingredients", "Dover sole, butter, lemon, parsley");
    record5.set("allergens", "Fish, Dairy");
    record5.set("dietary_tags", "Pescatarian, Gluten-free");
    record5.set("preparation_time", 20);
    record5.set("is_available", true);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "Coq au Vin");
    record6.set("description", "Chicken braised in Burgundy wine with pearl onions and mushrooms");
    record6.set("price", 38);
    record6.set("category", "main");
    record6.set("ingredients", "Chicken, Burgundy wine, bacon, mushrooms, pearl onions");
    record6.set("allergens", "Alcohol, Dairy");
    record6.set("dietary_tags", "Gluten-free");
    record6.set("preparation_time", 45);
    record6.set("is_available", true);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("name", "Lamb Navarin");
    record7.set("description", "Tender lamb stew with spring vegetables and rosemary");
    record7.set("price", 44);
    record7.set("category", "main");
    record7.set("ingredients", "Lamb, carrots, potatoes, peas, rosemary, beef stock");
    record7.set("allergens", "None");
    record7.set("dietary_tags", "Gluten-free");
    record7.set("preparation_time", 50);
    record7.set("is_available", true);
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("name", "Bouillabaisse");
    record8.set("description", "Provencal fish stew with saffron, fennel, and rouille");
    record8.set("price", 40);
    record8.set("category", "main");
    record8.set("ingredients", "Mixed fish, shellfish, saffron, fennel, garlic, tomato");
    record8.set("allergens", "Fish, Shellfish, Gluten");
    record8.set("dietary_tags", "Pescatarian");
    record8.set("preparation_time", 40);
    record8.set("is_available", true);
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("name", "Tournedos Rossini");
    record9.set("description", "Beef tenderloin topped with foie gras and truffle sauce");
    record9.set("price", 52);
    record9.set("category", "main");
    record9.set("ingredients", "Beef tenderloin, foie gras, truffle, madeira wine, beef stock");
    record9.set("allergens", "Alcohol, Dairy");
    record9.set("dietary_tags", "Gluten-free");
    record9.set("preparation_time", 30);
    record9.set("is_available", true);
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("name", "Crepes Suzette");
    record10.set("description", "Delicate crepes with orange butter sauce and Grand Marnier");
    record10.set("price", 14);
    record10.set("category", "dessert");
    record10.set("ingredients", "Flour, eggs, milk, butter, orange, Grand Marnier");
    record10.set("allergens", "Gluten, Eggs, Dairy, Alcohol");
    record10.set("dietary_tags", "Vegetarian");
    record10.set("preparation_time", 15);
    record10.set("is_available", true);
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("name", "Baked Alaska");
    record11.set("description", "Vanilla ice cream and sponge cake topped with toasted meringue");
    record11.set("price", 12);
    record11.set("category", "dessert");
    record11.set("ingredients", "Ice cream, sponge cake, egg whites, sugar");
    record11.set("allergens", "Eggs, Dairy, Gluten");
    record11.set("dietary_tags", "Vegetarian");
    record11.set("preparation_time", 20);
    record11.set("is_available", true);
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("name", "Chocolate Souffle");
    record12.set("description", "Light and airy chocolate souffle with warm chocolate sauce");
    record12.set("price", 13);
    record12.set("category", "dessert");
    record12.set("ingredients", "Dark chocolate, eggs, butter, sugar, cocoa powder");
    record12.set("allergens", "Eggs, Dairy, Gluten");
    record12.set("dietary_tags", "Vegetarian, Vegan option available");
    record12.set("preparation_time", 25);
    record12.set("is_available", true);
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("name", "Panna Cotta");
    record13.set("description", "Silky Italian cream dessert with berry coulis");
    record13.set("price", 11);
    record13.set("category", "dessert");
    record13.set("ingredients", "Cream, gelatin, vanilla, mixed berries, sugar");
    record13.set("allergens", "Dairy, Gluten");
    record13.set("dietary_tags", "Vegetarian, Gluten-free");
    record13.set("preparation_time", 10);
    record13.set("is_available", true);
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("name", "Tarte Tatin");
    record14.set("description", "Caramelized apple tart with vanilla ice cream");
    record14.set("price", 12);
    record14.set("category", "dessert");
    record14.set("ingredients", "Apples, butter, sugar, puff pastry, vanilla ice cream");
    record14.set("allergens", "Gluten, Dairy, Eggs");
    record14.set("dietary_tags", "Vegetarian");
    record14.set("preparation_time", 18);
    record14.set("is_available", true);
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("name", "Creme Brulee");
    record15.set("description", "Classic vanilla custard with caramelized sugar crust");
    record15.set("price", 10);
    record15.set("category", "dessert");
    record15.set("ingredients", "Cream, egg yolks, vanilla, sugar");
    record15.set("allergens", "Eggs, Dairy");
    record15.set("dietary_tags", "Vegetarian, Gluten-free");
    record15.set("preparation_time", 12);
    record15.set("is_available", true);
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("name", "Champagne");
    record16.set("description", "Premium French Champagne, Brut");
    record16.set("price", 65);
    record16.set("category", "beverage");
    record16.set("ingredients", "Chardonnay, Pinot Noir, Pinot Meunier grapes");
    record16.set("allergens", "Alcohol, Sulfites");
    record16.set("dietary_tags", "Vegan");
    record16.set("preparation_time", 2);
    record16.set("is_available", true);
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("name", "Bordeaux Red Wine");
    record17.set("description", "Full-bodied Bordeaux blend, aged 5 years");
    record17.set("price", 55);
    record17.set("category", "beverage");
    record17.set("ingredients", "Cabernet Sauvignon, Merlot, Cabernet Franc");
    record17.set("allergens", "Alcohol, Sulfites");
    record17.set("dietary_tags", "Vegan, Gluten-free");
    record17.set("preparation_time", 2);
    record17.set("is_available", true);
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.set("name", "Burgundy Pinot Noir");
    record18.set("description", "Elegant Pinot Noir from the Cote d'Or region");
    record18.set("price", 48);
    record18.set("category", "beverage");
    record18.set("ingredients", "Pinot Noir grapes");
    record18.set("allergens", "Alcohol, Sulfites");
    record18.set("dietary_tags", "Vegan, Gluten-free");
    record18.set("preparation_time", 2);
    record18.set("is_available", true);
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.set("name", "Espresso");
    record19.set("description", "Rich and bold Italian espresso");
    record19.set("price", 4);
    record19.set("category", "beverage");
    record19.set("ingredients", "Arabica coffee beans");
    record19.set("allergens", "None");
    record19.set("dietary_tags", "Vegan, Gluten-free");
    record19.set("preparation_time", 3);
    record19.set("is_available", true);
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.set("name", "Cafe au Lait");
    record20.set("description", "French coffee with steamed milk");
    record20.set("price", 5);
    record20.set("category", "beverage");
    record20.set("ingredients", "Coffee, milk");
    record20.set("allergens", "Dairy");
    record20.set("dietary_tags", "Vegetarian");
    record20.set("preparation_time", 4);
    record20.set("is_available", true);
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.set("name", "Herbal Tea Selection");
    record21.set("description", "Assorted premium herbal teas");
    record21.set("price", 6);
    record21.set("category", "beverage");
    record21.set("ingredients", "Dried herbs and flowers");
    record21.set("allergens", "None");
    record21.set("dietary_tags", "Vegan, Gluten-free");
    record21.set("preparation_time", 5);
    record21.set("is_available", true);
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.set("name", "Fresh Fruit Juice");
    record22.set("description", "Freshly squeezed orange and passion fruit juice");
    record22.set("price", 7);
    record22.set("category", "beverage");
    record22.set("ingredients", "Oranges, passion fruit");
    record22.set("allergens", "None");
    record22.set("dietary_tags", "Vegan, Gluten-free");
    record22.set("preparation_time", 5);
    record22.set("is_available", true);
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.set("name", "Digestif Selection");
    record23.set("description", "Choice of Cognac, Armagnac, or Chartreuse");
    record23.set("price", 12);
    record23.set("category", "beverage");
    record23.set("ingredients", "Cognac, Armagnac, or Chartreuse");
    record23.set("allergens", "Alcohol");
    record23.set("dietary_tags", "Vegan, Gluten-free");
    record23.set("preparation_time", 2);
    record23.set("is_available", true);
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
