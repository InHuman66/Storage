import React from 'react';
import classes from "./ItemStoreges.module.css";

type TypeProps ={
    name: string
    id: number
    style: boolean
}

const ItemStorage:React.FC<TypeProps>= (props) => {
    let styleForBack = classes.item_wrapper
    if (props.style){
        styleForBack= classes.item_wrapper_dark
    }
    return (
        <div key={props.id} className={styleForBack}>
            <p>{props.name}</p>
        </div>
    );
}



export default ItemStorage;