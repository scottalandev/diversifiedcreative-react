import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './headFoot/HeadFootComponent';
import Home from './pages/HomePage';
import Web from './pages/WebPage';
import Words from './pages/WordsPage';
import Sounds from './pages/SoundsPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import './main.css';

function Main() {
	//this block effects a Scroll-To-Top on navigation
	const location = useLocation();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
                    <Route path="/" element={<Home />} />
					<Route path="/web" element={<Web />} />
					<Route path="/words" element={<Words />} />
					<Route path="/sounds" element={<Sounds />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default Main;