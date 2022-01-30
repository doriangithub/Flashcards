import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSet } from "../../actions/sets";
import  './FormFindFlashcards.css';

export class FormFindFlashcards extends Component {

    componentDidMount(){
        //this.forceUpdate(); 
        console.log("componentDidMount in FormFindFlashcards")
    }

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
        console.log("render FormFindFlashcards")
        const { name } = this.state;
        return(
            <div className="block__find__flashcard">
                <div className="block__title__center">Find flashcards</div>
                <div id="block__search">
                    <form className="form__find__flashcards" onSubmit={this.onSubmit}>
                            <input 
                                type="search"
                                placeholder="Type subject or keywords"
                                name="setName"
                                onChange={this.onChange}
                                value={name}
                            />
                            <input type="submit" value="SEARCH"/>
                    </form>
                </div>                    
            </div>
        )
    }
}

export default connect(null, {addSet})(FormFindFlashcards);