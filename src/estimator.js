const impactData = require('./impact');
const severeImpactData = require('./severeImpact');

const covid19ImpactEstimator = (data) => {
  const input = data;

  return {
    data: input, // the input data you got
    impact: impactData(input), // your best case estimation
    severeImpact: severeImpactData(input) // your severe case estimation
  };
};

export default covid19ImpactEstimator;
