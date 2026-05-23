/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("menu_items");

  const record0 = new Record(collection);
    record0.set("name", "Coq au Vin");
    record0.set("description", "Braised chicken in Burgundy wine with mushrooms and pearl onions");
    record0.set("price", 285000);
    record0.set("ingredients", "Chicken, Red wine, Mushrooms, Pearl onions, Bacon");
    record0.set("allergens", "Alcohol, Gluten");
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
    record1.set("name", "Bouillabaisse");
    record1.set("description", "Traditional Proven\u00e7al fish stew with saffron and rouille");
    record1.set("price", 320000);
    record1.set("ingredients", "Fish, Shellfish, Saffron, Garlic, Tomato");
    record1.set("allergens", "Shellfish, Fish");
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
    record2.set("name", "Cr\u00e8me Br\u00fbl\u00e9e");
    record2.set("description", "Vanilla custard with caramelized sugar crust");
    record2.set("price", 95000);
    record2.set("ingredients", "Cream, Eggs, Vanilla, Sugar");
    record2.set("allergens", "Dairy, Eggs");
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
    record3.set("name", "Foie Gras Terrine");
    record3.set("description", "Duck liver p\u00e2t\u00e9 with brioche toast");
    record3.set("price", 380000);
    record3.set("ingredients", "Duck liver, Brioche, Butter, Truffle");
    record3.set("allergens", "Dairy, Gluten");
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
    record4.set("name", "Beef Bourguignon");
    record4.set("description", "Tender beef in red wine sauce with vegetables");
    record4.set("price", 310000);
    record4.set("ingredients", "Beef, Red wine, Carrots, Onions, Mushrooms");
    record4.set("allergens", "Alcohol, Gluten");
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
    record5.set("name", "Sole Meuni\u00e8re");
    record5.set("description", "Dover sole pan-fried in brown butter");
    record5.set("price", 295000);
    record5.set("ingredients", "Dover sole, Butter, Lemon, Parsley");
    record5.set("allergens", "Fish, Dairy");
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
    record6.set("name", "Escargots de Bourgogne");
    record6.set("description", "Snails in garlic parsley butter");
    record6.set("price", 180000);
    record6.set("ingredients", "Snails, Butter, Garlic, Parsley");
    record6.set("allergens", "Shellfish, Dairy");
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
    record7.set("name", "Cassoulet");
    record7.set("description", "White beans with duck confit and sausage");
    record7.set("price", 275000);
    record7.set("ingredients", "White beans, Duck, Sausage, Onions");
    record7.set("allergens", "Gluten, Dairy");
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
    record8.set("name", "Tarte Tatin");
    record8.set("description", "Caramelized apple tart with vanilla ice cream");
    record8.set("price", 85000);
    record8.set("ingredients", "Apples, Butter, Sugar, Pastry, Cream");
    record8.set("allergens", "Dairy, Gluten, Eggs");
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
    record9.set("name", "Ratatouille");
    record9.set("description", "Proven\u00e7al vegetable medley");
    record9.set("price", 165000);
    record9.set("ingredients", "Eggplant, Zucchini, Bell peppers, Tomatoes, Olive oil");
    record9.set("allergens", "None");
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
    record10.set("name", "Moules Marini\u00e8res");
    record10.set("description", "Mussels steamed in white wine and herbs");
    record10.set("price", 210000);
    record10.set("ingredients", "Mussels, White wine, Garlic, Parsley, Cream");
    record10.set("allergens", "Shellfish, Alcohol");
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
    record11.set("name", "Profiteroles");
    record11.set("description", "Choux pastry with chocolate sauce and cream");
    record11.set("price", 110000);
    record11.set("ingredients", "Choux pastry, Chocolate, Cream, Eggs");
    record11.set("allergens", "Dairy, Gluten, Eggs");
  try {
    app.save(record11);
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
