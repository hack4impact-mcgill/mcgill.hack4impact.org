const name = 'MADA Project';
const id = 'mada';
const detail = 'A project to help MADA manage their volunteers and meal delivery schedule';
const coverImagePath = '/static/images/projects/mada/mada-problem.jpg';
const clientDetail =
  "MADA is a volunteer-based organization that evolved from a small neighbourhood centre to Montreal's central address for fighting poverty in our community. MADA’s MEALS À PARTAGER program helps the disabled and elderly by delivering them fresh homemade meals every day of the week.";
const clientLink = 'https://madacenter.com/';
const previousLink = null;
const clientFeatures = null;
const problem = 'MADA needs a more efficient method of communicating with volunteers what meals to deliver and when.';
const problemImagePath = '/static/images/projects/mada/mada-problem.jpg';
const solution = "We're working with MADA to create a mobile application to communicate each volunteers availability and organize meal delivery.";
const solutionImagePath = '/static/images/projects/mada/mada-solution.png';
const features = null;
const techStack = [
  'flask',
  'react',
];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;

const githubLink = 'https://github.com/hack4impact-mcgill/MADA/';
const projectLink = null;

const team = {
  type: 'no-pic',
  detail: {
    pm: ['Kathleen Younge'],
    swe: [
      'Peter Guanhua Rong',
      'Firzana Sadik',
      'Mahroo Rahman',
      'Gabriel Paquette',
      'Aria Rens',
      'Tommy He',
      'Saumyaa Verma',
      'Lin Xiao Zheng',
      'Curtis Lin',
    ],
    design: ['Duaa Memon', 'Yunjie Zhang'],
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
