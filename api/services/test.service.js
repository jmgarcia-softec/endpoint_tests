const models = require("../../models");

const getById = async  (id) =>{
    
    return models.Test.findByPk(id,{raw:true})
    .then(res => res)
    .catch(error => error)
    
    
    return {
        name: 'sss',
        age: 65
    }
}

function createTest (data) {
    
  return models.Test.create(data).catch(e => {
    console.log(e);
    throw {
      code: 500,
      message: "Error cresating item",
      description: e
    };
  });
}

module.exports = {
    getById,
    createTest
};