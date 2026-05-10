import Section from '../section';
import { Container, Row } from 'reactstrap';
import ActionButton from '../actionButton';

const ProjectExplore = () => (
  <Section darkgrey>
    <Container>
      <Row>
        <div className=" text-center" id="main-headline">
          <h5 className="section-title"> Explore </h5>
        </div>
      </Row>

      <Row>
        <div className="text-center" id="sub-headline">
          <p>
            For more information on making a lasting impact through a project
            team or working with us to solve a core need for your organization,
            click below!
          </p>
        </div>
      </Row>

      <Row>
        <div className="text-center explore-actions">
          <ActionButton
            style={{ marginRight: '10px' }}
            text="Students"
            link="/apply/students"
          />
          <ActionButton text="Non-profits" link="/apply/nonprofits" />
        </div>
      </Row>
    </Container>
    <style jsx>{`
      @media (max-width: 420px) {
        .explore-actions {
          width: 100%;
        }
        .explore-actions :global(a + a) {
          margin-top: 12px;
        }
        .explore-actions :global(.styled-btn) {
          margin-right: 0 !important;
        }
      }
    `}</style>
  </Section>
);
export default ProjectExplore;
