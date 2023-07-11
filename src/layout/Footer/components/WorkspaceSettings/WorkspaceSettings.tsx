import "./WorkspaceSettings.scss";
import memebers from "../../../../assets/icons/user.svg";
import table from "../../../../assets/icons/table.svg";
import calendar from "../../../../assets/icons/calendar.svg";
import settings from "../../../../assets/icons/settings.svg";

export const WorkspaceSettings = () => {
   return (
      <div className="workspace-settings">
         <button className="workspace-settings__button">
            <img
               src={memebers}
               alt="members"
               className="workspace-settings__button-image"
            />
         </button>
         <button className="workspace-settings__button">
            <img
               src={table}
               alt="members"
               className="workspace-settings__button-image"
            />
         </button>
         <button className="workspace-settings__button">
            <img
               src={calendar}
               alt="members"
               className="workspace-settings__button-image"
            />
         </button>
         <button className="workspace-settings__button">
            <img
               src={settings}
               alt="members"
               className="workspace-settings__button-image"
            />
         </button>
      </div>
   );
};
