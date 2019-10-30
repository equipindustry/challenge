const express = require("express");
const router = express.Router();
const DB = require("../db");
const { sessionMiddleware } = require("../util/session");

router.use(sessionMiddleware);

router.get("/", (req, res) =>
           DB.all("SELECT * FROM companies")
           .then(companies =>
                 companies.map(({ id, name, ruc, website }) => ({
                   id,
                   name,
                   ruc,
                   website
                 }))
                )
           .then(companies => res.json(companies))
          );

router.post("/join", (req, res) => {
  const { companyId } = req.body;

  if (req.user.company_id) {
    return res.status(400).json({ error: "You're already in an company" });
  }

  DB.get("SELECT * FROM companies WHERE id = ?", companyId).then(company => {
    if (!company) {
      throw { statusCode: 400 };
    }

    return DB.run(
      "UPDATE users SET company_id = ? WHERE id = ?",
      req.body.companyId,
      req.user.id
    ).then(() =>
           res.json({
             id: company.id,
             name: company.name,
             ruc: company.ruc,
             website: company.website
           })
          );
  });
});

router.post("/create_join", (req, res) => {
  const { name, ruc, website } = req.body;

  if (req.user.company_id) {
    return res.status(400).json({ error: "You're already in an company" });
  }

  DB.get("SELECT * FROM companies WHERE name = ?", name)
    .then(company => {
      if (company) {
        throw {
          statusCode: 400,
          error: "An company with that name already exists"
        };
      }
    })
    .then(() =>
      DB.run(
        "INSERT INTO companies (name, ruc, website) VALUES (?, ?, ?)",
        name,
        ruc,
        website
      )
    )
    .then(() => DB.get("SELECT * FROM companies WHERE name = ?", name))
    .then(company =>
          DB.run(
            "UPDATE users SET company_id = ? WHERE id = ?",
            company.id,
            req.user.id
          ).then(() =>
                 res.json({ id: company.id, name: company.name, ruc: company.ruc, website: company.website })
                )
    )
    .catch(err => {
      if (err && err.statusCode) {
        return res.status(err.statusCode).json({ error: err.error });
      }
      throw err;
    });
});

router.post("/leave", (req, res) => {
  DB.run("UPDATE users SET company_id = NULL WHERE id = ?", req.user.id).then(
    () => res.sendStatus(200)
  );
});

router.put("/:id", (req, res) => {
  DB.get(
    "SELECT companies.* FROM companies WHERE companies.id = ?",
    req.params.id
  )
    .then(company => {
      if (!company) {
        throw { statusCode: 404 };
      }

      return DB.run(
        "UPDATE companies SET name = ?, ruc = ?, website = ? WHERE id = ?",
        req.body.name || company.name,
        req.body.ruc || company.ruc,
        req.body.website || company.website,
        company.id
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

module.exports = router;
