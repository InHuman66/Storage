import React from 'react';
import classes from "./Sidebar.module.css";
import ListStoreges from "./LisStoreges/ListStoreges";



const Sidebar= () => {
    return (
        <div className={classes.block_sidebar}>
            <ListStoreges/>
        </div>
    );
}
export default Sidebar;