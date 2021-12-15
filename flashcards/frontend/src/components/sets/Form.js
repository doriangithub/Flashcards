import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSet } from "../../actions/sets";

export class Form extends Component {

    state = {
        setName: ""
    };

    static propTypes = {
        addSet: PropTypes.func.isRequired,
    };

    onChange=e=>{
        this.setState({ [e.target.name]:e.target.value });
        console.log(this.state);
    }

    onSubmit=e=>{
        e.preventDefault();
        const { setName } = this.state;
        const newSet={ setName };
        this.props.addSet(newSet);
        this.setState({
            setName: ""
        });
    }

    render(){
        const { name } = this.state;
        return(
            <div>
                <h1>Add Sets Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="setName"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="fprm-group">
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addSet})(Form);