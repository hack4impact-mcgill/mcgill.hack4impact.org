import { Container, Col, Row } from "reactstrap";
import Directors from "./directors";
import Section from "../section";
import TeamData from "../../data/teamData";
import MemberIcon from "../memberIcon";

const TeamSection = () => (
  <Section>
    <Container>
      <Directors directors={TeamData.directors} />
      <Row>
        {TeamData.execs.map(member => (
          <MemberIcon
            key={member.name}
            name={member.name}
            role={member.role}
            linkedin={member.linkedin}
            nopic={member.nopic}
          />
        ))}
      </Row>
      <div className="p-5 m-3">
        <h2 className="center"> Developers, Designers, & PMs </h2>
      </div>
      <Row>
        {[...TeamData.team]
          .sort((a, b) => {
            const roleOrder = {
              "Product Manager": 1,
              "Tech Lead": 2,
              "Product Designer": 3,
              "Developer": 4
            };
            const roleCompare = (roleOrder[a.role] || 999) - (roleOrder[b.role] || 999);
            return roleCompare !== 0 ? roleCompare : a.name.localeCompare(b.name);
          })
          .map(member => (
            <MemberIcon
              key={member.name}
              name={member.name}
              role={member.role}
              linkedin={member.linkedin}
              nopic={member.nopic}
            />
          ))}
      </Row>
      <div className="p-5 m-3">
        <h2 className="center"> Alumni </h2>
      </div>
      <Row>
        {TeamData.alumni.map(member => (
          <MemberIcon
            key={member.name}
            name={member.name}
            role={member.role}
            linkedin={member.linkedin}
            nopic={member.nopic}
          />
        ))}
      </Row>
    </Container>
  </Section>
);

export default TeamSection;
