const { Router } = require("express");
const store = require("../database");
const router = Router();
const { validateModel } = require("../middlewares");
const { catchedAsync } = require("../utils");

router.get(
  "/:model",
  validateModel,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list();

    res.status(200).json(response);
  })
);

router.get(
  "/:model/:id",
  validateModel,
  catchedAsync(async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);

    res.status(200).json(response);
  })
);

router.post(
  "/:model",
  validateModel,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    const response = await store[model].insert(req.body);

    res.status(200).json(response);
  })
);

module.exports = router;
