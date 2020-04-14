const impactData = require('./impact');
const severeImpactData = require('./severeImpact');

const covid19ImpactEstimator = (data) => {
  const input = data;
  const impacts = impactData(input);
  const severeImpacts = severeImpactData(input);

  return {
    data: input, // the input data you got
    impact: impacts, // your best case estimation
    severeImpact: severeImpacts // your severe case estimation
  };
};

export default covid19ImpactEstimator;
