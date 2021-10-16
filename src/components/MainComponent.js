import React, { Component } from 'react';
import Header from './headerFooter/HeaderComponent';
import Footer from './headerFooter/FooterComponent';
import Home from './HomeComponent';
import Web from './WebComponent';
import Words from './WordsComponent'
import Sounds from './SoundsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './main.css';

class Main extends Component {
    render() {
        return(
            <>
                <Header />
                <div className="content-container">
                    <ScrollToTop>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/web' component={Web} />
                            <Route path='/words' component={Words} />
                            <Route path='/sounds' component={Sounds} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                            <Redirect to='/home' />
                        </Switch>
                    </ScrollToTop>
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </>
        );
    }
}

export default Main;