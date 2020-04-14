const getPercentage = (percent) => percent / 100;

const impactData = (data) => {
  const impact = {};

  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * 512;
  impact.severeCasesByRequestedTime = Math.trunc(
    getPercentage(15) * impact.infectionsByRequestedTime
  );
  impact.hospitalBedsByRequestedTime = Math.trunc(
    getPercentage(35) * (data.totalHospitalBeds - impact.severeCasesByRequestedTime)
  );
  impact.casesForICUByRequestedTime = Math.trunc(
    getPercentage(5) * impact.infectionsByRequestedTime
  );
  impact.casesForVentilatorsByRequestedTime = Math.trunc(
    getPercentage(2) * impact.infectionsByRequestedTime
  );
  impact.dollarsInFlight = Math.trunc(
    (impact.infectionsByRequestedTime * 0.65 * 1.5) / 30
  );

  return impact;
};

export default impactData;
