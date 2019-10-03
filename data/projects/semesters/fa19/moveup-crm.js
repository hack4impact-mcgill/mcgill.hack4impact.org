// Fa19 - First Move Up project

const name = "Move Up - CRM Tool";
const id = "moveup-crm";
const detail =
  "How might we allow sexual assault victims to have more control over the reporting process?";
const coverImagePath = "/static/images/projects/cp/cp-cover.jpg";
const clientDetail =
  "Move Up is a Bay Area-based non-profit organization that empowers under-served women by helping them find jobs, succeed in careers, and start small businesses.";
const clientLink = "http://www.moveuptoday.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "While there are many problems that remain with aiding victims in the overall process after an initial report of the sexual assault, close to two-thirds of these victims never report the crime at all in the first place. This can prevent the victims from getting help that they want or need, while also leaving the perpetrators to remain free and possibly commit another crime with the recidivism rate around 35%.";
const problemImagePath = "/static/images/projects/c2tc-1/c2tc-1-problem.jpg";
const solution =
  "We worked with Cut to the Case to create an anonymous web-based platform that provides victim with control over the reporting process. A matching status was incorporated to offer more support for victims and show the strength in numbers. Both witnesses and victims can log-in and fill out multiple reports with the ability to take a break during the reporting process and continue later.";
const solutionImagePath = "/static/images/projects/c2tc-1/c2tc-1-sol.jpg";
const features = null;
const techStack = ["flask", "postgres", "vue"];
const quote =
  "We talked to a couple of people about developing about Cut to the Case, but a lot of them didn’t have the same passion that Hack4Impact had for the project. Hack4Impact had enthusiasm for what we were doing. Alex’s team brought up great points like what we would do if someone who’s reporting is underage. They were really receptive to what we said and had a good grasp on the issue.";
const quoteSource = "Premika Pandian";
const quoteSourceTitle = "Cut to the Case Co-Founder and CTO";

const githubLink = null;
const projectLink = null;

const team = {
  type: "no-pic",
  detail: {
    pm: "Albert Kragl",
    tl: "Jeff Delonge",
    swe: [
      "Helena Chi",
      "Melody Felix",
      "Anooj Lal",
      "Pavani Malli",
      "Karthik Shankar",
      "Skyler Shi"
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
