exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('cars', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called make which is required
      tbl.text('make', 128).notNullable();

      // creates a text field called model which is required 
      tbl.text('model', 128).notNullable();

      // creates a numeric field called vin which is both required and unique
      tbl.decimal('vin', 128).unique().notNullable();

      // creates a numeric field called mileage which is required 
      tbl.decimal('mileage').notNullable();

      // creates a text field called transmission type which is NOT required
      tbl.text('Transmission Type');

        // creates a text field called title status which is NOT required
      tbl.text('title status');
    });
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('cars');
  };
