import {
    IS_SEARCH,
    IS_SEARCH_KEY,
    SEARCH_FILTER_BK_END_DATE,
    SEARCH_FILTER_BK_END_MONTH,
    SEARCH_FILTER_BK_FAC_BTYPE, SEARCH_FILTER_BK_FAC_CANTEEN, SEARCH_FILTER_BK_FAC_RTYPE,
    SEARCH_FILTER_BK_FAC_TOILET, SEARCH_FILTER_BK_FAC_WIFI,
    SEARCH_FILTER_BK_MAX_HARGA,
    SEARCH_FILTER_BK_MIN_HARGA,
    SEARCH_FILTER_BK_OPT_LATLONG,
    SEARCH_FILTER_BK_OPT_LOC,
    SEARCH_FILTER_BK_OPT_LOC_NAME,
    SEARCH_FILTER_BK_START_DATE,
    SEARCH_FILTER_BK_START_MONTH
} from "../../types/search";

const initialState = {
    search:{
        is_search:false,
        params:"",
        key:"",
        filter:{
            booking:{
                min_harga:0,
                max_harga:1000000,
                date:{
                    start_date: '',
                    start_month:"",
                    end_date:"",
                    end_month:""
                },
                location:{
                    is_location:false,
                    opt_loc_name:"default",
                    opt_location:"default",
                    long:"",
                    lat:""
                },
                fasilitas:{
                    toilet:false,
                    bed_type:"",
                    room_type:"",
                    wifi:false,
                    canteen:false,
                }
            },
            ticket:{
                min_harga:0,
                max_harga:1000000,
                location:{
                    is_location:false,
                    opt_loc_name:"default",
                    opt_location:"",
                    long:"",
                    lat:""
                },
                fasilitas:{
                    toilet:false,
                    wifi:false,
                    canteen:false,
                    lounge:false
                },
                type:{
                    is_type:false,
                    opt_type: "default"
                }
            }
        }
    }
}

export default function(state = initialState, action){
    let {type, payload} = action
    switch(type){
        case IS_SEARCH:
            return{
                ...state,
                search:{
                    ...state.search,
                    is_search: true,
                    params:payload
                }
            }
        case IS_SEARCH_KEY:
            return{
                ...state,
                search:{
                    ...state.search,
                    key: payload.key
                }
            }
        case SEARCH_FILTER_BK_MIN_HARGA:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter: {
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            min_harga: payload
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_MAX_HARGA:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter: {
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            max_harga: payload
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_START_DATE:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            date: {
                                ...state.search.filter.booking.date,
                                start_date: payload
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_START_MONTH:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            date: {
                                ...state.search.filter.booking.date,
                                start_month: payload
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_END_DATE:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            date: {
                                ...state.search.filter.booking.date,
                                end_date: payload
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_END_MONTH:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            date: {
                                ...state.search.filter.booking.date,
                                end_month: payload
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_OPT_LOC:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            location: {
                                ...state.search.filter.booking.location,
                                is_location: !state.search.filter.booking.location.is_location,
                                opt_location:payload,
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_OPT_LOC_NAME:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            location: {
                                ...state.search.filter.booking.location,
                                opt_loc_name:payload,
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_OPT_LATLONG:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            location: {
                                ...state.search.filter.booking.location,
                                long:payload.long,
                                lat:payload.lat
                            }
                        }
                    }

                }
            }
        case SEARCH_FILTER_BK_FAC_TOILET:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking:{
                            ...state.search.filter.booking,
                            fasilitas: {
                                ...state.search.filter.booking.fasilitas,
                                toilet: !state.search.filter.booking.fasilitas.toilet
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_FAC_BTYPE:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking: {
                            ...state.search.filter.booking,
                            fasilitas: {
                                ...state.search.filter.booking.fasilitas,
                                bed_type: payload
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_FAC_RTYPE:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking: {
                            ...state.search.filter.booking,
                            fasilitas: {
                                ...state.search.filter.booking.fasilitas,
                                room_type: payload
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_FAC_WIFI:
            return{
                ...state,
                search:{
                    ...state.search,
                    filter: {
                        ...state.search.filter,
                        booking: {
                            ...state.search.filter.booking,
                            fasilitas: {
                                ...state.search.filter.booking.fasilitas,
                                wifi: !state.search.filter.booking.fasilitas.wifi
                            }
                        }
                    }
                }
            }
        case SEARCH_FILTER_BK_FAC_CANTEEN:
            return{
                ...state,
                search: {
                    ...state.search,
                    filter:{
                        ...state.search.filter,
                        booking: {
                            ...state.search.filter.booking,
                            fasilitas: {
                                ...state.search.filter.booking.fasilitas,
                                canteen: !state.search.filter.booking.fasilitas.canteen
                            }
                        }
                    }
                }
            }
        default:
            return state;

    }
}