import React, {Component} from 'react';

export default class Comment extends Component {
    render () {
        const {comment} = this.props;
        return (
            <div>
                <p>
                    <b>{comment.user}</b>
                </p>
                <p>{comment.text}</p>
            </div>
        );
    }
}