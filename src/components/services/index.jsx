import { Footer3 } from "../footer3";
import Header from "../header";

function Index() {
    return (<>
        <div className="main-wrapper">

            <Header />

            <div className="breadcrumb-bar breadcrumb-bar-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <div className="breadcrumb-list">
                                    <h2 className="breadcrumb-title">My Profile</h2>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a to="/home">Home</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                My Profile
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <Footer3 />
        </div>
    </>);
}

export default Index;