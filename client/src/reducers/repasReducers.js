export const getAllRepasReducer = (state = { repasarr: [] }, action) => {
    switch (action.type) {
        case 'GET_REPAS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_REPAS_SUCCESS': return {
            loading: false,
            repasarr: action.payload
        }
        case 'GET_REPAS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}


export const addRepasReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_REPAS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'ADD_REPAS_SUCCESS': return {
            loading: false,
            success: true,
        }
        case 'ADD_REPAS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}

export const getRepasByIdReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_REPASBYID_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_REPASBYID_SUCCESS': return {
            loading: false,
            repas: action.payload
        }
        case 'GET_REPASBYID_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}



export const editRepasReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_REPAS_REQUEST': return {
            editloading: true,
            ...state
        }
        case 'EDIT_REPAS_SUCCESS': return {
            editloading: false,
            editsuccess: true,
        }
        case 'EDIT_REPAS_FAILED': return {
            editerror: action.payload,
            editloading: false
        }
        default: return state
    }

}