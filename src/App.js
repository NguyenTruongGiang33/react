import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';
import Search from './components/Search';
import './styles/main.scss';

class App extends Component {
	render(){
	    return (
	        <div>
	        	<Header/>
	        	<Page/>
	        	<Search/>
	        	<Footer/>
	        </div>
	    );
	}
}

export default App;
