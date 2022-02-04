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

comments.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db("comments").where("id", id);
    res.json(result);
  } catch (err) {
    errorHandler(err, res);
  }
});

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
