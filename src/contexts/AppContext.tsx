import React, {createContext, useContext} from "react";
import {reducer} from "../reducers/AppReducer";
import {actions} from "../reducers/AppReducerActions";
import axios from "axios";

const reqFormat = {
    data: [],
    page: 1,
    limit:50,
    offset: 0,
    totalDocs: 0,
    totalPages: 0
}
export const initialValue = {
    launches: {...reqFormat},
    rockets: {...reqFormat},
    isLaunchLoading:false,
    isRocketsLoading:false,
    getLaunches: (data:Object) => {},
    getRockets: (data:Object) => {},
};

export const AppContext = createContext(initialValue);

export const Provider = ({children}: any) => {
    const initialState = useContext(AppContext)
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const value = {
        ...state,
        getLaunches:(data:object)=>{
            dispatch({
                type: actions.SET_KEY,
                payload: {key:'isLaunchLoading', value:true}
            })
            axios.post("https://api.spacexdata.com/v4/launches/query",data).then(res=>{
               dispatch({
                   type:actions.SET_LAUNCHES,
                   payload:res.data
               })
            }).catch(error=>{
                console.log('error', error);
            }).finally(()=>{
                dispatch({
                    type: actions.SET_KEY,
                    payload: {key: 'isLaunchLoading', value: false}
                })
            })
        },
        getRockets:(data:object)=>{
            dispatch({
                type: actions.SET_KEY,
                payload: {key:'isRocketsLoading', value:true}
            })
            axios.post("https://api.spacexdata.com/v4/rockets/query",data).then(res=>{
               dispatch({
                   type:actions.SET_ROCKETS,
                   payload:res.data
               })
            }).catch(error=>{
                console.log('error', error);
            }).finally(()=>{
                dispatch({
                    type: actions.SET_KEY,
                    payload: {key: 'isRocketsLoading', value: false}
                })
            })
        },
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
