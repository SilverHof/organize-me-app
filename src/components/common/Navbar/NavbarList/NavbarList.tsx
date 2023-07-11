import { NavbarListProps } from './NavbarList.props'
import './NavbarList.scss'


export const NavbarList = ({ children }: NavbarListProps) => {
   return (
      <nav className="navbar">
         <ul className="navbar__list">
            {children}
         </ul>
      </nav>
   )
}
