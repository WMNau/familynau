import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => (
  <>
    <Link to="/dashboard" title="Family Nau" aria-label="Family Nau">
      <h1>Family Nau</h1>
    </Link>
  </>
);

export const ConnectedNavigation = connect(state => state)(Navigation);
