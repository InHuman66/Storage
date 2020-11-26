import React, {useEffect, useState} from 'react';
import classes from "./ListStoreges.module.css";
import ItemStorage from "./ItemStorage/ItemStoreges";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/redux";
import { StoragesNameType} from "../../../bll/Reducers/app-reducer";





const ListStoreges= () => {
    const storagesName = useSelector<AppRootStateType, Array<StoragesNameType> >(state => state.appReducer.storageNames)
    let [stateName, setStateName]=useState(storagesName)
    let [firstName, setFirstName]=useState({name: 'All', id:'0'})

    let filterName = stateName.filter(t => t.id != firstName.id)

    let [dropDownState, setDropDownState]=useState(false)

    let onClickDropDown =()=>{
        if (!dropDownState){
            setDropDownState(true)
        }else {
            setDropDownState(false)
        }
        console.log(dropDownState)
    }
    let styleForDropDown = classes.listNames

    if (dropDownState){
        styleForDropDown = classes.listNamesVisab
    }
    let onClickSelectStorage =(id: string)=>{
        let number =()=>{
            let resolt = storagesName.find( (elem:StoragesNameType )=> elem.id === id)
            if (resolt != undefined){
                return resolt
            }else {
                return  firstName
            }
        }
        setFirstName(number)
        onClickDropDown()
    }
    useEffect(() => {
        let number =()=>{
            let resolt = storagesName.find( (elem:StoragesNameType )=> elem.name === 'All')
            if (resolt != undefined){
                return resolt
            }else {
                return  storagesName[0]
            }
        }
        setFirstName(number)
    }, [])
    return (
        <div>
            <div className={classes.block_Setting}>
                <div>
                    <div className={classes.blockNames}>
                        <ItemStorage onClickFunc={onClickSelectStorage} style={true}  name={firstName.name} id={firstName.id}/>
                        <div className={styleForDropDown}>
                            {filterName.map(elem=><ItemStorage onClickFunc={onClickSelectStorage} name={elem.name} id={elem.id} style={false} />)}
                        </div>
                    </div>
                </div>
                <div className={classes.buttonSlide}>
                    <button onClick={()=>{onClickDropDown()}}><i className={"fas fa-chevron-down"}></i></button>
                </div>
                <div className={classes.addStorage}>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
}

export default ListStoreges;