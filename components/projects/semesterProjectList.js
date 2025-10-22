import { Container, Row, Col } from 'reactstrap';
import ProjectCards from './projectCards';
import projectData from '../../data/projectData';

const SemesterProjectList = () => (
  <Container>
    {projectData.map((semester, idx) => (
      <div key={semester.semester}>
        <Row>
          <h1 className="section-title center">{semester.semester} Projects</h1>
        </Row>
        <Row
          className="justify-content-center"
          style={{ marginBottom: `${idx !== projectData.length - 1 ? '35px' : '0px'}` }}
        >
          {semester.projects.map((project) => (
            <Col key={project.id} md="4" sm="6" style={{ marginBottom: '25px' }}>
              <ProjectCards
                title={project.name}
                imgPath={project.coverImagePath}
                link={`/projects?name=${project.id}`}
                subTitle={project.detail}
              />
            </Col>
          ))}
        </Row>
      </div>
    ))}
  </Container>
);

export default SemesterProjectList;
