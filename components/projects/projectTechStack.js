import { Row, Card, Col } from 'reactstrap';

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
    imgPath: '/static/images/techStack/fastapi.png'
  }
};

const ProjectTechStack = ({ techStack }) =>
  techStack === undefined || techStack === null ? (
    <></>
  ) : (
    <>
      <section className="tech-stack" style={{ padding: '0'}}>
        <Row>
          <div className="col-md-12">
            <div className="text-left">
              <h5 className="project-detail-title mb-5"> Tech Stack </h5>
            </div>
          </div>
        </Row>
        <div className="left" style={{ margin: 'auto' }}>
          {techStack.map((tech) => (
            <Col md="2" xs="6">
              <Card className="border-0">
                <a href={techStackMasterList[tech].link}>
                  <img
                    src={techStackMasterList[tech].imgPath}
                    className="img-thumbnail img-fluid tech-stack-img"
                  />
                </a>
                <a
                  href={techStackMasterList[tech].link}
                  className="text-center tech-stack-link"
                >
                  {techStackMasterList[tech].title}
                </a>
              </Card>
            </Col>
          ))}
        </div>
      </section>
      <style jsx>{`
        .tech-stack div {
          display: flex;
          justify-content: left;
          text-align: left;
        }
        .tech-stack-link {
          color: #155da1;
        }
        .tech-stack-img:hover {
          box-shadow: 0 5px 30px rgba(44, 62, 80, 0.1);
        }
        @media only screen and (max-width: 640px) {
          .tech-stack div {
            flex-direction: column;
          }
        }
        
      `}</style>
    </>
  );

export default ProjectTechStack;
