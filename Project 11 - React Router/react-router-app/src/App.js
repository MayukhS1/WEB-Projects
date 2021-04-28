import './App.css';
import {BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/Article1';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutUs}/>
            <Route path="/article-list/*" component={NotFoundPage}/>
            <Route path="/article-list" component={ArticleListPage}/>
            <Route path="/article/:name" component={ArticlePage}/>
            <Route component={NotFoundPage}/>
          </Switch>
          
        </div>
      </div>
    </Router>   
  );
}

export default App;
