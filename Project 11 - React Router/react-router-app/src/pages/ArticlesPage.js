import React from "react";
import articles from "./Article-content";
import {Link} from 'react-router-dom';
const ArticleList = () => (
    <>
        <h1>Articles</h1>
        {articles.map(
            (article,key) => (
                <Link className="article-list-item" key={key} to={`article/${article.name}`}>
                    <h4>{article.title}</h4>
                    <p>{article.content[0].substr(0,250)}...</p>
                </Link>
                
            )
        )}
    </>
);

export default ArticleList;