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
        <div className="banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="10">
                <h1 className="project-title mb-3">
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
                {clientDetail ? (
                  <p className="project-subtitle">{clientDetail}</p>
                ) : null}
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg="8">
                <div className="banner-cta">
                  {projectLink ? (
                    <ActionButton white text="Final Product" link={projectLink} />
                  ) : null}
                  {githubLink ? (
                    <ActionButton white text="View Code" link={githubLink} />
                  ) : null}
                  {previousLink ? (
                    <ActionButton
                      white
                      text="Previous Iteration"
                      link={previousLink}
                    />
                  ) : null}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <style jsx>{`
        .project-page-banner {
          position: relative;
          overflow: hidden;
          font-family: 'Hanken Grotesk', sans-serif;
          background: #1f285f;
          color: #f4f6ff;
        }

        .banner-overlay {
          padding: 120px 0 80px;
          background: transparent;
        }

        .project-title {
          font-size: clamp(2.2rem, 4vw, 3.1rem);
          font-weight: 700;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .section-title-link {
          color: inherit;
        }

        .section-title-link:hover {
          text-decoration: none;
          color: #ffffff;
        }

        .project-subtitle {
          font-size: 1.15rem;
          line-height: 1.6;
          color: rgba(244, 246, 255, 0.85);
          margin-bottom: 2.25rem;
        }

        .banner-cta {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        :global(.banner-cta .styled-btn) {
          min-width: 170px;
        }

        @media (max-width: 768px) {
          .banner-overlay {
            padding: 90px 0 60px;
          }
          .banner-cta {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectBanner;
