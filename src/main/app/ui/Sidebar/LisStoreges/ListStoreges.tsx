import React, {useState} from 'react';
import classes from "./ListStoreges.module.css";
import ItemStorage from "./ItemStorage/ItemStoreges";





const ListStoreges= () => {

    let [stateName, setNameStorage]=useState([
        {name: 'loki', id: 21}
        ])
    return (
        <div>
            <div className={classes.block_Setting}>
                <ItemStorage/>
                <div className={classes.buttonSlide}>
                    <button><i className={"fas fa-chevron-down"}></i></button>
                </div>
                <div className={classes.addStorage}>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
}

export default ListStoreges;