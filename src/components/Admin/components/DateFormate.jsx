import moment from "moment";
import PropTypes from "prop-types";


function DateFormate({data}) {
    return (

        <div>
            {moment(data).format("DD MMM YYYY")}

        </div>
    );
}

DateFormate.propTypes = {
    data: PropTypes.string.isRequired, // Ensures datarole is a required string
};
export default DateFormate;