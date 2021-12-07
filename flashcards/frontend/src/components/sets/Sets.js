import React, {Component} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSets } from "../../actions/sets";
import { Fragment } from 'react';

export class Sets extends Component {
    static propTypes = {
        sets: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.props.getSets();
    }

    render(){
        return(
            <Fragment>
                <h1>Cards Sets List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Cretaed</th>
                            <th/>
                        </tr>

                    </thead>
                    <tbody>
                        {this.props.sets.map(set=>(
                            <tr key={set.id}>
                                <td>{set.id}</td>
                                <td>{set.setName}</td>
                                <td>{set.created_at}</td>
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

export default connect(mapStateToProps, {getSets})(Sets);