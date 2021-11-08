import DataList from "./DataList";
import { Button } from "react-bootstrap";

export default function Card2() {
  const data = [
    {
      name: "50GB Storage",
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
    },
    {
      name: "Free Subdomain",
      isEnabled: true
    },
    {
      name: "Monthly Status Reports",
      isEnabled: false
    }
  ];

  return (
    <>
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          PLUS
        </h5>
        <h6 className="card-price text-center">
          $9<span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <strong>5 Users</strong>
          </li>
          {data.map((data) => (
            <DataList isEnabled={data.isEnabled} name={data.name} />
          ))}
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
