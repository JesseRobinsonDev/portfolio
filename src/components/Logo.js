import "./Logo.css";

export default function Logo(props) {
  return (
    <li className="logo">
      <img className="logo-img" src={props.src} alt={props.alt} />
      <span className="logo-tooltip">{props.alt}</span>
    </li>
  );
}
