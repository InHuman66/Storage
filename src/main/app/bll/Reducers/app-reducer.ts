import { Dispatch } from "redux"


export type ItemType ={
    storageName: string
    name: string
    value: number
    container: string
    criticalValuePro: number
    price: number
}
export type  StoragesNameType ={
        name:string
        id: string
}
const initialState = {
    storageNames:[
        {name: "Garage", id:'1'},
        {name: "Left side" , id:'2'},
        {name: "Down" , id:'3'},
        {name: 'All', id: '4'}
    ],
    storageItems:[
        {storageName: "Garage" , name:"A4 paper", value: 25, container:'шт.', criticalValuePro: 12, price: 12.50},
        {storageName: "Ander" , name:"Ges book", value: 40, container:'шт.', criticalValuePro: 12, price: 12.50},
        {storageName: "Kitchen" , name:"Pen", value: 25, container:'пач.', criticalValuePro: 12, price: 12.50},
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
