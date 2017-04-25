import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false,
        isCommentsOpen: false
    }

    render() {
        const {article} = this.props
        let commLink = 'Show comments'
        if(this.state.isCommentsOpen){
           commLink = 'Hide comments' 
        }
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody(commLink)}
            </section>
        )
    }

    getBody(link) {
        return this.state.isOpen && 
            <div>
                {this.props.article.text}
                <div>
                    <a onClick={this.toggleComments}>
                        <b>{link} ({this.props.article.comments.length})</b>
                    </a>
                    {this.getComments()}
                </div>
            </div>
    }

    getComments() {
        return this.state.isCommentsOpen && <CommentList comments={this.props.article.comments} />
    }

    toggleComments = () => {
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })    
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}