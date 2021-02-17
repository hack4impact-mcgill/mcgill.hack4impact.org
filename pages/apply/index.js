import GradientBanner from '../../components/gradientBanner';
import ActionButton from '../../components/actionButton';
import Head from '../../components/head';
import Nav from '../../components/nav';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../../components/footer';

const ApplyPage = () => (
  <>
    <Head title="Apply" />
    <Nav navType="otherNav" />
    <GradientBanner title="Apply" arrow />
    <section className="timeline-split-apply">
      <Container>
        <Row>
          <Col>
            <Row>
              <div className="col-md-9 offset-md-2">
                <h4 className="text-title">Students</h4>
                <p>
                  Are you a McGill student wanting to apply your skills to
                  benefit the community? Learn how you can build software
                  products that has the potential to make an impact alongside a
                  team of motivated and talented peers.
                </p>
                <ActionButton text="Apply" link="/apply/students" />
              </div>
            </Row>

            <Row className="margin-lg-top">
              <div className="col-md-9 offset-md-2">
                <h4 clas="text-title">Nonprofits</h4>
                <p>
                  Have a core need that your nonprofit wants solved? Learn more
                  about our services and how your organization can partner with
                  us to support your organization's goals and mission.
                </p>
                <ActionButton text="Apply" link="/apply/nonprofits" />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default ApplyPage;
