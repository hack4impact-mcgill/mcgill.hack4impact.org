import ResilienceMtlData from './resilience-mtl';
import RefugeeCentreData from './refugee-centre';
import WelcomeCollectiveData from './welcome-collective';

export default {
  semester: 'Latest ',
  projects: [
    {
      ...ResilienceMtlData,
    },
    {
      ...RefugeeCentreData,
    },
    {
      ...WelcomeCollectiveData,
    },
  ],
};
