const initialState = {
    opt_direction: "ltr",
    opt_themes: "theme-light",
    opt_sidebar: {
        is_browser:{
            is_visibility: false
        },
        is_mobile:{
            is_visibility: true
        }
    }
}

export default function(state = initialState, action){
    let {type,payload} = action
    switch (type){
        case "opt_direction":
            return{
                ...state,
                opt_direction: payload
            }

        default:
            return state
    }
}