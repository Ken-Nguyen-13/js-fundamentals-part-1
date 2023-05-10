const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};
const john = {
  fullName: `John Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};
console.log(
  `Mark's's BMI (${mark.calcBMI().toFixed(1)}) is ${
    mark.BMI > john.calcBMI() ? `higher` : `lower`
  } than John's BMI (${john.BMI.toFixed(1)})`
);