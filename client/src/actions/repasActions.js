import axios from "axios";

export const getAllRepas = () => async dispatch => {
    dispatch({ type: 'GET_REPAS_REQUEST' })
    try {
        const response = await axios.get('/api/repas/getallrepas')
        console.log(response);
        dispatch({ type: 'GET_REPAS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_REPAS_FAILED', payload: error })

    }

}

export const filterRepas = (searchkey, categorie) => async dispatch => {


    dispatch({ type: 'GET_REPAS_REQUEST' })

    try {
        var filteredRepas;
        const response = await axios.get('/api/repas/getallrepas')
        filteredRepas = response.data.filter(repas => repas.nom.toLowerCase().includes(searchkey))

        if (categorie !== 'all') {
            filteredRepas = response.data.filter(repas => repas.categorie === categorie)

        }
        dispatch({ type: 'GET_REPAS_SUCCESS', payload: filteredRepas })
    } catch (error) {
        dispatch({ type: 'GET_REPAS_FAILED', payload: error })
        console.log(error)
    }

}

export const addRepas = (repas) => async dispatch => {
    dispatch({ type: 'ADD_REPAS_REQUEST' })
    try {
        const response = await axios.post('/api/repas/addrepas', { repas })
        console.log(response);
        dispatch({ type: 'ADD_REPAS_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'ADD_REPAS_FAILED', payload: error })
    }
}

export const getRepasById = (repasid) => async dispatch => {

    dispatch({ type: 'GET_REPASBYID_REQUEST' })

    try {
        const response = await axios.post('/api/repas/getrepasbyid', { repasid })
        console.log(response);
        dispatch({ type: 'GET_REPASBYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_REPASBYID_FAILED', payload: error })
    }

}



export const editRepas = (editedrepas) => async dispatch => {
    dispatch({ type: 'EDIT_REPAS_REQUEST' })
    try {
        const response = await axios.post('/api/repas/editrepas', { editedrepas })
        console.log(response);
        dispatch({ type: 'EDIT_REPAS_SUCCESS' })
        window.location.href = '/admin/repaslist'

    } catch (error) {
        dispatch({ type: 'EDIT_REPAS_FAILED', payload: error })
    }

}

export const deleteRepas = (repasid) => async dispatch => {
    try {
        const response = await axios.post('/api/repas/deleterepas', { repasid })
        alert('Repas supprimé avec succès')
        console.log(response);
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }
}