import {actions} from "./AppReducerActions"

//Reducer to Handle Actions
export const reducer = (state: any, {type,payload}: any) => {
    switch (type) {
        case actions.SET_LAUNCHES:
            return {
                ...state,
                launches:{
                    data:[...state.launches.data,...payload.docs],
                    ...payload
                }
            };
        case actions.SET_ROCKETS:
            return {
                ...state,
                rockets:{
                    data: [...state.rockets.data, ...payload.docs],
                    ...payload
                }
            };
        case actions.SET_KEY:
            return {
                ...state,
                [payload.key]:payload.value
            };
        default:
            return state;
    }
};
