import { Container, Row, Col, Card } from "reactstrap";
import ActionButton from "../actionButton";
import { ImagePathConversion } from "../../data/helper";
import TeamMemberIcon from "../memberIcon";

const ProjectTeam = ({ team }) => (
  <section className="project-team">
    <Container>
      <Row>
        <Col md="12">
          <h5 className="project-detail-title center mb-5"> Project Team </h5>
        </Col>
      </Row>

      <Row>
        {team.type === "no-pic" ? (
          <div className="text-center">
            <Row>
              <Col />
              {team.detail.pm.map(productManager => {
                return (
                  <TeamMemberIcon
                    nopic
                    name={productManager}
                    role="Product Manager"
                  />
                );
              })}
              <Col />
            </Row>
            <Row>
              <Col md="12">
                <div className="text-center">
                  <p className="text-center">
                    <b> Developers: </b>{" "}
                    {team.detail.swe.map(function(swe, index) {
                      if (index === team.detail.swe.length - 1) {
                        return <>{swe} </>;
                      } else {
                        return <>{swe}, </>;
                      }
                    })}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          team.detail.map(member => (
            <TeamMemberIcon name={member.name} role={member.role} />
          ))
        )}
      </Row>
      <Row>
        <div style={{ margin: "30px auto" }}>
          <ActionButton
            style={{ margin: "30px auto" }}
            white
            text="View Other Projects"
            link="/projects"
          />
        </div>
      </Row>
    </Container>
  </section>
);

export default ProjectTeam;
