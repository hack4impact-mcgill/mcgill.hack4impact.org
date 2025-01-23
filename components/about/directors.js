import { Row, Col, Card, CardBody } from "reactstrap";
import { ImagePathConversion } from "../../data/helper";
import Section from "../section";

export default ({ directors }) => (
  <Section reduced={true}>
    <Row>
      <div className="text-center section-title">
        <h2>Our Executive Team</h2>
      </div>
    </Row>
    <Row className="justify-content-center">
      {directors.map(director => (
        <Col key={director.name} md="4">
          <Card className="card border-0">
            <div className="text-center mb-2">
              <img
                className="rounded-circle img-fluid director-icon"
                src={ImagePathConversion(director.name)}
                id="co-director"
              />
            </div>
            <CardBody className="card-body">
              <p className="text-center">
                <b className="text-bold text-18px">{director.name}</b> <br /> Executive Director{" "}
                {director.linkedin !== undefined ? (
                  <a href={director.linkedin}>
                    {" "}
                    |{" "}
                    <img
                      width="12"
                      className="linkedin-icon"
                      src="/static/icons/linkedin.svg"
                    />
                  </a>
                ) : null}
              </p>
            </CardBody>
          </Card>
        </Col>
      ))}
      <style jsx>{`
        .director-icon {
          max-height: 240px;
        }
      `}</style>
    </Row>
  </Section>
);
