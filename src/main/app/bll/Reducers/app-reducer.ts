import { Dispatch } from "redux"


export type ItemType ={
    storageName: string
    name: string
    value: number
    container: string
    criticalValuePro: number
    price: number
}

const initialState = {
    storageNames:[
        {name: "Garage"},
        {name: "Left side"},
        {name: "Down"}
    ],
    storageItems:[
        {storageName: "Garage" , name:"A4 paper", value: 25, container:'шт.', criticalValuePro: 12, price: 12.50},
        {storageName: "Garage" , name:"Ges book", value: 40, container:'шт.', criticalValuePro: 12, price: 12.50},
        {storageName: "Garage" , name:"Pen", value: 25, container:'пач.', criticalValuePro: 12, price: 12.50},
    ]



}
type ActionsType = any
type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case '':
            return {...state}
        default:
            return state
    }
}
export const exampleAC = (error: string | null) => ({ type: '', error } as const)

export const exampleTC = () => (dispatch: Dispatch) => {

}
