import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-main-link">
        <a
          onClick={props.scroll}
          className="header-main-link-text"
          href="/#home"
        >
          Jesse Robinson
        </a>
        <div className="header-main-link-bar" />
      </div>
      <div className="header-links">
        <div className="header-link">
          <a onClick={props.scroll} className="header-link-text" href="/#about">
            About
          </a>
          <div className="header-link-bar" />
        </div>
        <div className="header-link">
          <a
            onClick={props.scroll}
            className="header-link-text"
            href="/#skills"
          >
            Skills
          </a>
          <div className="header-link-bar" />
        </div>
        <div className="header-link">
          <a
            onClick={props.scroll}
            className="header-link-text"
            href="/#projects"
          >
            Projects
          </a>
          <div className="header-link-bar" />
        </div>
      </div>
    </header>
  );
}
