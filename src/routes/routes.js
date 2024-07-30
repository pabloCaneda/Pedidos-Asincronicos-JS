const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home")
})

router.get("/formulario/:id", (req, res) => {
    res.render("formulario")
})
router.get("/crear-formulario", (req, res) => {
    res.render("crearFormulario")
})

router.get("/favoritas", (req, res) => {
    res.render("favoritas")
})



module.exports = router