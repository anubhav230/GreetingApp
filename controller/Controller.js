// importing service
const GreetingMassage = require('../services/service');
// creating a instance of service class 
const massage = new GreetingMassage();

module.exports = class GreetingController {
    /**
     * @description function for creating greeting
     * @param {object} req 
     * @param {object} res 
     */
    create(req, res){
        const greetingMessage = massage.create(req.body);
        res.send(greetingMessage);
    }
    /**
     * @description function for finding greeting
     * @param {object} req 
     * @param {object} res 
     */
    find(req, res){
        try{
            massage.findById(req.params.Id, res,(res, data)=>{
                res.send(data);
            })
        }catch(err){
            
        }
    }
    /**
     * @description function for finding all greeting messages
     * @param {object} req 
     * @param {object} res 
     */
    findAll(req, res){
        try{
            massage.findAll(res,(res, data)=>{
                res.send(data);
            })
        }catch (err){
            res.send(err.message)
        }
    }

    /**
     * @description function for deleting greeting
     * @param {object} req 
     * @param {object} res 
     */
    delete(req, res){
        massage.deleteGreeting(req, (err)=>{
            if(err){
                return res.send(err)
            }else{
                return res.status(200).send('Greeting Deleted')
            }
        });

    }
    /**
     * @description function for modifying greeting
     * @param {object} req 
     * @param {object} res 
     */
    modify(req, res) {
        massage.editGreeitng(req,res,(res,item) => {
            res.send({'edit':'Greeting message updated'})
        });
    }
}