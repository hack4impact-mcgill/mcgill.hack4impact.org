import React from "react";
import Link from "next/link";
// Used in Homescreen

const ProjectContainer = ({ title, subtitle, image, link }) => (
  <Link href={link}>
    <a>
      <div
        className="project-item"
        style={{
          backgroundImage: `linear-gradient(165deg, rgba(12, 24, 68, 0.6), rgba(12, 24, 68, 0.4)), ${image}`
        }}
      >
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .project-item {
            margin: 60px 0;
          }
          p {
            padding-top: 20px;
          }
        }
        .project-item {
          box-shadow: 3px 3px 20px rgba(44, 62, 80, 0.1);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 5px;
          color: #f9fafc;
          display: flex;
          justify-content: flex-end;
          overflow: hidden;
          padding: 20px;
          flex-flow: column;
          height: 95%;
          width: auto;
          min-height: 200px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .project-item:hover {
          box-shadow: 0 12px 24px rgba(17, 36, 92, 0.25);
          transform: translateY(-6px);
          cursor: pointer;
        }
        h4 {
          margin-bottom: 12px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        p {
          margin: 0px;
          color: #f9fafc;
          font-weight: 500;
        }
      `}</style>
    </a>
  </Link>
);

export default ProjectContainer;
