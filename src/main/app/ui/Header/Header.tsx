import React from 'react';
import classes from "./Header.module.css";
import Sidebar from "../Sidebar/Sidebar";





const Header= () => {
    return (
        <div className={' container'}>
                <div className={classes.wrapper_content}>
                    <Sidebar/>
                </div>
        </div>
    );
}
export default Header;