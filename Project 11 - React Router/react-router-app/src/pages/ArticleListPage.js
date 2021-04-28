import React from "react";
import articles from "./Article-content";
import ArticleList from "../components/ArticleList";
const ArticleListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticleList articles={articles}/>
    </>
);

export default ArticleListPage;