import React, {useState} from 'react';
import classes from "./ListStoreges.module.css";
import ItemStorage from "./ItemStorage/ItemStoreges";





const ListStoreges= () => {
    let [stateName, setStateName]=useState([
        {name: 'loki', id: 1},
        {name: 'Joker', id: 2},
        {name: 'Pzdc', id: 3},
        {name: 'Dota', id: 4},
        ])
    let [firstName, setFirstName]=useState({name: 'Loki', id:1})

    let filterName = stateName.filter(t => t.id != firstName.id)

    let [dropDownState, setDropDownState]=useState(false)

    let onClickDropDown =()=>{
        if (dropDownState === false){
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
    return (
        <div>
            <div className={classes.block_Setting}>
                <div>
                    <div className={classes.blockNames}>
                        <ItemStorage style={true}  name={firstName.name} id={firstName.id}/>
                        <div className={styleForDropDown}>
                            {filterName.map(elem=><ItemStorage name={elem.name} id={elem.id} style={false} />)}
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