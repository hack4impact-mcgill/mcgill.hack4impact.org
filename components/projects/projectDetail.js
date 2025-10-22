import { Container, Row, Col } from "reactstrap";
import ProjectFeature from "./projectFeature";
import ProjectQuote from "../quote";

const ProjectDetail = ({ project }) => (
  <section className="project-overview">
    <Container>
      <Row className="summary-row">
        <Col lg="6">
          <div className="summary-card">
            <span className="summary-label">Problem</span>
            <div className="summary-media">
              <img
                src={project.problemImagePath}
                className="summary-image"
                alt={`Problem illustration for ${project.name}`}
              />
            </div>
            <p className="summary-copy">{project.problem}</p>
          </div>
        </Col>
        <Col lg="6">
          <div className="summary-card">
            <span className="summary-label">Solution</span>
            <div className="summary-media">
              <img
                src={project.solutionImagePath}
                className="summary-image"
                alt={`Solution mockup for ${project.name}`}
              />
            </div>
            <p className="summary-copy">{project.solution}</p>
          </div>
        </Col>
      </Row>

      <ProjectFeature
        featureImgSize={project.featureImgSize}
        features={project.features}
      />
    </Container>
    <ProjectQuote
      quote={project.quote}
      source={project.quoteSource}
      sourceTitle={project.quoteSourceTitle}
    />
    <style jsx>{`
      .project-overview {
        padding: 80px 0;
        background: linear-gradient(180deg, #f5f7ff 0%, #ffffff 100%);
      }

      .summary-card {
        background: #ffffff;
        border-radius: 18px;
        padding: 32px 32px 28px;
        box-shadow: 0 24px 60px rgba(21, 46, 119, 0.12);
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .summary-label {
        font-size: 0.9rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #3c5dfa;
        font-weight: 700;
      }

      .summary-media {
        border-radius: 14px;
        overflow: hidden;
        background: radial-gradient(
          circle at 20% 20%,
          rgba(60, 93, 250, 0.15),
          rgba(60, 93, 250, 0)
        );
      }

      .summary-image {
        width: 100%;
        height: auto;
        display: block;
      }

      .summary-copy {
        font-size: 1.05rem;
        line-height: 1.7;
        color: #374060;
        margin-bottom: 0;
      }

      .summary-row > :global(.col-lg-6) {
        margin-bottom: 32px;
      }

      @media (min-width: 992px) {
        .summary-row > :global(.col-lg-6:first-of-type) {
          margin-bottom: 0;
        }
      }

      @media (max-width: 768px) {
        .project-overview {
          padding: 60px 0;
        }
        .summary-card {
          padding: 26px 24px;
        }
      }
    `}</style>
  </section>
);

export default ProjectDetail;
