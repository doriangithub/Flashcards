import React, {Component} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSets, deleteSet } from "../../actions/sets";
import { Fragment } from 'react';
import './Sets.css';

export class Sets extends Component {
    static propTypes = {
        sets: PropTypes.array.isRequired,
        getSets: PropTypes.func.isRequired,
        deleteSet: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getSets();
    }

    render(){
        console.log("----render Sets")
        return(
            <Fragment>
                <h1>Cards Sets List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Created</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.sets.map(set=>(
                            <tr key={set.id}>
                                <td>{set.id}</td>
                                <td>{set.setName}</td>
                                <td>{set.created_at}</td>
                                <td>
                                    <button onClick={this.props.deleteSet.bind(this, set.id)}
                                        className="btn__delete">DELETE</button>
                                </td>
                            </tr>      
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state=>({
    sets: state.sets.sets
});

export default connect(mapStateToProps, {getSets, deleteSet})(Sets);