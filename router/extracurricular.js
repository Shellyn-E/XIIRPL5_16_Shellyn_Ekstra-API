const express = require("express");
const router = express.Router();

const extracontroller = require("../controllers/extracurricular");

router.get("/extracurriculars", extracontroller.index);

router.get("/extracurricular/:id", extracontroller.show);

router.post("/extracurricular", extracontroller.store);

router.put("/extracurricular/:id", extracontroller.update);

router.delete("/extracurricular/:id", extracontroller.delete);

module.exports = router;
