import React from 'react';

function withValidation(WrappedComponent, schema) {
    return class extends React.Component {
        validate() {
            return values =>
                schema.validate(values, {abortEarly: false}).then(
                    () => {
                    },
                    error => {
                        if (error.inner.length) {
                            alert('error');
                        }
                    }
                );
        }

        render() {
            return <WrappedComponent validate={this.validate} {...this.props} />;
        }
    };
}

export default withValidation();