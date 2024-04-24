/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fruits').truncate()
  await knex('fruits').insert([
    {fruit_name: 'apple', ave_weight_oz:15.4, dellish: null},
    {fruit_name: 'orange', ave_weight_oz:9.4, dellish: null},
    {fruit_name: 'grape', ave_weight_oz:1.4, dellish: null}
  ]);
};
