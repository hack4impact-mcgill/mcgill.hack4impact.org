import Link from 'next/link';

const ActionLink = ({ link, text, style, passHref }) => (
  <Link href={link} passHref={passHref ?? false}>
    <a className={'link'} style={{ color: '#1f285f', ...style }}>
      {text}
      <style jsx>{`
        .link {
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: normal;
          font-size: 15px;
          margin: auto;
          margin-top: 40px;
          border-bottom: 1px solid #3f46ad;
        }
      `}</style>
    </a>
  </Link>
);

export default ActionLink;
