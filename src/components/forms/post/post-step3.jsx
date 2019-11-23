import React, {Component} from 'react';

class PostStep3 extends Component {
    render() {
        return (
            <div>
                Step 3

                <button onClick={ this.props.nextStep}> Next Step</button>
                {this.props.formStep !== 0 && <button onClick={ this.props.prevStep}> Prev Step</button>}
            </div>
        );
    }
}

export default PostStep3;