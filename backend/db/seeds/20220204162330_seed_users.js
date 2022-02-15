/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Paul",
          last_name: "Devlin",
          email: "pd@email.com",
          password: "1234",
        },
        {
          first_name: "Kevin",
          last_name: "Heleodoro",
          email: "kh@email.com",
          password: "1234",
        },
        {
          first_name: "Hank",
          last_name: "Moore",
          email: "hm@email.com",
          password: "1234",
        },
        {
          first_name: "Isaias",
          last_name: "Nuno",
          email: "in@email.com",
          password: "1234",
        },
        {
          first_name: "Nick",
          last_name: "Rafaelle",
          email: "nr@email.com",
          password: "1234",
        },
        {
          first_name: "Fernando",
          last_name: "Curiel",
          email: "fc@email.com",
          password: "1234",
        },
      ]);
    });
}
