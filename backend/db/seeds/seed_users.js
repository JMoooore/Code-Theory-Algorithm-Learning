/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export function seed(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'paul', last_name: 'devlin', email: 'pd@email.com', password: '1234'},
        {first_name: 'kevin', last_name: 'heleodoro', email: 'kh@email.com', password: '1234'},
      ]);
    });
};
