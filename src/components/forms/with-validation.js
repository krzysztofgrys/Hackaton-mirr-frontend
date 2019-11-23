import React from 'react';
import set from "lodash/set";

function withValidation(WrappedComponent) {
    return class extends React.Component {
        validate = schema => {
            return values => {
                return schema.validate(values, {abortEarly: false}).then(
                    () => {
                    },
                    error => {
                        if (error.inner.length) {
                            throw error.inner.reduce(
                                (acc, curr) => set(acc, curr.path, curr.message),
                                {}
                            );
                        }
                    }
                );
            }
        };

        render() {
            return <WrappedComponent validate={this.validate} {...this.props} />;
        }
    };
}

export default withValidation;