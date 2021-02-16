import MuCrmData from './mu-crm';
import MuMapData from './mu-map';

export default {
  semester: 'Fall 2020 and Winter 2021',
  projects: [
    {
      ...MuMapData,
    },
    {
      ...MuCrmData,
    },
  ],
};
