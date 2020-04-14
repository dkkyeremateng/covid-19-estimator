const getPercentage = (percent) => {
  return percent / 100;
};

const severeImpactData = (data) => {
  const severeImpact = {};

  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;
  severeImpact.severeCasesByRequestedTime = Math.trunc(
    getPercentage(15) * severeImpact.infectionsByRequestedTime
  );
  severeImpact.hospitalBedsByRequestedTime = Math.trunc(
    getPercentage(35) * (data.totalHospitalBeds - severeImpact.severeCasesByRequestedTime)
  );
  severeImpact.casesForICUByRequestedTime = Math.trunc(
    getPercentage(5) * severeImpact.infectionsByRequestedTime
  );
  severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(
    getPercentage(2) * severeImpact.infectionsByRequestedTime
  );
  severeImpact.dollarsInFlight = Math.trunc(
    (severeImpact.infectionsByRequestedTime * 0.65 * 1.5) / 30
  );

  return severeImpact;
};

export default severeImpactData;
