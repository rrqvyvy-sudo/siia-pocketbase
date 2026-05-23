/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("menu_items");

  const record0 = new Record(collection);
    record0.set("name", "Homard Thermidor");
    record0.set("description", "Lobster in a creamy sauce with mustard and cheese, served in the shell");
    record0.set("price", 450000);
    record0.set("category", "main");
    record0.set("preparation_time", 35);
    record0.set("is_available", true);
    record0.set("dietary_tags", "Shellfish, Dairy");
    record0.set("ar_model_url", "placeholder_homard_thermidor.glb");
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
    record1.set("name", "Blanquette de Veau");
    record1.set("description", "Tender veal in a creamy white sauce with mushrooms and pearl onions");
    record1.set("price", 295000);
    record1.set("category", "main");
    record1.set("preparation_time", 40);
    record1.set("is_available", true);
    record1.set("dietary_tags", "Dairy, Gluten");
    record1.set("ar_model_url", "placeholder_blanquette_veau.glb");
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
    record2.set("name", "Quenelles de Brochet");
    record2.set("description", "Delicate pike dumplings in a light cream sauce");
    record2.set("price", 240000);
    record2.set("category", "main");
    record2.set("preparation_time", 30);
    record2.set("is_available", true);
    record2.set("dietary_tags", "Fish, Dairy, Gluten");
    record2.set("ar_model_url", "placeholder_quenelles_brochet.glb");
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
    record3.set("name", "P\u00e2t\u00e9 en Cro\u00fbte");
    record3.set("description", "Layered p\u00e2t\u00e9 with forcemeat and aspic, baked in pastry crust");
    record3.set("price", 220000);
    record3.set("category", "appetizer");
    record3.set("preparation_time", 15);
    record3.set("is_available", true);
    record3.set("dietary_tags", "Gluten, Dairy");
    record3.set("ar_model_url", "placeholder_pate_croute.glb");
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
    record4.set("name", "Soupe \u00e0 l'Oignon Gratin\u00e9e");
    record4.set("description", "French onion soup with melted Gruy\u00e8re cheese and crusty bread");
    record4.set("price", 85000);
    record4.set("category", "appetizer");
    record4.set("preparation_time", 20);
    record4.set("is_available", true);
    record4.set("dietary_tags", "Dairy, Gluten");
    record4.set("ar_model_url", "placeholder_soupe_oignon.glb");
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
    record5.set("name", "Salade Ni\u00e7oise");
    record5.set("description", "Classic salad with tuna, eggs, anchovies, olives, and fresh vegetables");
    record5.set("price", 145000);
    record5.set("category", "appetizer");
    record5.set("preparation_time", 10);
    record5.set("is_available", true);
    record5.set("dietary_tags", "Fish, Eggs");
    record5.set("ar_model_url", "placeholder_salade_nicoise.glb");
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
    record6.set("name", "Coq au Riesling");
    record6.set("description", "Chicken braised in Riesling wine with mushrooms and pearl onions");
    record6.set("price", 280000);
    record6.set("category", "main");
    record6.set("preparation_time", 45);
    record6.set("is_available", true);
    record6.set("dietary_tags", "Alcohol, Dairy");
    record6.set("ar_model_url", "placeholder_coq_riesling.glb");
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
    record7.set("name", "Tripes \u00e0 la Mode de Caen");
    record7.set("description", "Beef tripe stewed with vegetables and white wine in a rich sauce");
    record7.set("price", 195000);
    record7.set("category", "main");
    record7.set("preparation_time", 50);
    record7.set("is_available", true);
    record7.set("dietary_tags", "Gluten");
    record7.set("ar_model_url", "placeholder_tripes_caen.glb");
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
    record8.set("name", "Gratin Dauphinois");
    record8.set("description", "Creamy potato gratin with garlic and Gruy\u00e8re cheese");
    record8.set("price", 125000);
    record8.set("category", "main");
    record8.set("preparation_time", 25);
    record8.set("is_available", true);
    record8.set("dietary_tags", "Dairy, Gluten");
    record8.set("ar_model_url", "placeholder_gratin_dauphinois.glb");
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
    record9.set("name", "Souffl\u00e9 au Fromage");
    record9.set("description", "Light and airy cheese souffl\u00e9, perfectly risen and golden");
    record9.set("price", 155000);
    record9.set("category", "main");
    record9.set("preparation_time", 20);
    record9.set("is_available", true);
    record9.set("dietary_tags", "Dairy, Eggs, Gluten");
    record9.set("ar_model_url", "placeholder_souffle_fromage.glb");
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
    record10.set("name", "Cr\u00eapes Suzette");
    record10.set("description", "Delicate cr\u00eapes with orange butter sauce, flamb\u00e9ed tableside");
    record10.set("price", 105000);
    record10.set("category", "dessert");
    record10.set("preparation_time", 15);
    record10.set("is_available", true);
    record10.set("dietary_tags", "Dairy, Eggs, Gluten, Alcohol");
    record10.set("ar_model_url", "placeholder_crepes_suzette.glb");
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
    record11.set("name", "Mousse au Chocolat");
    record11.set("description", "Rich and silky chocolate mousse with a light, airy texture");
    record11.set("price", 75000);
    record11.set("category", "dessert");
    record11.set("preparation_time", 10);
    record11.set("is_available", true);
    record11.set("dietary_tags", "Dairy, Eggs");
    record11.set("ar_model_url", "placeholder_mousse_chocolat.glb");
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
