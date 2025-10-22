import { Row, Container, Col } from "reactstrap";

const ClientFeatures = ({ features }) =>
  features !== null &&
  features !== undefined &&
  features.length !== 0 && (
    <Container className="client-feature-container">
      <Row className="justify-content-center text-center mb-4">
        <Col lg="10">
          <p className="client-feature-subtitle">Impact Highlights</p>
          <h2 className="client-feature-title">
            What this build unlocks for our partners
          </h2>
        </Col>
      </Row>
      <Row className="feature-row justify-content-center">
        {features.map(feature => (
          <Col
            key={feature.title}
            lg="4"
            md="6"
            className="d-flex"
          >
            <div className="feature-card">
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__detail">{feature.detail}</p>
            </div>
          </Col>
        ))}
      </Row>
      <style jsx>{`
        .client-feature-container {
          margin-top: 90px;
          margin-bottom: 30px;
          font-family: "Hanken Grotesk", sans-serif;
        }

        .client-feature-subtitle {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #3c5dfa;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .client-feature-title {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #141b3a;
          margin-bottom: 0;
        }

        .feature-card {
          background: linear-gradient(
            145deg,
            rgba(60, 93, 250, 0.18),
            rgba(60, 93, 250, 0.05)
          );
          border-radius: 18px;
          padding: 28px 26px;
          box-shadow: 0 22px 45px rgba(18, 30, 97, 0.15);
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-card__title {
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.85rem;
          font-weight: 700;
          color: #1d2d6d;
          margin-bottom: 0;
        }

        .feature-card__detail {
          font-size: 1.1rem;
          line-height: 1.65;
          font-weight: 500;
          color: #303a5d;
          margin-bottom: 0;
        }

        .feature-row :global(.col-lg-4),
        .feature-row :global(.col-md-6) {
          margin-bottom: 24px;
        }

        @media (max-width: 768px) {
          .client-feature-container {
            margin-top: 70px;
          }
          .feature-card {
            padding: 22px 20px;
          }
        }
      `}</style>
    </Container>
  );
export default ClientFeatures;
