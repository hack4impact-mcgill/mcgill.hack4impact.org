// Fa19 - First Move Up project

const name = "Move Up - SMS Tool";
const id = "moveup-sms";
const detail =
  "A project to help potential clients sign up for Move Up's services by texting a dedicated phone number.";
const coverImagePath =
  "/static/images/projects/moveup-sms/moveup-sms-cover.jpg";
const clientDetail =
  "Move Up is a Bay Area-based non-profit organization that empowers under-served women by helping them find jobs, succeed in careers, and start small businesses.";
const clientLink = "http://www.moveuptoday.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "Currently, clients can sign up for Move Up's services by either filling out a form online or calling them directly. Both methods can be inconvenient and time-consuming, so Move Up wanted a sign-up method that would be quick and easy for a client to complete.";
const problemImagePath = "/static/images/projects/c2tc-1/c2tc-1-problem.jpg";
const solution =
  "We worked with Move Up to create a SMS-based signup system that allows clients to respond to questions over text with their basic information. This then allows Move Up to reach out to them afterwards and complete their signup process.";
const solutionImagePath = "/static/images/projects/c2tc-1/c2tc-1-sol.jpg";
const features = null;
const techStack = ["flask", "airtable", "twilio"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;

const githubLink = "https://github.com/hack4impact-mcgill/move-up-sms-tool";
const projectLink = null;

const team = {
  type: "no-pic",
  detail: {
    pm: "Albert Kragl",
    swe: [
      "Alana Ceci",
      "Alex Lam",
      "Jonathan Colaco Carr",
      "Kira Noël",
      "Madonna Huang",
      "Nafiz Islam",
      "Tom Wright",
      "Xin Rui Li",
      "Yasasa Abey"
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
