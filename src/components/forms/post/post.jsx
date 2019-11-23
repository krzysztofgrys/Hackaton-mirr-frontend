import React, {Component} from 'react';
import {addPostValidationSchema} from "../validation-schemes";
import withValidation from "../with-validation";

class Post extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default withValidation(Post, addPostValidationSchema);
