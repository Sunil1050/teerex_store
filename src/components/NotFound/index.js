import {Link} from "react-router-dom"
import "./index.css";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
                alt="not found"
                className="not-found-img"
            />
            <h3 className="mt-2 mb-2">Oops..!! Your requested page was not found</h3>
            <Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link>
        </div>
    )
}
export default NotFound;