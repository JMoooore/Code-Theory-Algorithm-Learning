import { Router, json } from "express";
import db from "../db/index.js";

const comments = new Router();
comments.use(json());

comments.get("/", async (req, res) => {
  try {
    const result = await db("comments").select();
    res.json(result);
  } catch (err) {
    errorHandler(err, res);
  }
});

comments.get('/:algo', async (req, res) => {
  try {
    const algo = req.params.algo
    const result = await db("comments as c")
    .join("users as u", "u.id", "c.user_id")
    .select("u.first_name","u.last_name ", "c.content", "c.created_at", "c.id")
    .orderBy("c.created_at", "desc")
    .where({algorithm: algo})

    res.json(result)
  } catch (err) {
    errorHandler(err, res);
  }
})

comments.post("/", async (req, res) => {
  try {
    const result = await db("comments").insert(req.body).returning("*");
    res.json(result);
  } catch (err) {
    errorHandler(err, res);
  }
});

comments.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db("comments")
      .where({ id: id })
      .update(req.body)
      .returning("*");
    res.json(result);
  } catch (err) {
    errorHandler(err, res);
  }
});

comments.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db("comments").where({ id: id }).del().returning("*");
    res.json(result);
  } catch (err) {
    errorHandler(err, res);
  }
});

const errorHandler = (err, res) => {
  res.status(500).send(err);
};

export default comments;
