const reviewModel = require("../model/reviewModel");
const factory=require("../utility/factory");

module.exports.getReview = factory.getElement(reviewModel);
module.exports.getAllReviews = factory.getAllElement(reviewModel);
module.exports.updateReview = factory.updateElement(reviewModel);
module.exports.deleteReview = factory.deleteElement(reviewModel);
module.exports.createReview = factory.createElement(reviewModel);