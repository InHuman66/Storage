import React from 'react';
import classes from "./Home.module.css";
import Sidebar from "../Sidebar/Sidebar";
import ItemsStorage from "../Items/ItemsStorage";
import {useSelector} from "react-redux";
import { AppRootStateType } from '../../bll/redux';
import { ItemType } from '../../bll/Reducers/app-reducer';





const Home= () => {
    const items = useSelector<AppRootStateType, Array<ItemType> >(state => state.appReducer.storageItems)
    return (
        <div className={' container'}>
            <div className={classes.wrapper_content}>
                <div className={' row'}>
                    <div className={'col col-md-4'}>
                        <Sidebar/>
                    </div>
                    <div className={'col col-md-8'}>
                        <ItemsStorage items={items}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;