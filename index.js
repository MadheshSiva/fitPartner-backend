const express = require("express")
const {listEquip} = require("./gym-equipment/create-equipList")
const {listEquipMent} = require("./gym-equipment/list-euipList")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser") 
const PORT = 3090

//Middle-ware
app.use(express.json())

//cros
app.use(cors())
//Router
const router = express.Router()


router.post("/gymList",listEquip)
router.get("/listEquip", listEquipMent)
app.use("/" ,router)

//server-create
app.listen(PORT, () => {
    console.log("server started")
})