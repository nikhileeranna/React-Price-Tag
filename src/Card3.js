import DataList from "./DataList";
import { Button } from "react-bootstrap";

export default function Card3() {
  const data = [
    {
      name: "150GB Storage",
      isEnabled: true
    },
    {
      name: "Unlimited Public Projects",
      isEnabled: true
    },
    {
      name: "Community Access",
      isEnabled: true
    },
    {
      name: "Unlimited Private Projects",
      isEnabled: true
    },
    {
      name: "Dedicated Phone Support",
      isEnabled: true
    }
  ];

  return (
    <>
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          Pro
        </h5>
        <h6 className="card-price text-center">
          $49<span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <strong>Unlimited Users</strong>
          </li>
          {data.map((data) => (
            <DataList isEnabled={data.isEnabled} name={data.name} />
          ))}

          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <strong>Unlimited</strong> Free Subdomains
          </li>
          <DataList isEnabled={true} name={" Monthly Status Reports"} />
        </ul>
        <div class="d-grid">
          <Button className="btn btn-block btn-primary text-uppercase">
            BUTTON
          </Button>
        </div>
      </div>
    </>
  );
}
