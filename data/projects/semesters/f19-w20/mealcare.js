// Fa19 - First Move Up project

const name = "MealCare";
const id = "mealcare";
const detail =
  "A mobile app to help volunteers track food waste and a data backend for in-depth data analysis.";
const coverImagePath =
  "/static/images/projects/mealcare/mealcare_problem_blue.svg";
const clientDetail =
  "MealCare is a student-founded non-profit dedicated to reducing food waste and food insecurity across Canadian communities.";
const clientLink = "https://www.mealcare.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "MealCare volunteers go to various food vendors in order to pick up their food waste. Currently MealCare does not have an effective way to track how much waste they collect, nor do they have an effective way to report their efforts to the food vendors themselves.";
const problemImagePath =
  "/static/images/projects/mealcare/mealcare_problem_blue.svg";
const solution =
  "We're working with MealCare to create a mobile app that allows volunteers to enter the food waste they pick up at each stop, as well as a web dashboard that allows MealCare to analyze their data in-depth and report it to the food vendors they've partnered with.";
const solutionImagePath =
  "/static/images/projects/mealcare/mealcare_solution.png";
const features = null;
const techStack = ["flask", "postgres", "vue"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;

const githubLink = null;
const projectLink = null;

const team = {
  type: "no-pic",
  detail: {
    pm: ["Yue Dai", "Tyrone Wong"],
    swe: [
      "Alice Kang",
      "Geoffrey Kim",
      "George Kandalaft",
      "Philip Tam",
      "Robin Leman",
      "ZhaoDong Wang",
      "Zhi Rui Guo"
    ]
  }
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
  team
};
