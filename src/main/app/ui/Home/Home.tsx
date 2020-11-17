import React from 'react';
import classes from "./Home.module.css";
import Sidebar from "../Sidebar/Sidebar";





const Home= () => {
    return (
        <div className={' container'}>
            <div className={classes.wrapper_content}>
                <div className={' row'}>
                    <div className={'col col-md-4'}>
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;