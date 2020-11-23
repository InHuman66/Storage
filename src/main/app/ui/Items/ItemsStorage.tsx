import React from 'react';
import classes from "./ItemsStorage.module.css";
import Sidebar from "../Sidebar/Sidebar";
import {ItemType} from "../../bll/Reducers/app-reducer";

type PropsTypeItem ={
    name:string
    value:number
    nameStorage: string
    container: string
}

type PropsType ={
    items: Array<ItemType>
}
const Item: React.FC<PropsTypeItem>= (props) => {
    return (
        <div className={classes.item_module}>
            <div className={classes.item_info}>
                <div className={classes.name_item}>
                    <p>{props.name}</p>
                </div>
                <div>
                    <p>Кількість: {props.value}</p>
                </div>
                <div>
                    <p>Упаковка: {props.container}</p>
                </div>
                <div>
                    <p>Знаходится в: {props.nameStorage}</p>
                </div>
            </div>
        </div>
    );
}

const ItemsStorage: React.FC<PropsType>= (props) => {
    return (
        <div className={classes.block_items}>
            {props.items.map(item=><Item name={item.name} value={item.value} nameStorage={item.storageName} container={item.container}/>)}
        </div>
    );
}
export default ItemsStorage;