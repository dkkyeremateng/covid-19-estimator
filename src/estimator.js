const impactData = require('./impact');
const severeImpactData = require('./severeImpact');

const covid19ImpactEstimator = (data) => {
  return {
    data: data, // the input data you got
    impact: impactData(data), // your best case estimation
    severeImpact: severeImpactData(data) // your severe case estimation
  };
};

export default covid19ImpactEstimator;
