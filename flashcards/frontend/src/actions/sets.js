import axios from 'axios';
import { GET_SETS, DELETE_SET, ADD_SET, GET_ERRORS } from './types';
import { createMessage } from './messages';

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
        dispatch(createMessage({deleteSet: "Set Deleted"}));
        dispatch({
            type: DELETE_SET,
            payload: id
        });
    })
    .catch(err=>console.log(err));
};

// ADD SET
export const addSet=set=>dispatch=>{
    axios
    .post("/api/sets/", set)
    .then(res=>{
        dispatch(createMessage({addSet:"Set Added"}));
        dispatch({
            type: ADD_SET,
            payload: res.data
        });
    })
    .catch(err=>{
        const errors = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
    });
};