import { Container, Row, Col } from 'reactstrap';
import ActionButton from '../actionButton';
import TeamMemberIcon from '../memberIcon';

const ProjectTeam = ({ team }) => (
  <section id="project-team">
    <Container>
      <Row>
        <Col md="12">
          <h5 className="project-detail-title text-left mb-5"> Project Team </h5>
        </Col>
      </Row>

      <Row>
        {team.type === 'no-pic' ? (
          <div className="text-left">
            <Row>
            <Col md="12">
                <div className="text-left">
                  <p className="text-left">
                    <b> Project Managers: </b> {team.detail.pm.join(', ')}
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="text-left">
                  <p className="text-left">
                    <b> Developers: </b> {team.detail.swe.join(', ')}
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="text-left">
                  <p className="text-left">
                    <b> UI/UX Design: </b> {team.detail.design.join(', ')}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          team.detail.map((member) => (
            <TeamMemberIcon name={member.name} role={member.role} />
          ))
        )}
      </Row>
      <Row>
        <div style={{ margin: '30px auto' }}>
          <ActionButton
            style={{ margin: '30px auto' }}
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
