import { Row, Col, Container } from 'reactstrap';
import ActionButton from '../actionButton';

const ProjectBanner = ({
  title,
  clientDetail,
  clientLink,
  githubLink,
  projectLink,
  previousLink,
}) => {
  const hasClientLink =
    clientLink !== undefined && clientLink !== null && clientLink !== '';

  return (
    <>
      <section className="project-page-banner">
        <Container className="margin-sm-all">
          <Row>
            <Col md="12">
              <h1 className="project-title mb-4">
                {hasClientLink ? (
                  <a
                    className="section-title-link"
                    href={clientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                ) : (
                  <span className="section-title-link">{title}</span>
                )}
              </h1>
            </Col>
          </Row>

          <Row>
            <div className="col-md-8 offset-md-2">
              {clientDetail ? (
                <p className="project-subtitle">{clientDetail}</p>
              ) : null}
            </div>
          </Row>

          <Row className="text-center">
            <Col md="12">
              {projectLink !== undefined && projectLink != null ? (
                <ActionButton
                  text="Final Product"
                  link={projectLink}
                  white
                  style={{ marginRight: '10px' }}
                />
              ) : null}
              {githubLink !== undefined && githubLink !== null ? (
                <ActionButton text="View Code" link={githubLink} white />
              ) : null}
              {previousLink !== undefined && previousLink !== null ? (
                <div className="previous-button">
                  <ActionButton
                    text="View Previous Project"
                    link={previousLink}
                    white
                  />
                </div>
              ) : null}
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx>{`
        .project-page-banner {
          padding: 7% 0;
          background: radial-gradient(#3d94eeff, #155da1);
          background-size: cover;
          background-attachment: fixed;
          font-family: 'Hanken Grotesk', sans-serif;
          text-align: center;
        }
        .section-title-link {
          color: black;
        }
        .section-title-link:hover {
          color: #155da1;
        }
        .project-title {
          font-size: 40px;
          font-weight: 600;
        }
        .project-subtitle {
          font-size: 18px;
          font-weight: 500;
        }
        .previous-button {
          margin: 1vh;
          margin-bottom: 0vh;
        }
      `}</style>
    </>
  );
};

export default ProjectBanner;
