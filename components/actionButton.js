const ActionButton = ({ link, text, style, white, onClick }) => (
  <>
    {link !== undefined ? (
      <a href={link}>
        <button
          style={style}
          className={
            white ? 'white-button styled-btn' : 'action-button styled-btn'
          }
          onClick={onClick === undefined && link !== undefined ? null : onClick}
        >
          {text}
        </button>
      </a>
    ) : (
      <button
        style={style}
        className={
          white ? 'white-button styled-btn' : 'action-button styled-btn'
        }
        onClick={onClick === undefined && link !== undefined ? null : onClick}
      >
        <a>{text}</a>
      </button>
    )}
    <style jsx>{`
      .styled-btn {
        border-image: initial;
        overflow: hidden;
        transition: all 0.15s ease 0s;
        height: 2.5rem;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 0px 2rem;
        border: none;
        color: white;
      }
      .styled-btn {
        font-family: 'Hanken Grotesk', sans-serif;
        font-weight: 400;
        font-size: 14px;
        text-decoration: none;
      }
      .white-button {
        background: white;
      }
      .white-button {
        color: black !important;
      }
      .action-button {
        background: #1f285f;
      }

      .action-button {
        color: white !important;
      }

      .styled-btn:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 3px 5px 20px;
        transition: border 0.2s, background 0.2s, color 0.2s ease-out;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default ActionButton;
