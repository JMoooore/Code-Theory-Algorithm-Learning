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
        { id:1, user_id: 1, content: "Great stuff", created_at: "2022-02-04 16:12:59.646585-07"},
        { id:2, user_id: 2, content: "Not cool", created_at:"2022-02-04 16:13:03.382597-07" },
        { id:3, user_id:1, content: "Working", created_at:"2022-02-04 16:13:06.27855-07"},
        { id:4, user_id: 1, content: "Test", created_at:"2022-02-04 16:15:02.719146-07" },
        { id:5, user_id: 1, content: "Go Lions", created_at:"2022-02-04 16:15:05.407453-07" },
      ]);
    });
}
