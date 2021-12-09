import axios from 'axios';
import { GET_SETS, DELETE_SET } from './types';

// GET CARDS SETS
export const getSets = () => dispatch => {
    axios.get("/api/sets")
    .then(res => {
        dispatch({
            type: GET_SETS,
            payload: res.data
        });
    })
    .catch(err => console.Consolelog(err));
};

// DELETE SET
export const deleteSet=id=>dispatch=>{
    axios
    .delete(`/api/sets/${id}/`)
    .then(res=>{
        dispatch({
            type: DELETE_SET,
            payload: id
        });
    })
    .catch(err=>console.log(err));
};
