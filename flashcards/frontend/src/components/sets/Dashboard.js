import React, {Fragment} from "react";
import FormCreateNewFlashcardSet from "./Create/FormCreateNewFlashcardSet";
import Sets from "./Sets";

export default function Dashboard(){
    return(
        <Fragment>
            <div className="block__row">
                <div className="block__row1__column1">
                    <FormCreateNewFlashcardSet/>
                </div>
            </div>
            <Sets/>
        </Fragment>
    )
}