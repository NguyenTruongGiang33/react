import React,{Component} from 'react';

class Page extends Component {
	

	constructor(props){
		super(props);
		this.state={
			postitem:[
				{
					id:1,
					image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681",
					title:"Using an Online Organizational Tool for your Book Club",
					description:"Have you ever hosted a book club event that was poorly attended? You read the book, cooked a meal, prepared discussion questions - and no one showed up? Have months gone by with no book club meeting because of calendaring difficulties?"
				},
				{
					id:2,
					image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681",
					title:"Using an Online Organizational Tool for your Book Club",
					description:"Have you ever hosted a book club event that was poorly attended? You read the book, cooked a meal, prepared discussion questions - and no one showed up? Have months gone by with no book club meeting because of calendaring difficulties?"
				},
			]
		}
	}
    render(){
    	let element = this.state.postitem.map((post,index) => (
    		<div className="wrapper_item" key={index}>
    			<a href="@" className="link"><img src={post.image} alt="img" className="img-item" width="350px" height="200px"/></a>
    			<a href="@"><h2 className="title-item">{post.title}</h2></a>
    			<p className="des-item">{post.description}</p>
    		</div>
    	));
        return (
            <div className="wrapper_Page">
            	<div className="head">
            		<h2>Recent Blog Posts</h2>
            		<span className="input-type"><i className="fas fa-search"></i><input type="text" placeholder="SEARCH BLOG POSTS"/></span>
            	</div>
            	<div className="wraper-w">
            		{element}
            	</div>
            </div>
        );
    }
}

export default Page;

                        