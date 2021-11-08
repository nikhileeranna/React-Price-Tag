import "./styles.css";

export default function DataList({ isEnabled, name }) {
  return (
    <>
      <li className={isEnabled ? "" : "text-muted"}>
        <span className="fa-li">
          <i className={isEnabled ? "fas fa-check" : "fas fa-times"}></i>
        </span>
        {name}
      </li>
    </>
  );
}
