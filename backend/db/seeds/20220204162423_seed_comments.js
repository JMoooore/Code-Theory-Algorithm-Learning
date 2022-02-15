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
        { user_id: 3, content: "Working", algorithm: "Bubble Sort"},
        { user_id: 4, content: "Test", algorithm: "Bubble Sort"},
        { user_id: 5, content: "Go Lions", algorithm: "Bubble Sort"},
        { user_id: 6, content: "Great stuff", algorithm: "Merge Sort"},
        { user_id: 1, content: "Not cool", algorithm: "Merge Sort"},
        { user_id: 2, content: "Working", algorithm: "Merge Sort"},
        { user_id: 3, content: "Test", algorithm: "Merge Sort"},
        { user_id: 4, content: "Go Lions", algorithm: "Quick Sort"},
        { user_id: 5, content: "Great stuff", algorithm: "Quick Sort"},
        { user_id: 6, content: "Not cool", algorithm: "Quick Sort"},
        { user_id: 1, content: "Working", algorithm: "Quick Sort"},
        { user_id: 2, content: "Test", algorithm: "Quick Sort"},
        { user_id: 3, content: "Go Lions", algorithm: "Insertion Sort"},
        { user_id: 4, content: "Great stuff", algorithm: "Insertion Sort"},
        { user_id: 5, content: "Not cool", algorithm: "Insertion Sort"},
        { user_id: 6, content: "Working", algorithm: "Insertion Sort"},
        { user_id: 1, content: "Test", algorithm: "Insertion Sort"},
        { user_id: 2, content: "Go Lions", algorithm: "Insertion Sort"},
      ]);
    });
}
