import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleArticle from '../decorators/toggleOpen'

class ArticleList extends Component {

    render() {
        const {articles,openArticleId,toggleArticle} = this.props
        const elements = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id == openArticleId}
                     toggleOpen={toggleArticle(article.id)}
            />
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default toggleArticle(ArticleList)