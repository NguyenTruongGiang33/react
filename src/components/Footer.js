import React,{Component} from 'react';

class Footer extends Component {
    render(){
        return (
            <div className="wrapper_footer">
            	<div className="top">
            		<div className="logo">
            			<a href="@"><p>BOOKCLUBZ</p></a>
	            	</div>
	            	<div className="menu">
	            		<ul>
	            			<li><a href="@">BOOKS</a></li>
	            			<li><a href="@">ABOUT</a></li>
	            			<li><a href="@">FAQS</a></li>
	            			<li><a href="@">CONTACT US</a></li>
	            		</ul>
	            	</div>
	            	<div className="font">
	            		<a href="@"><i className="fab fa-facebook-f"></i></a>
	            		<a href="@"><i className="fas fa-dove"></i></a>
	            		<a href="@"><i className="fas fa-camera"></i></a>
	            	</div>
            	</div>
            	<div className="bot">
            		<p>&copy; 2019 Bookclubz. All rights reserved</p>
            	</div>
            </div>
        );
    }
}

export default Footer;

                        