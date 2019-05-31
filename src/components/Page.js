import React,{Component} from 'react';
import FormAddItem from './FormAddItem';

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
				}
			],
			isDisplayForm:false,
		}
	}
	onSubmit = (data) => {
		var additem = this.state.postitem;
		additem.push(data);
		this.setState({
			postitem : additem
		});
		console.log(data);
	}
	OpenForm = () => {
		this.setState({
			isDisplayForm : !this.state.isDisplayForm
		});
	}
	CloseForm = () => {
		this.setState({
			isDisplayForm : false
		});
	}

    render(){
    	var isDisplayForm = this.state.isDisplayForm;

    	let element = this.state.postitem.map((post,index) => (
    		<div className="wrapper_item" key={index}>
    			<a href="@" className="link"><img src={post.image} alt="Error-Link-Img" className="img-item" width="350px" height="200px"/></a>
    			<a href="@"><h2 className="title-item">{post.title}</h2></a>
    			<p className="des-item">{post.description}</p>
    		</div>
    	));
    	/*Open-Close Form based on isDisplayForm */
    	var elementForm = isDisplayForm ? <FormAddItem onSubmit={this.onSubmit} CloseForm={this.CloseForm}/> : '';	
        return (
        	<div>
	            <div className="wrapper_Page">
	            	<div className="head">
	            		<h2>Recent Blog Posts</h2>
	            		<button className="btn_add" type="button" onClick={this.OpenForm}>Add Item</button>
	            		<div className="input-type"><input type="text" placeholder="SEARCH BLOG POSTS"/><i className="fas fa-search"></i></div>
	            	</div>
	            	<div className="wraper-w">
	            		{element}
	            	</div>
	            </div>

            	{elementForm}
            </div>
        );
    }
}

export default Page;

                        