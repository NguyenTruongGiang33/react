import React,{Component} from 'react';

class Header extends Component {
    render(){
        return (
            <div className="Wrapper_header">
            	<div className="logo">
            		<p>BOOKCLUBZ</p>
            	</div>
            	<div className="menu">
            		<ul>
            			<li className="dropdown"><a href="@">BOOKS<i className="fas fa-caret-down"></i></a>
            				<ul className="sub-menu">
            					<span className="triangle"></span>
            					<li><a href="@" className="s-menu">TOP BOOKS</a></li>
            					<li><a href="@" className="s-menu">INDIE AUTHOR CORNER</a></li>
            					<li><a href="@" className="s-menu">DISCUSSION GUIDES</a></li>
            				</ul>
            			</li>
            			<li><a href="@">ABOUT</a></li>
            			<li className="dropdown"><a href="@">BLOG<i className="fas fa-caret-down"></i></a>
            				<ul className="sub-menu">
            					<span className="triangle"></span>
            					<li><a href="@" className="s-menu">TOP BOOKS</a></li>
            					<li><a href="@" className="s-menu">INDIE AUTHOR CORNER</a></li>
            					<li><a href="@" className="s-menu">DISCUSSION GUIDES</a></li>
            					<li><a href="@" className="s-menu">DISCUSSION GUIDES</a></li>
            				</ul>
            			</li>
            			<li><a href="@">FAQS</a></li>
            			<li className="wrap_btnin"><a href="@" className="btn_si">SIGN IN</a></li>
            		</ul>
            	</div>
            </div>
        );
    }
}

export default Header;

                        