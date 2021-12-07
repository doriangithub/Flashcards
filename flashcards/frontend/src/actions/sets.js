import axios from 'axios';
import { GET_SETS } from './types';

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
