/*
  Mission Section holding the photo and our mission in the /about page
*/
import { Container, Row, Col } from "reactstrap";
import { Spring } from "react-spring";
import Image from "next/image";

const MissionSection = () => (
  <section className="mission-section">
    <Container>
      <Row className="align-items-center">
        <Col lg="6">
          <Spring
            from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
            to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            config={{ tension: 120, friction: 18 }}
          >
            {props => (
              <div style={props} className="mission-copy">
                <h2 className="project-detail-title text-lg-left text-center">
                  Our Mission
                </h2>
                <p className="mission-body-text">
                  Hack4Impact exists for both nonprofits and students. We connect
                  builders with organizations on the front lines of social change so
                  we can ship tools that matter.
                </p>
                <ul className="mission-list">
                  <li>Co-design products alongside mission-driven partners.</li>
                  <li>Mentor student teams to lead accessible, human-centred builds.</li>
                  <li>Invest in knowledge sharing across the global Hack4Impact network.</li>
                </ul>
              </div>
            )}
          </Spring>
        </Col>
        <Col lg="6" className="mt-4 mt-lg-0">
          <Spring
            from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
            to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            config={{ delay: 150, tension: 120, friction: 18 }}
          >
            {props => (
              <div style={props} className="mission-visual">
                <Image
                  src="/static/images/work_together_blue.svg"
                  width={520}
                  height={360}
                  alt="Student developers collaborating with a nonprofit partner"
                />
              </div>
            )}
          </Spring>
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      .mission-section {
        background: linear-gradient(180deg, rgba(233, 237, 255, 0.35) 0%, rgba(255, 255, 255, 1) 100%);
        padding: 4rem 0;
      }
      .mission-body-text {
        color: #323648;
        font-weight: 500;
        font-size: 1.05rem;
      }
      .mission-copy {
        max-width: 32rem;
        margin: 0 auto;
      }
      .mission-list {
        margin-top: 1.5rem;
        padding-left: 1.2rem;
        color: #1f285f;
        font-weight: 600;
        list-style-type: disc;
      }
      .mission-list li + li {
        margin-top: 0.75rem;
      }
      .mission-visual {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </section>
);

export default MissionSection;
