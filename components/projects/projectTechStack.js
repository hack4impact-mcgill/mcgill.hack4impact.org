import { Row } from 'reactstrap';

// need to add to this whenever a new library/technology is used
// this must match the strings listed in props.techStack, which is an array
const techStackMasterList = {
  react: {
    link: 'https://reactjs.org/',
    title: 'React',
    imgPath: '/static/images/techStack/react.jpg',
  },
  flask: {
    link: 'http://flask.pocoo.org/',
    title: 'Flask',
    imgPath: '/static/images/techStack/flask.jpg',
  },
  mongodb: {
    link: 'https://www.mongodb.com/',
    title: 'MongoDB',
    imgPath: '/static/images/techStack/mongodb.jpg',
  },
  reactnative: {
    link: 'https://facebook.github.io/react-native/',
    title: 'React Native',
    imgPath: '/static/images/techStack/react.jpg',
  },
  postgres: {
    link: 'https://www.postgresql.org/',
    title: 'Postgres',
    imgPath: '/static/images/techStack/postgres.jpg',
  },
  nodejs: {
    link: 'https://nodejs.org/en/',
    title: 'Node.js',
    imgPath: '/static/images/techStack/nodejs.jpg',
  },
  graphql: {
    link: 'https://graphql.org/',
    title: 'GraphQL',
    imgPath: '/static/images/techStack/graphql.jpg',
  },
  redis: {
    link: 'https://redis.io/',
    title: 'Redis',
    imgPath: '/static/images/techStack/redis.jpg',
  },
  python: {
    link: 'https://www.python.org/',
    title: 'Python',
    imgPath: '/static/images/techStack/python.jpg',
  },
  sklearn: {
    link: 'https://scikit-learn.org/stable/',
    title: 'Scikit-Learn',
    imgPath: '/static/images/techStack/sklearn.png',
  },
  beautifulsoup: {
    link: 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/',
    title: 'Beautiful Soup',
    imgPath: '/static/images/techStack/beautiful soup.jpg',
  },
  aws: {
    link: 'https://aws.amazon.com',
    title: 'AWS',
    imgPath: '/static/images/techStack/aws.png',
  },
  box: {
    link: 'https://box.com',
    title: 'Box',
    imgPath: '/static/images/techStack/box.jpg',
  },
  next: {
    link: 'https://nextjs.org',
    title: 'NextJS',
    imgPath: '/static/images/techStack/next.png',
  },
  express: {
    link: 'https://expressjs.com',
    title: 'ExpressJS',
    imgPath: '/static/images/techStack/express.png',
  },
  vue: {
    link: 'https://vuejs.org/',
    title: 'Vue.js',
    imgPath: '/static/images/techStack/vue.png',
  },
  airtable: {
    link: 'https://airtable.com',
    title: 'Airtable',
    imgPath: '/static/images/techStack/airtable.png',
  },
  twilio: {
    link: 'https://twilio.com',
    title: 'Twilio',
    imgPath: '/static/images/techStack/twilio.png',
  },
  docker: {
    link: 'https://www.docker.com/',
    title: 'Docker',
    imgPath: '/static/images/techStack/docker.jpg',
  },
  firebase: {
    link: 'https://firebase.google.com/',
    title: 'Firebase',
    imgPath: '/static/images/techStack/firebase.png',
  },
  vercel: {
    link: 'https://vercel.com/',
    title: 'Vercel',
    imgPath: '/static/images/techStack/vercel.jpg',
  },
  materialui: {
    link: 'https://material-ui.com/',
    title: 'Material UI',
    imgPath: '/static/images/techStack/materialui.png',
  },
  mapbox: {
    link: 'https://www.mapbox.com/',
    title: 'Mapbox',
    imgPath: '/static/images/techStack/mapbox.png',
  },
  fastapi: {
    link: 'https://fastapi.tiangolo.com/',
    title: 'FastAPI',
    imgPath: '/static/images/techStack/fastapi.png',
  },
};

const ProjectTechStack = ({ techStack }) =>
  techStack === undefined || techStack === null || techStack.length === 0 ? (
    <></>
  ) : (
    <>
      <section className="tech-stack">
        <Row className="justify-content-center text-center">
          <div className="col-lg-10">
            <h5 className="project-detail-title section-heading mb-4">Tech Stack</h5>
            <p className="section-subtitle">
              Tools and frameworks we used to bring this build to life.
            </p>
          </div>
        </Row>
        <div className="tech-grid">
          {techStack.map(tech => {
            const techInfo = techStackMasterList[tech];
            if (!techInfo) {
              return null;
            }
            return (
              <a
                key={tech}
                className="tech-pill"
                href={techInfo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tech-pill__name">{techInfo.title}</span>
              </a>
            );
          })}
        </div>
      </section>
      <style jsx>{`
        .tech-stack {
          margin: 80px auto 60px;
          padding: 48px 36px;
          background: rgba(28, 52, 140, 0.06);
          border-radius: 20px;
        }

        .section-heading {
          font-size: 1.9rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .section-subtitle {
          color: #42507a;
          margin-bottom: 32px;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        .tech-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          border-radius: 999px;
          background: linear-gradient(120deg, #ffffff, rgba(255, 255, 255, 0.75));
          box-shadow: 0 12px 30px rgba(28, 52, 140, 0.12);
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .tech-pill__name {
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1d2d6d;
        }

        .tech-pill:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(28, 52, 140, 0.2);
        }

        @media (max-width: 768px) {
          .tech-stack {
            margin: 60px auto 40px;
            padding: 36px 22px;
          }
          .tech-pill {
            padding: 10px 18px;
          }
          .tech-pill__name {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );

export default ProjectTechStack;
