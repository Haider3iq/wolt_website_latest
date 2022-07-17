
import { Link } from "react-router-dom";
import "../../css/searchComponent.css"

export default function () {

    return(
          <div className="customSearchComponent">

            <input
              type="text"
              className="textInput"
              placeholder="Search here..."
            />
           
                <Link to="#">
                  <i className="flaticon-381-search-2" />
                </Link>
         
          </div>

    )
}