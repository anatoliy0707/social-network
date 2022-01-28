import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../common/FormsControls/FormsControl";

export type FormDataType = {
    postMessage: string
}

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"postMessage"} validate={[required, maxLength10]} placeholder={"add message"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<FormDataType>({form: "postMessage"})(AddPostForm)