import Fa19MoveUpCrmData from "./moveup-crm";
import Fa19MoveUpSmsData from "./moveup-sms";

// Fa19 Project Data
export default {
  semester: "Fall 2019",
  projects: [
    {
      ...Fa19MoveUpCrmData
    },
    {
      ...Fa19MoveUpSmsData
    }
  ]
};
