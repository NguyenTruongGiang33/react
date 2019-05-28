import React,{Component} from 'react';

class Search extends Component {
    render(){
        return (
        	<div className="search">
        		<h2 className="title">Subscribe to the blog to receive email updates of new blog posts</h2>
        		<div className="search-btn">
        			<input type="text" placeholder="Enter your email"/>	
        			<a href="@" className="btn_si">SUBSCRIBE TO THE BLOG</a>	
        		</div>
        	</div>
        );
    }
}

export default Search;

                        