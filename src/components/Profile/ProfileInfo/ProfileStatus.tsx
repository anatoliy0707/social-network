import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    state = {
        title: this.props.status,
        editMode: false
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deActivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateUserStatus(this.state.title)
    }

    onChangeUserStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                title: e.currentTarget.value
            }
        )
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '++++'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus onChange={this.onChangeUserStatusHandler} onBlur={this.deActivateEditMode} type="text" value={this.state.title}/>
                </div>
                }

            </div>
        )
    };
}

export default ProfileStatus;
