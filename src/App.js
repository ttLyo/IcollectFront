import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createHashHistory } from 'history';
import Header from "./pages/common/header"
import Home from "./pages/home/home"
import Detail from "./pages/detail/detail"
import Person from "./pages/person/person"
import Creator from "./pages/creator";
import Category from "./pages/category/category"
import About from "./pages/about/about";
import Search from "./pages/search/search";
import LoginAndRegister from "./pages/loginAndRegister/loginAndRegister"
import Footer from "./pages/common/footer"
// import logo from './logo.svg';
import './App.css';
const hashHistory = createHashHistory();

function App() {
  return (
    <HashRouter history={hashHistory}>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/person/:id" component={About} />
          <Route path="/category/:id" component={Category} />
          <Route path="/search/:key" component={Search} />
          <Route path="/loginAndRegister" component={LoginAndRegister} />
          <Route path="/about" component={About} />
          <Route path="/creator" component={Creator} />
        </Switch>
      <Footer />
      
    </HashRouter>
  );
}

export default App;
