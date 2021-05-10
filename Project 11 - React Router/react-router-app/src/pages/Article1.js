import React,{useState, useEffect} from "react";
import ArticleList from "../components/ArticleList";
import articles from "./Article-content";
import NotFoundPage from "./NotFoundPage";
import CommentList from "../components/commentList";
import UpvoteSection from "../components/upvoteSecion";
import AddCommentForm from "../components/AddCommentForm";
const ArticlePage = ( {match} ) => {

    // fetch('/api/articles/...',{
    //     method: 'POST',
    //     body: 
    // })
    const name = match.params.name;
    const article = articles.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({upvotes:0, comments: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            // console.log(result);
            const body = await result.json();
            // console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]); //use effec will be called when even name changes

    if(!article){
        return(
            <>
                <NotFoundPage/>
            </>
        );
    }

    const otherArticles = articles.filter(article => article.name !== name); 

    return (
        <>
            <h1>{article.title}</h1>
            <UpvoteSection articleName={name} setArticleInfo={setArticleInfo} upvotes={articleInfo.upvotes}/>
            {article.content.map((paragraph, key ) => (
                <p key={key}>{paragraph}</p>
            ))}
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
            <CommentList comments={articleInfo.comments}/>
            <h3>Other Articles:</h3>
            <ArticleList articles={otherArticles}/>
        </>
    );
}

export default ArticlePage;