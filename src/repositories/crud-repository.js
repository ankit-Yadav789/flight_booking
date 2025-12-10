const { Logger } = require('../config');
class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer:create");
            throw error;
        }
    }
    async destroy(data){
        try {
            const response = await this.model.destroy({
                where: data
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer:destroy");
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findOne({
                where: data
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer:get single data");
            throw error;
        }
}
     async getAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer:getAll");
            throw error;
        }
    }

    async update(id,data){  //data is {col : value , ...}
        try {
            const response = await this.model.update(data,{
                where: {id : id}
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository Layer:update");
            throw error;
        }
    }

}

module.exports = CrudRepository;