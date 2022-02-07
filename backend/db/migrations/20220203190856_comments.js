/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id").primary(); // unique
    table.integer("user_id");
    table.foreign("user_id").references("users.id").onDelete("CASCADE");
    table.string("content");
    table.string("algorithm")
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("comments");
}
