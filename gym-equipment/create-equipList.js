const {dbConnection} = require("../Db/mongoDb")
const EquipModel = require("../model/equipModel")

exports.listEquip = async(req,res) => {
   
    try {
          await dbConnection()
          const listCreated = EquipModel({
            toolName : req.body.toolName,
            price : req.body.price,
            imgUrl : req.body.imgUrl,
            videoUrl : req.body.videoUrl,
            description : req.body.description,
            toolHeading : req.body.toolHeading  
          })
          await listCreated.save()
          res.status(200).json(listCreated)
    } catch(err) {
         res.status(500).json({message : err})
    }

}