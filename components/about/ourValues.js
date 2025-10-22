import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText
} from "reactstrap";
import Section from "../section";
const iconWrapperStyle = {
  width: "4.5rem",
  height: "4.5rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(135deg, rgba(237,240,252,0.9), rgba(210,219,255,0.9))",
  color: "#4154f1",
  marginBottom: "1.5rem"
};
const iconSize = {
  width: "2.5rem",
  height: "2.5rem"
};
// values used in the component below
const values = [
  {
    title: "Curiosity",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={iconSize}
      >
        <circle cx="11" cy="11" r="6" />
        <line x1="20" y1="20" x2="16.65" y2="16.65" />
        <path d="M11 8a3 3 0 0 1 3 3" />
      </svg>
    ),
    text: [
      "We are eager to learn about technology, ourselves, and the world around us. We dive deep into our fields of study and work, seek feedback, and view every interaction as a chance to grow.",
      "We channel that curiosity into understanding our clients. By asking thoughtful questions and exploring every angle, we deliver the solution that best serves their mission— even when it means pointing them to tools beyond Hack4Impact."
    ]
  },
  {
    title: "Empathy",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={iconSize}
      >
        <path d="M19.5 12.5l-7.5 7.5-7.5-7.5a5.25 5.25 0 1 1 7.42-7.42l.08.08.08-.08a5.25 5.25 0 1 1 7.42 7.42z" />
      </svg>
    ),
    text: [
      "We make space for perspectives, questions, and needs. By listening deeply to the people around us, we can mentor teammates, offer support, and build trust.",
      "Empathy guides every client partnership. It helps us settle tough decisions and keeps our focus on what delivers the greatest impact for the communities we serve."
    ]
  },
  {
    title: "Intentionality",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={iconSize}
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    text: [
      "We weigh trade-offs, chart a course, and pursue our goals with purpose. Growth—personal or professional—comes from deliberate action, not busywork.",
      "For our clients and their users, intentionality keeps us aligned with the outcomes that matter most. We design tailored solutions by understanding real constraints, needs, and priorities."
    ]
  }
];

const OurValues = () => (
  <Section>
    <Container>
      <Row>
        <div className="text-center project-detail-title">
          <h2>Our Values</h2>
        </div>
      </Row>

      <Row className="mt-4">
        {values.map(value => (
          <Col key={value.title} md="4" className="d-flex mb-4">
            <Card className="shadow-sm border-0 w-100 text-center">
              <CardBody className="d-flex flex-column align-items-center">
                <div style={iconWrapperStyle}>{value.icon}</div>
                <h5 className="text-title card-title mb-3">{value.title}</h5>
                <CardText tag="div">
                  {value.text.map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default OurValues;
