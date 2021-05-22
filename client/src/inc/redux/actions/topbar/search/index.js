import {IS_SEARCH} from "../../../../types/search";

export const LiveSearch = (query)=> async dispatch => {
    dispatch({
        type:IS_SEARCH,
        payload:query
    })
}

