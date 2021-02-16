const name = 'Mu - Open-Air Museum Map';
const id = 'mu-map';
const detail =
  'A project to help Move Up manage their client information with one unified system.';
const coverImagePath =
  '/static/images/projects/moveup-crm/moveup_crm_problem.svg';
const clientDetail =
  'Mu is a Montreal-based organization which aims to beautify the city by creating murals that are anchored in local communities.';
const clientLink = 'https://mumtl.org/';
const previousLink = null;
const clientFeatures = null;
const problem = '.';
const problemImagePath =
  '/static/images/projects/moveup-crm/moveup_crm_problem.svg';
const solution =
  "We're working with Move Up to create a web application that uses Airtable as a data store. This allows Move Up to use Airtable in a standalone way, while still being able to use the extended features of the web application. The two combined will allow Move Up to easily view client information, send emails, view form responses, and more.";
const solutionImagePath =
  '/static/images/projects/moveup-crm/moveup-crm-solution.jpg';
const features = null;
const techStack = ['flask', 'airtable', 'vue'];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;

const githubLink = 'https://github.com/hack4impact-mcgill/mu-map';
const projectLink = null;

const team = {
  type: 'no-pic',
  detail: {
    pm: ['Ted Spare'],
    swe: [
      'Lin Xiao Zheng',
      'Tony Ou',
      'Gabriel Paquette',
      'Jacek Dziewonski',
      'Sibo Yang',
      'Yi Fang Yuan',
      'Blanche Francheterre',
    ],
  },
};

export default {
  name,
  id,
  detail,
  coverImagePath,
  clientDetail,
  clientLink,
  clientFeatures,
  problem,
  problemImagePath,
  solution,
  solutionImagePath,
  projectLink,
  features,
  techStack,
  quote,
  quoteSource,
  quoteSourceTitle,
  githubLink,
  previousLink,
  team,
};
