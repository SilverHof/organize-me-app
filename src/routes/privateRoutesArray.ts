import { ROUTE_PATH } from './../ts/emuns/ROUTE_PATH';
import { CalendarPage } from "../pages/CalendarPage/CalendarPage";
import { TasksPage } from "../pages/TasksPage/TasksPage";
import { TablePage } from "../pages/TablePage/TablePage";
import { StatisticsPage } from "../pages/StatisticsPage/StatisticsPage";
import { DocumentsPage } from "../pages/DocumentsPage/DocumentsPage";
import { TeamsPage } from "../pages/TeamsPage/TeamsPage";
import { SettingsPage } from "../pages/SettingsPage/SettingsPage";
import { RouteType } from "../ts/types/RouteType";
import { NotesPage } from "../pages/NotesPage/NotesPage";
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage';
import { EmailPage } from '../pages/EmailPage/EmailPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { TrashPage } from '../pages/TrashPage/TrashPage';
import { MessengerPage } from '../pages/MessengerPage/MessengerPage';

export const privateRoutesArray: RouteType[] = [
   {
      path: ROUTE_PATH.HOME,
      Component: HomePage,
   },
   {
      path: ROUTE_PATH.EMAIL,
      Component: EmailPage,
   },
   {
      path: ROUTE_PATH.STATISTICS,
      Component: StatisticsPage,
   },
   {
      path: ROUTE_PATH.PROJECTS,
      Component: ProjectsPage,
   },
   {
      path: ROUTE_PATH.CALENDAR,
      Component: CalendarPage,
   },
   {
      path: ROUTE_PATH.TASKS,
      Component: TasksPage
   },
   {
      path: ROUTE_PATH.TABLES,
      Component: TablePage,
   },
   {
      path: ROUTE_PATH.NOTES,
      Component: NotesPage,
   },
   {
      path: ROUTE_PATH.DOCUMENTS,
      Component: DocumentsPage
   },
   {
      path: ROUTE_PATH.TEAMS,
      Component: TeamsPage,
   },
   {
      path: ROUTE_PATH.TRASH,
      Component: TrashPage,
   },
   {
      path: ROUTE_PATH.SETTINGS,
      Component: SettingsPage,
   },
   {
      path: ROUTE_PATH.MESSENGER,
      Component: MessengerPage,
   }
]