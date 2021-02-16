const name = 'Mu - CRM Tool';
const id = 'mu-crm';
const detail =
  'A project to help Mu better manage its internal data, including donations, murals, and volunteers.';
const coverImagePath = '/static/images/projects/mu-crm/mu_crm_solution.png';
const clientDetail =
  'Mu is a Montreal-based organization which aims to beautify the city by creating murals that are anchored in local communities.';
const clientLink = 'https://mumtl.org/';
const previousLink = null;
const clientFeatures = null;
const problem =
  'As Mu prepares for their 15th anniversary, they need a system that can keep track of all their internal information in one place. Previous tools they used were inefficient and made information difficult to find, and they wanted a tool to streamline their data management.';
const problemImagePath = '/static/images/projects/mu-crm/mu_crm_problem.jpg';
const solution =
  "We're working with Mu to create a CRM tool where information can easily be accessed and updated, allowing them to keep track of the many murals in Montreal.";
const solutionImagePath = '/static/images/projects/mu-crm/mu_crm_solution.png';
const features = null;
const techStack = [
  'flask',
  'docker',
  'postgres',
  'react',
  'materialui',
  'firebase',
];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;

const githubLink = 'https://github.com/hack4impact-mcgill/mu-crm-tool';
const projectLink = null;

const team = {
  type: 'no-pic',
  detail: {
    pm: ['Celine Huang'],
    swe: [
      'Peter Guanhua Rong',
      'Curtis Lin',
      'Declan Giltz',
      'Carol Altimas',
      'Sym Piracha',
      'Ahmad Ghawanmeh',
    ],
    design: ['Jerry Xia'],
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
