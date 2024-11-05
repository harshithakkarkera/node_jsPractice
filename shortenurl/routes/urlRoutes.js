const express=require('express')
const urlCont =require('./../controller/urlController')
const router = express.Router()

router.route("/").post(urlCont.addUrl).get(urlCont.getAllUrl)
router.route("/:shortId").get(urlCont.getUrlById).put(urlCont.updateUrl).delete(urlCont.deleteUrlById)
module.exports= router