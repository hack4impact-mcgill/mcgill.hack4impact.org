import { Container, Row, Col, Card } from "reactstrap";
import { ImagePathConversion } from "../data/helper";

const TeamMemberIcon = ({ name, role, linkedin, nopic }) => (
  <Col xs={nopic ? "6" : "6"} md="3">
    <Card className="border-0 member-icon">
      <div className="text-center">
        <a href={linkedin !== undefined ? linkedin : null}>
          {nopic ? 
          (<div className="image-container">
            <img
              className="rounded-circle img-fluid team-icon"
              src={ImagePathConversion('default')}
            />
          </div>) :
          (<div className="image-container">
            <img
              className="rounded-circle img-fluid team-icon"
              src={ImagePathConversion(name)}
            />
          </div>)}
        </a>
      </div>
    </Card>

    <div className="card-body">
      <p className="text-left">
        <b className="text-bold text-18px"> {name} </b> <br /> {role}{" "}
        {linkedin !== undefined ? (
          <a href={linkedin}>
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
    </div>
    <style jsx>{`
      .image-container {
        width: 80%;
        aspect-ratio: 1;
        margin: 0 auto;
      }
      .team-icon {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .linkedin-icon {
        margin-bottom: 3px;
      }
      .team-icon:hover {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    `}</style>
  </Col>
);

export default TeamMemberIcon;
