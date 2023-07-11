import { useEffect, useState } from 'react'
import { NavbarItemProps } from './NavbarItem.props';
import './NavbarItem.scss'


export const NavbarItem = ({ children, icon, isIcon, text }: NavbarItemProps) => {

   const [open, setOpen] = useState<boolean>(false);

   useEffect(() => {

      const handler = (event: MouseEvent) => {
         if (event.target) {
            setOpen(false);
         }
      }

      document.addEventListener("mousedown", handler);
   });

   return (
      <li className="navbar-item" onClick={() => setOpen(true)}>
         {
            isIcon 
            && 
            <div className="navbar-item__icon-box">
               { icon }
            </div>
         }

         <span className="navbar-item__text">
            { text }
         </span>
         
         { open && children}
      </li>
   )
}
