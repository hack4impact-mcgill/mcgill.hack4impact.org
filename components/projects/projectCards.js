import { Card, CardBody } from 'reactstrap';
import ActionButton from '../actionButton';
import Link from 'next/link';

const ProjectCards = ({ title, imgPath, link, subTitle }) => (
  <>
    <Link href={link}>
      <Card
        className="bg-light mb-3 project-card h-100"
        style={{ height: '100%' }}
      >
        <img
          className="card-img-top"
          style={{ maxHeight: '180px' }}
          src={imgPath}
          alt={title}
        />
        <CardBody className="project-card-body">
          <h5 className="text-title card-title text-center">{title}</h5>
          <p className="text-center" id="card-text">
            {subTitle}
          </p>
          <div className="text-center action-btn-box">
            <ActionButton white text="Read More" link={link} />
          </div>
        </CardBody>
      </Card>
    </Link>
    <style jsx>{`
      .project-card {
        border: none;
        height: 100% !important;
        border-radius: 18px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: flex;
        flex-direction: column;
      }
      .project-card:hover {
        box-shadow: 0 5px 30px rgba(44, 62, 80, 0.1);
        transform: translateY(-8px);
      }
      .project-card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .project-card-body h5 {
        margin-bottom: 16px;
      }
      .action-btn-box {
        margin-top: auto;
        padding-top: 24px;
      }
    `}</style>
  </>
);

export default ProjectCards;
