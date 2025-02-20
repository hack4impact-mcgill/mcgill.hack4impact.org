import React from "react";

const Section = ({ children, grey, darkgrey, reduced = false }) => (
  <section
    className={reduced ? "reduced-section" : "typical-section"}
    style={{
      background: grey ? "rgb(250, 251, 252)" : darkgrey ? "#ebeff2" : undefined
    }}
  >
    <div>
      {children}
      <style jsx>
        {`
          @media (max-width: 768px) {
            section {
              padding: 300px 0;
              height: 600px;
            }
          }
          .typical-section {
            padding: 100px 0;
            margin: auto;
          }
          .reduced-section {
            padding: 50px 0;
            margin: auto;
          }
        `}
      </style>
    </div>
  </section>
);

export default Section;
