import React from 'react';
import set from "lodash/set";

function withValidation(WrappedComponent, schema) {
    return class extends React.Component {
        validate = () => {
            return values => {
                console.log('validation function', values);
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