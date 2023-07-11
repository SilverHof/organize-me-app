import "./Navigation.scss";
import { CustomNavLink } from "./components/CustomNavLink/CustomNavLink";
import homeIcon from "../../../../assets/icons/sidebar-icons/home.svg";
import statisticsIcon from "../../../../assets/icons/sidebar-icons/statistics.svg";
import emailIcon from "../../../../assets/icons/sidebar-icons/email.svg";
import messengerIcon from "../../../../assets/icons/sidebar-icons/messenger.svg";
import teamsIcon from "../../../../assets/icons/sidebar-icons/teams.svg";
import projectsIcon from "../../../../assets/icons/sidebar-icons/projects.svg";
import calendarIcon from "../../../../assets/icons/sidebar-icons/calendar.svg";
import tasksIcon from "../../../../assets/icons/sidebar-icons/tasks.svg";
import documentsIcon from "../../../../assets/icons/sidebar-icons/documents.svg";
import tablesIcon from "../../../../assets/icons/sidebar-icons/tables.svg";
import notesIcon from "../../../../assets/icons/sidebar-icons/notes.svg";
import trashIcon from "../../../../assets/icons/sidebar-icons/trash.svg";
import settingsIcon from "../../../../assets/icons/sidebar-icons/settings.svg";
import { NavigationProps } from "./Navigation.props";

export const Navigation = ({ isFullSidebar }: NavigationProps) => {
   return (
      <nav className="navigation">
         <ul className="navigation__links">
            <CustomNavLink
               to="/home"
               text="Home"
               icon={homeIcon}
               isFullSidebar={isFullSidebar}
            />
            <CustomNavLink
               to="/email"
               text="Email"
               icon={emailIcon}
               isFullSidebar={isFullSidebar}
            />
            <CustomNavLink
               to="/documents"
               text="Documents"
               icon={documentsIcon}
               isFullSidebar={isFullSidebar}
            />
            <CustomNavLink
               to="/tasks"
               text="Kanban"
               icon={tasksIcon}
               isFullSidebar={isFullSidebar}
            />
            <CustomNavLink
               to="/calendar"
               text="Calendar"
               icon={calendarIcon}
               isFullSidebar={isFullSidebar}
            />
            <CustomNavLink
               to="/notes"
               text="Notes"
               icon={notesIcon}
               isFullSidebar={isFullSidebar}
            />
            <CustomNavLink
               to="/tables"
               text="Tables"
               icon={tablesIcon}
               isFullSidebar={isFullSidebar}
            />
            {/* <CustomNavLink
               to="/messenger"
               text="Messenger"
               icon={messengerIcon}
               isFullSidebar={isFullSidebar}
            /> */}
         </ul>
         <div className="navigation__decor"></div>
         <ul className="navigation__links">
            <CustomNavLink
               to="/projects"
               text="Projects"
               icon={projectsIcon}
               isFullSidebar={isFullSidebar}
            />
            <CustomNavLink
               to="/teams"
               text="Teams"
               icon={teamsIcon}
               isFullSidebar={isFullSidebar}
            />
            <CustomNavLink
               to="/statistics"
               text="Statistics"
               icon={statisticsIcon}
               isFullSidebar={isFullSidebar}
            />
         </ul>
         <div className="navigation__empty-block"></div>
         <ul className="navigation__links">
            <CustomNavLink
               to="/trash"
               text="Trash"
               icon={trashIcon}
               isFullSidebar={isFullSidebar}
            />
            <CustomNavLink
               to="/settings"
               text="Settings"
               icon={settingsIcon}
               isFullSidebar={isFullSidebar}
            />
         </ul>
      </nav>
   );
};
