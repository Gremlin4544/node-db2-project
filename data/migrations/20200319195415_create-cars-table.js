
exports.up = function(knex) {
    //the change we want to make to our schema
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('vin').notNullable().index();
        tbl.string('make').notNullable().index();
        tbl.string('model').notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission');
        tbl.string('status');
        tbl.timestamps(true, true);
    });
  
};

exports.down = function(knex) {
    //undoing that change
    return knex.schema.dropTableIfExists('cars-table');
};
