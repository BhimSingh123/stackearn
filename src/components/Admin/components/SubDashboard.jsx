import { Link } from "react-router-dom";
import Header from "./Header";
import PropTypes from "prop-types";

function SubDashboard({title}) {
    return (<>

        <Header />

        <div className="breadcrumb-bar breadcrumb-bar-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <div className="breadcrumb-list">
                            <h2 className="breadcrumb-title">Dashboard</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/admin/admin-dashboard">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                      {title}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div></>);

}
SubDashboard.propTypes = {
    title: PropTypes.string.isRequired, // Ensures datarole is a required string
  };

export default SubDashboard;