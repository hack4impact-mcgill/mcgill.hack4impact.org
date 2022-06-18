import MadaData from './mada';
import MealcareRevampData from './mealcare-revamp';

export default {
  semester: 'Fall 2021 and Winter 2022',
  projects: [
    {
      ...MadaData,
    },
    {
      ...MealcareRevampData,
    },
  ],
};
