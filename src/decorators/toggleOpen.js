//HOC === Higher Order Component === decorator
import React, {Component as ReactComponent} from 'react'

//лучше сделать 2 отдельных декоратора
export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {
    constructor(props) {
        super()
        this.state = {
            isOpen: false,
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
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
