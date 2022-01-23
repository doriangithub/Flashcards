import React, {Fragment} from "react";
import Form from "./Form";
import Sets from "./Sets";

export default function Dashboard(){
    return(
        <Fragment>
            <div className="block__row">
                <div className="block__row1__column1">
                    <Form/>
                </div>
            </div>
            <Sets/>
        </Fragment>
    )
}