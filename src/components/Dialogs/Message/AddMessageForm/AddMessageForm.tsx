import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

export type FormDataType = {
    message: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"message"} placeholder={'enter text!'} validate={[required, maxLength50]}/>
            <button>Add message</button>
        </form>
    )
}


export const AddMessageReduxForm = reduxForm<FormDataType>({form: "message"})(AddMessageForm)