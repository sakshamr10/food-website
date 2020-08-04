// const plans=require("../model/plans.json");
const planModel = require("../model/planModel");
const factory = require("../utility/factory.js");

module.exports.getPlan = factory.getElement(planModel);
module.exports.getAllPlans = factory.getAllElement(planModel);
module.exports.updatePlan = factory.updateElement(planModel);
module.exports.deletePlan = factory.deleteElement(planModel);
module.exports.createPlan = factory.createElement(planModel);