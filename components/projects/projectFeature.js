import FeatureSlider from "../featureSlider";
import { Row, Col, Card, CardBody } from "reactstrap";

const ProjectFeature = ({ featureImgSize, features }) =>
  features === null || features === undefined || features.length === 0 ? (
    <></>
  ) : (
    <section className="project-features">
      <Row>
        <Col md="12">
          <div className="text-center">
            <h5 className="project-detail-title section-heading">Main Features</h5>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {features[0].imgPath === undefined ? (
          features.map(feature => (
            <Col key={feature.title} lg="3" md="4" sm="6" className="feature-column">
              <Card className="feature-card h-100">
                <CardBody>
                  <h6 className="feature-title text-center">{feature.title}</h6>
                  <p className="feature-detail text-center">{feature.detail}</p>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <FeatureSlider featureImgSize={featureImgSize} features={features} />
        )}
      </Row>
      <style jsx>{`
        .project-features {
          margin-top: 70px;
        }

        .section-heading {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .feature-column {
          margin-bottom: 24px;
          display: flex;
        }

        .feature-card {
          border: none;
          border-radius: 16px;
          background: linear-gradient(
            160deg,
            rgba(60, 93, 250, 0.12),
            rgba(60, 93, 250, 0.03)
          );
          box-shadow: 0 18px 40px rgba(18, 30, 97, 0.15);
          padding: 8px 6px;
        }

        .feature-title {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #1d2d6d;
          font-size: 0.9rem;
          margin-bottom: 16px;
        }

        .feature-detail {
          font-size: 1rem;
          color: #404b73;
          line-height: 1.55;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .project-features {
            margin-top: 50px;
          }
        }
      `}</style>
    </section>
  );

export default ProjectFeature;
