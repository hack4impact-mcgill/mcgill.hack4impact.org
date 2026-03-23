import React from "react";
import Link from "next/link";

const OutlineButton = ({ text, link, style }) => (
  <Link href={link} className="outline-button" style={style}>
    {text}
    <style jsx>{`
      .outline-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0px 2rem;
        border-radius: 4px;
        border-image: initial;
        overflow: hidden;
        transition: all 0.15s ease 0s;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        height: 2.5rem;
        color: white;
        border-color: #1f285f;
        text-decoration: none;
      }

      .outline-button {
        font-family: "Hanken Grotesk", sans-serif;
        font-weight: 100;
        font-size: 14px;
        color: white !important;
      }

      .outline-button:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 3px 5px 20px;
        transition: border 0.2s, background 0.2s, color 0.2s ease-out;
      }
    `}</style>
  </Link>
);

export default OutlineButton;
