const severeImpactData = require('./severeImpact');

const getPercentage = (percent) => percent / 100;

const covid19ImpactEstimator = (data) => {
  const input = data;
  const impacts = {};
  const severeImpacts = {};

  impacts.currentlyInfected = data.reportedCases * 10;
  impacts.infectionsByRequestedTime = impacts.currentlyInfected * 512;
  impacts.severeCasesByRequestedTime = Math.trunc(
    getPercentage(15) * impacts.infectionsByRequestedTime
  );
  impacts.hospitalBedsByRequestedTime = Math.trunc(
    getPercentage(35) * (data.totalHospitalBeds - impacts.severeCasesByRequestedTime)
  );
  impacts.casesForICUByRequestedTime = Math.trunc(
    getPercentage(5) * impacts.infectionsByRequestedTime
  );
  impacts.casesForVentilatorsByRequestedTime = Math.trunc(
    getPercentage(2) * impacts.infectionsByRequestedTime
  );
  impacts.dollarsInFlight = Math.trunc(
    (impacts.infectionsByRequestedTime * 0.65 * 1.5) / 30
  );

  severeImpacts.currentlyInfected = data.reportedCases * 50;
  severeImpacts.infectionsByRequestedTime =
    severeImpacts.currentlyInfected * 512;
  severeImpacts.severeCasesByRequestedTime = Math.trunc(
    getPercentage(15) * severeImpacts.infectionsByRequestedTime
  );
  severeImpacts.hospitalBedsByRequestedTime = Math.trunc(
    getPercentage(35) * (data.totalHospitalBeds - severeImpacts.severeCasesByRequestedTime)
  );
  severeImpacts.casesForICUByRequestedTime = Math.trunc(
    getPercentage(5) * severeImpacts.infectionsByRequestedTime
  );
  severeImpacts.casesForVentilatorsByRequestedTime = Math.trunc(
    getPercentage(2) * severeImpacts.infectionsByRequestedTime
  );
  severeImpacts.dollarsInFlight = Math.trunc(
    (severeImpacts.infectionsByRequestedTime * 0.65 * 1.5) / 30
  );

  return {
    data: input, // the input data you got
    impact: impacts, // your best case estimation
    severeImpact: severeImpacts // your severe case estimation
  };
};

export default covid19ImpactEstimator;
