import MoveUpCrmData from "./moveup-crm";
import MoveUpSmsData from "./moveup-sms";
import MealCareData from "./mealcare";

// Fall 2019 and Winter 2020 Project Data
export default {
  semester: "Fall 2019 and Winter 2020",
  projects: [
    {
      ...MoveUpCrmData
    },
    {
      ...MoveUpSmsData
    },
    {
      ...MealCareData
    }
  ]
};
