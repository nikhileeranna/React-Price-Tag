import DataList from "./DataList";
import { Button } from "react-bootstrap";

export default function Card1() {
  const data = [
    {
      name: "Single User",
      isEnabled: true
    },
    {
      name: "5GB Storage",
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
      isEnabled: false
    },
    {
      name: "Dedicated Phone Support",
      isEnabled: false
    },
    {
      name: "Free Subdomain",
      isEnabled: false
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
          Free
        </h5>
        <h6 className="card-price text-center">
          $0<span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
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
