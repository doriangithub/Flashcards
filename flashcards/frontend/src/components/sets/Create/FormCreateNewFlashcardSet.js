import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSet } from "../../../actions/sets";
import  './FormCreateNewFlashcardSet.css';

export class FormCreateNewFlashcardSet extends Component {

    componentDidMount(){
        //this.forceUpdate(); 
        console.log("----componentDidMount in FORM")
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
        console.log("render Form");
        const { name } = this.state;
        return(
            <div className="block__description__flashcard">
                <div className="block__title__center">Create a New Flashcard Set</div>
                <form className="form__create__new__set" onSubmit={this.onSubmit}>
                    <div className="description__item__conteiner">
                        <div className="description__row__column1">
                            <label className="labels__create__form">Set's Title</label>
                        </div>
                        <div className="description__row__column2">
                            <input 
                                type="setDescription"
                                name="setTitle"
                                onChange={this.onChange}
                                value={name}
                            />
                        </div>
                    </div>
                    <div className="description__item__conteiner">
                        <div className="description__row__column1">
                            <label className="labels__create__form">Subjects (comma separated)</label>
                        </div>
                        <div className="description__row__column2">
                            <input 
                                type="setDescription"
                                name="setSubject"
                                onChange={this.onChange}
                                value={name}
                            /> 
                        </div>
                    </div>
                    <div className="description__item__conteiner">
                        <div className="description__row__column1">
                            <label className="labels__create__form">Access</label>
                        </div>
                        <div className="description__row__column2">
                            <div className="description__radio__conteiner">
                                <input type="radio" id="html" name="fav_language" value="HTML"/>
                                <label className="labels__radio__form">Public</label>
                                <span>&emsp;&emsp;</span>
                                <input type="radio" id="css" name="fav_language" value="CSS"/>
                                <label className="labels__radio__form">Private</label> 
                            </div>
                        </div>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default connect(null, {addSet})(FormCreateNewFlashcardSet);