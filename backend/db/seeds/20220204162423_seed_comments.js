/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        { user_id: 1, content: "Great stuff", algorithm: "Bubble Sort"},
        { user_id: 2, content: "Not cool", algorithm: "Bubble Sort"},
        { user_id: 1, content: "Working", algorithm: "Bubble Sort"},
        { user_id: 1, content: "Test", algorithm: "Bubble Sort"},
        { user_id: 1, content: "Go Lions", algorithm: "Bubble Sort"},
      ]);
    });
}
