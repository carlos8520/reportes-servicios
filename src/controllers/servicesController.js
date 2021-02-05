// SOME VARIABLES AND TAGS NEED TO BE CHANGED

const controller = {};

// this method will get all entries
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM rep_servicios", (err, services) => {
      if (err) {
        res.json(err);
      } else {
        res.render("menu", {
          data: services,
        });
      }
    });
  });
};

// this method will save a new entry in the database
controller.save = (req, res) => {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO rep_servicios set ?", [data], (err, services) => {
      console.log(services);
      res.redirect("/");
    });
  });
};

// this method will help to retrieve all info of one entry that will be modified
controller.edit = (req, res) => {
  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM rep_servicios WHERE id = ?", [id], (err, services) => {
      res.render("customerUpdate", {
        data: services[0],
      });
    });
  });
};

// this method will modifie a selected entry
controller.update = (req, res) => {
  const { id } = req.params;
  const newService = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE rep_servicios set ? WHERE id = ?",
      [newService, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

// this method will delete the selected entry
controller.delete = (req, res) => {
  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query("DELETE FROM customer WHERE id = ?", [id], (err, rows) => {
      res.redirect("/");
    });
  });
};

module.exports = controller;