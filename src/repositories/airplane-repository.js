const CrudRepository = require('./crud-repository');
const models = require('../models');

const AirPlaneRepository = class AirPlaneRepository extends CrudRepository {
    constructor() {
        // pass the specific Sequelize model (Airplane) to the CRUD repository
        super(models.Airplane);
    }
};

module.exports = AirPlaneRepository;