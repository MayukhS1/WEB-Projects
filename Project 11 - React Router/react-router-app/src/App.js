import './App.css';
import {BrowserRouter as Router,
Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutPage';
import ArticleList from './pages/ArticlesPage';
import ArticlePage from './pages/Article1';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutUs}/>
          <Route path="/article-list" component={ArticleList}/>
          <Route path="/article/:name" component={ArticlePage}/>
        </div>
      </div>
    </Router>   
  );
}

export default App;
