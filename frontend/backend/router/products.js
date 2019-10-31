const express = require("express");
const router = express.Router();
const DB = require("../db");
const { sessionMiddleware } = require("../util/session");

router.use(sessionMiddleware);
router.use((req, res, next) => {
  if (!req.user.company_id) {
    return res.sendStatus(400);
  }
  next();
});

router.get("/", (req, res) => {
  if (!req.user.company_id) {
    return res.status(401).json({ error: "You're not in an company" });
  }

  DB.all(
    "SELECT products.* FROM products INNER JOIN companies ON companies.id = products.company_id  WHERE products.company_id = ?",
    req.user.company_id
  )
    .then(products =>
          products.map(
            ({ id, company_id: companyId, name, sku, price, discount }) => ({
              id,
              companyId,
              name,
              sku,
              price,
              discount
            })
          )
         )
    .then(products => res.json(products))
    .catch(err => {
      if (err && err.statusCode) {
        return res.status(err.statusCode).json({ error: err.error });
      }
      throw err;
    });
});

router.post("/", (req, res) => {
  if (!req.user.company_id) {
    return res.status(401).json({ error: "You're not in an company" });
  }

  const { companyId, name, sku, price, discount } = req.body;

  DB.get(
    "SELECT * FROM users WHERE id = ? AND company_id = ?",
    req.user.id,
    req.user.company_id
  )
    .then(user => {
      if (!user) {
        throw { statusCode: 404, error: "No known user with that ID" };
      }
    })
    .then(() =>
      DB.run(
        "INSERT INTO products (company_id, name, sku, price, discount) VALUES (?, ?, ?, ?, ?)",
        companyId,
        name,
        sku,
        price,
        discount
      )
    )
    .then(() =>
      // Don't do this, this is bad
          DB.get("SELECT * FROM products ORDER BY id DESC LIMIT 1")
         )
    .then(product =>
      res.json({
        id: product.id,
        companyId: product.company_id,
        name: product.name,
        sku: product.sku,
        price: product.price,
        discount: product.discount
      })
    )
    .catch(err => {
      if (err && err.statusCode) {
        return res.status(err.statusCode).json({ error: err.error });
      }
      throw err;
    });
});

router.put("/:id", (req, res) => {
  if (!req.user.company_id) {
    return res.status(401).json({ error: "You're not in an company" });
  }

  DB.get(
    "SELECT products.* FROM products INNER JOIN companies ON companies.id = products.company_id  WHERE products.company_id = ? AND products.id = ?",
    req.user.company_id,
    req.params.id
  )
    .then(product => {
      if (!product) {
        throw { statusCode: 404, error: "No known product with that ID" };
      }
      return DB.run(
        "UPDATE products SET company_id = ?,  name = ?, sku = ?, price = ?, discount =? WHERE id = ?",
        req.body.companyId || product.company_id,
        req.body.name || product.name,
        req.body.sku || product.sku,
        req.body.price || product.price,
        req.body.discount || product.discount,
        product.id
      );
    })
    .then(() => res.sendStatus(200))
    .catch(err => {
      if (err && err.statusCode) {
        return res.status(err.statusCode).json({ error: err.error });
      }
      throw err;
    });
});

router.delete("/:id", (req, res) => {
  if (!req.user.company_id) {
    return res.status(401).json({ error: "You're not in an company" });
  }

  DB.get(
    "SELECT products.* FROM products INNER JOIN companies ON companies.id = products.company_id  WHERE products.company_id = ? AND products.id = ?",
    req.user.company_id,
    req.params.id
  )
    .then(product => {
      if (!product) {
        throw { statusCode: 404, error: "No known product with that ID" };
      }

      return DB.run("DELETE FROM products WHERE id = ?", product.id);
    })
    .then(() => res.sendStatus(200))
    .catch(err => {
      if (err && err.statusCode) {
        return res.status(err.statusCode).json({ error: err.error });
      }
      throw err;
    });
});

module.exports = router;
