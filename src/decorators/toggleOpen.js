//HOC === Higher Order Component === decorator
import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {
    constructor(props) {
        super()
        this.state = {
            isOpen: false,
            openArticleId: null
        }
    }

    render() {
        return <OriginalComponent {...this.props} 
            openArticleId={this.state.openArticleId} 
            isOpen={this.state.isOpen} 
            toggleOpen={this.toggleOpen}
            toggleArticle={this.toggleArticle}/>
    }

    toggleOpen = ev => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleArticle = openArticleId => ev => {
        this.setState({openArticleId})
    }

}