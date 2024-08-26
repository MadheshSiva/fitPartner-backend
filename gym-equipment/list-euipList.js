const equipModule = require("../model/equipModel")
const {dbConnection} = require("../Db/mongoDb")

exports.listEquipMent = async(req,res) => {
    try{
        await dbConnection()
        const listOutData = await equipModule.find()
        res.status(200).json(listOutData)
    }catch(err) {
        res.status(500).json(err)
    }


}