const name = 'MealCare Revamp';
const id = 'mealcare-revamp';
const detail = "A revamped mobile app to help volunteers track food waste and a data backend for in-depth data analysis.";
const coverImagePath = "/static/images/projects/mealcare/mealcare_problem_blue.svg";
const clientDetail = 'MealCare is a student-founded non-profit dedicated to reducing food waste and food insecurity across Canadian communities.';
const clientLink = 'https://www.mealcare.org/';
const previousLink = null;
const clientFeatures = null;
const problem = "MealCare volunteers go to various food vendors in order to pick up their food waste. Currently MealCare does not have an effective way to track how much waste they collect and report that data back to the vendors";
const problemImagePath = "/static/images/projects/mealcare/mealcare_problem_blue.svg";
const solution = "We're working with MealCare to create a mobile app that allows volunteers to enter the food waste they pick up at each stop, as well as a web dashboard that allows MealCare to analyze their data in-depth and report it to the food vendors they've partnered with.";
const solutionImagePath = '/static/images/projects/mealcare-revamp/mealcare_solution.png';
const features = null;
const techStack = [
  'postgres',
  'react',
];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;

const githubLink = 'https://github.com/hack4impact-mcgill/MealCareV2';
const projectLink = null;

const team = {
  type: 'no-pic',
  detail: {
    pm: ['Elodie Ithier', 'Dylan Xu'],
    swe: [
      'Magnus Gao',
      'Yijia Jing',
      'Sibo Yang',
      'Aiyu Wang',
      'Brian Hu',
      'Jocelyn Gervais',
    ],
    design: ['Alexandre Poppian', 'Ashley Lau'],
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
