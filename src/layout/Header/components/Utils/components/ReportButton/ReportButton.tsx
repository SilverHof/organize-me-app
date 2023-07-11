import "./ReportButton.scss";
import reportIcon from "../../../../../../assets/icons/header-icons/reportBlack.svg";

export const ReportButton = () => {
   return (
      <button className="report-button">
         <img
            src={reportIcon}
            alt=""
            className="report-button__image"
         />
      </button>
   );
};
