import dataModel from "../../models/DataModel.js"

const Dta_Crop_Update = async (req, res, next) => {
    try {
        const userId = req.user1._id;
        const { cropName } = req.body;
        const { cropQuantity } = req.body;
        const {cropPrice}   = req.body;
        if (cropName && cropQuantity&&cropPrice) {
             
            const findcropName = await dataModel.findOneAndUpdate({ User_Id: userId, cropName: cropName},{$set:{cropQuantity:cropQuantity,cropPrice:cropPrice}}, { new: true } );
          if(findcropName.length==0)
          {
            return res
            .status(400)
            .json({message:"crop not found"})
          }
            if(!findcropName)
            {
                return res
                .status(400)
                .json({message:"we can not find thye crop"})
            }
            return res
            .status(200)
            .json({
                message:"we updadted succefully",
               
                findcropName
            })
        }
        else {
            return res
                .status(400)
                .json({
                    message: "enter all the details "
                })
        }
    }
    catch (e) {
        console.log(e);
        return res
            .status(400)
            .json({
                message: "server error"
            })
    }

}
export default Dta_Crop_Update