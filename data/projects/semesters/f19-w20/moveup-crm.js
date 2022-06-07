// Fa19 - First Move Up project

const name = 'Move Up - CRM Tool';
const id = 'moveup-crm';
const detail =
  'A project to help Move Up manage their client information with one unified system.';
const coverImagePath =
  '/static/images/projects/moveup-crm/moveup_crm_problem.svg';
const clientDetail =
  'Move Up is a Bay Area-based non-profit organization that empowers under-served women by helping them find jobs, succeed in careers, and start small businesses.';
const clientLink = 'https://www.moveuptoday.org/';
const previousLink = null;
const clientFeatures = null;
const problem =
  'As Move Up scales up to more clients in the Bay Area and beyond, they needed a system that could keep track of all their client information in one place. Previously they kept track of information by using various spreadsheets, which made it difficult to access data efficiently.';
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

const githubLink = 'https://github.com/hack4impact-mcgill/move-up-crm-tool';
const projectLink = null;

const team = {
  type: 'no-pic',
  detail: {
    pm: ['Idil Ates'],
    swe: [
      'Aidan Sullivan',
      'Alex Asfar',
      'Celine Huang',
      'Curtis Lin',
      'Gwynette Labitoria',
      'Hope Kelly',
      'Michel Majdalani',
      'Ted Spare',
    ],
    design: ['Neroli Ko'],
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
