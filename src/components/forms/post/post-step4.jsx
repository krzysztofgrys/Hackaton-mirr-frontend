import React, {Component} from 'react';

class PostStep4 extends Component {
    render() {
        return (
            <div>
                Step 4

                <button onClick={() =>  this.props.prevStep()} > Prev Step</button>
            </div>
        );
    }
}

export default PostStep4;