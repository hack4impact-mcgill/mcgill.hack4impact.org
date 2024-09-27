import React from 'react';
import Interview from '../public/static/icons/interview.svg';
import Calendar from '../public/static/icons/calendar.svg';
import Contract from '../public/static/icons/contract.svg';

const applicationLink = '#';

const subHeadline =
  'Students are a core part of what makes Hack4Impact. Joining Hack4Impact is the perfect way to give back while developing new skills and making long-lasting friendships.';
const quote = {
  text:
    'A lot of classwork at McGill is super theoretical. The difference between industry and schoolwork is massive, and we want to help students bridge that gap. At Hack4Impact, you get to build a project from the ground up. Being exposed to building something from scratch is a great experience as a student.',
  source: 'Albert Kragl',
  sourceTitle: "'21",
};

const faq = [
  {
    question: 'What is the general premise of Hack4Impact?',
    answer: (
      <>
        <p>
          <i>Team:</i> Work on a team of 4-7 students led by a Product Manager{' '}
        </p>
        <p>
          <i>Build: </i> Develop the product throughout 1-2 semesters{' '}
        </p>
        <p>
          <i>Ship: </i> Deliver the final product to the nonprofit client!{' '}
        </p>
        <p>
          <i>Community: </i> Join an organization with a strong focus on
          mentorship and social community events{' '}
        </p>
      </>
    ),
  },
  {
    question: 'Is extensive web development experience required?',
    answer:
      'Nope! Mentorship is a core value of our organization so we are always looking to take less experienced developers as long as you are willing to put in the time and have the passion to learn. You will have a tight feedback loop with your project leads along with experienced members on your team to ensure your success and project’s success in order to benefit the nonprofit your team is working with.',
  },
  {
    question: "Why don't you accept more students?",
    answer: (
      <>
        We would love to accept all of our good candidates, but from our
        perspective, this is what we see. <br />
        <br />
        <ul>
          <li>
            {' '}
            We can’t work with all the non-profits in the world, because the
            quality of work and projects is just not scalable. We need to be
            incredibly selective with our leads because any risk of wasting 1-2
            semesters' worth of time would ultimately be counterproductive for
            both our clients and students.
          </li>
          <li>
            We can’t have enormous teams because productivity inherently goes
            down, and work becomes less meaningful if anyone is tasked with
            completing a miniscule part of the project. On top of that, there
            are physical limits on the number of groups we can meet in person.
          </li>
          <li>
            We can only interview a fixed number of candidates, no matter how
            many good ones apply. We can only take as many candidates as our
            projects leads can support along with the scope of the projects
            itself. We want to take everyone who is qualified and we want to
            take on more projects, but for the reasons above, we just can’t.
          </li>
        </ul>
        That being said, we are looking into ways we can accommodate for members
        in the future such as holding more external events and tech talks,
        expanding our interview process to interview more candidates, and
        increasing our training program for more Product Managers/Technical
        Leads to take on more projects but maintain the high quality work we are
        know for.
      </>
    ),
  },
  {
    question: 'What are you looking for in new potential members?',
    answer: (
      <>
        The one thing that we value most over everything else is your
        willingness to learn. Having previous experience is great, but we make
        sure to take a wide variety of skill sets every semester. If you want to
        improve your skills, we strongly encourage you to apply!
      </>
    ),
  },
];

const applicationDetail = '';

const studentProcess = [
  {
    title: 'Online Application',
    detail: (
      <>
        <p>
          Once our applications open, fill out our online application before the
          deadline. You can either apply online or at one of the in-person
          involvement events that happen at the start of each semester (e.g. EUS
          Involvement Day).
        </p>
      </>
    ),
    icon: <Calendar />,
  },
  {
    title: 'Takehome Challenge',
    detail: (
      <>
        <p>
          After you apply, we'll ask that you send us your resume and try your
          best to complete a technical challenge where you'll get to familiarize
          yourself with different elements of our tech stack. We do this so we
          can get a sense of your experience level and how committed you are to
          learning new things.
        </p>
      </>
    ),
    icon: <Contract />,
  },
  {
    title: 'Interview',
    detail: (
      <>
        <p>
          If your takehome challenge and resume look good, we'll invite you to
          an informal final interview. We want to get to know you during this
          interview, and it'll be pretty laid back. After this we'll send out
          our final acceptances for the semester!
        </p>
      </>
    ),
    icon: <Interview />,
  },
];

const closedText = (
  <b>
    Our applications open at the start of each Fall semester. Keep an eye out on our{' '}
    <a href="https://www.instagram.com/hack4impactmcgill/" target="_blank">
      Instagram
    </a>{' '}
    to see when applications open!
  </b>
);
export default {
  title: 'Students',
  subHeadline,
  applicationLink,
  quote,
  faq,
  studentProcess,
  closedText,
  applicationDetail,
};
