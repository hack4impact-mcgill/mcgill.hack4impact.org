import Link from 'next/link';

const ProjectCards = ({ title, imgPath, link, subTitle }) => (
  <>
    <Link href={link} className="project-link">
      <div
        className="project-card"
        style={{
          backgroundImage: `linear-gradient(165deg, rgba(49, 50, 55, 0.7), rgba(48, 49, 52, 0.6)), url(${imgPath})`
        }}
      >
        <div className="project-card-body">
          <h5>{title}</h5>
          <p>{subTitle}</p>
        </div>
      </div>
    </Link>
    <style jsx>{`
      .project-link {
        display: block;
        text-decoration: none;
        height: 100%;
      }
      .project-card {
        box-shadow: 3px 3px 20px rgba(44, 62, 80, 0.1);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        min-height: 280px;
        height: 100%;
        padding: 20px;
        color: #f9fafc;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .project-card:hover {
        box-shadow: 0 12px 24px rgba(17, 36, 92, 0.25);
        transform: translateY(-6px);
        cursor: pointer;
      }
      .project-card-body {
        max-width: 100%;
      }
      .project-card-body h5 {
        margin-bottom: 12px;
        color: #f9fafc;
        font-weight: 700;
        letter-spacing: 0.02em;
      }
      .project-card-body p {
        margin: 0;
        color: #f9fafc;
        font-weight: 300;
      }
    `}</style>
  </>
);

export default ProjectCards;
