import React, { Component } from "react";
import './FormButtonToCreateFlashcards.css';

export class CreateFlashcards extends Component{
    render(){
        return(
            <div className="block__create__flashcard">
                <div className="block__title__center">Create flashcards</div>
                <div id="block__search">
                    <button id="create_yours">CREATE YOURS</button>                    
                </div>
            </div>
        )
    }
}

export default CreateFlashcards;