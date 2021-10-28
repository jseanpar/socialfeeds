const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  try {
    req.getConnection((err, conn) => {
      if (err) return res.send(err);

      conn.query(
        `SELECT f.id, f.id_owner, u.name, f.description, f.image, f.date
            FROM feeds f, users u
            WHERE f.id_owner = u.id
            ORDER BY DATE DESC`,
        (err, rows) => {
          if (err) return res.send(err);
          res.status(200).json({total: rows.length, feeds: rows });
        }
      );
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({"Error Interno del servidor" : error });
  }
});

routes.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("INSERT INTO feeds set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE feeds set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.json(rows);
      }
    );
  });
});

routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "DELETE from feeds where id= ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.json(rows);
      }
    );
  });
});

module.exports = routes;
