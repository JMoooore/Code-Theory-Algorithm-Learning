/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        { content: "Great stuff" },
        { content: "Not cool" },
        { content: "Working" },
        { content: "Test" },
        { content: "Go Lions" },
      ]);
    });
}
