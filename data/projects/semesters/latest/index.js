import ResilienceMtlData from './resilience-mtl';
import LiteraLingoData from './literalingo';
import WelcomeCollectiveData from './welcome-collective';

export default {
  semester: 'Latest ',
  projects: [
    {
      ...ResilienceMtlData,
    },
    {
      ...LiteraLingoData,
    },
    {
      ...WelcomeCollectiveData,
    },
  ],
};
