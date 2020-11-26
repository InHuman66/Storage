import React from 'react';
import classes from "./ItemStoreges.module.css";

type TypeProps ={
    name: string
    id: string
    style: boolean,
    onClickFunc: (id:string)=>void
}

const ItemStorage:React.FC<TypeProps>= (props) => {
    let styleForBack = classes.item_wrapper
    let onClick = props.onClickFunc
    if (props.style){
        styleForBack= classes.item_wrapper_dark
        onClick = ()=>{}
    }
    return (
        <div onClick={()=>{onClick(props.id)}} key={props.id} className={styleForBack}>
            <p>{props.name}</p>
        </div>
    );
}



export default ItemStorage;