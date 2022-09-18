import React from "react";
import { MenuItems } from "./MenuItems";
import "./Nav.css"

export default function Navbar() {
   return (
            <nav className="NavbarItems">
            <img className="Navbar-logo" src="logo512.png" alt="LOGO" width="98px" heigth="121px"></img>
            <ul>
                {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                    <item.etiqueta className={item.cName} href={item.url}>
                        {item.Title}
                    </item.etiqueta>
                    </li>
                );
                })}
            </ul>
            </nav>
        );
}