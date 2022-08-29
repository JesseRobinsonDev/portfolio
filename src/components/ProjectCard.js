import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <li className="project-card">
      <img className="project-img" src={props.src} alt={props.title} />
      <div className="project-title">
        <a className="project-link" href={props.link}>
          ://{props.title}
          <div className="project-link-bar" />
        </a>
        <ul className="github-links">
          {props.githubs.map((github) => (
            <li key={github}>
              <a href={github}>
                <img
                  className="github-logo"
                  src="./logos/Github.svg"
                  alt="Github"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="project-description">{props.description}</p>
      <ul className="project-tags">
        {props.tags.map((tag) => (
          <li className="project-tag" key={tag.text}>
            <img className="project-tag-logo" src={tag.src} alt={tag.text} />
            <span className="project-tag-tooltip">{tag.text}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
