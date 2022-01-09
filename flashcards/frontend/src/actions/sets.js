import axios from 'axios';
import { GET_SETS, DELETE_SET, ADD_SET } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

// GET CARDS SETS
export const getSets=()=>(dispatch, getState)=>{
    axios
        .get("/api/sets/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SETS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE SET
export const deleteSet=id=>(dispatch, getState)=>{
    axios
        .delete(`/api/sets/${id}/`, tokenConfig(getState))
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
export const addSet=set=>(dispatch, getState)=>{
    axios
        .post("/api/sets/", set, tokenConfig(getState))
        .then(res=>{
            dispatch(createMessage({addSet:"Set Added"}));
            dispatch({
                type: ADD_SET,
             payload: res.data
            });
         })
        .catch(err=>dispatch(returnErrors(err.response.data, err.response.status)));
};

