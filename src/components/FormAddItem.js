import React,{Component} from 'react';

class FormAddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            image : '',
            title:'',
            description:'',
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    CloseForm = () => {
        this.props.CloseForm();
    }
  render() {
    return (
        <form onSubmit={this.onSubmit}>
            <h2 className="title">Add item
                <span className="fa fa-times-circle" onClick={this.CloseForm}></span>
            </h2>
            <div>
                <label>Image:</label>
                <div>
                    <input type="link" name="image" placeholder="" value={this.state.image} onChange={this.onChange}/>
                </div>
            </div>
            <div>
                <label>Title:</label>
                <div>
                    <input type="text" name="title" placeholder="" value={this.state.title} onChange={this.onChange}/>
                </div>
            </div>

            <div>
                <label>Description:</label>
                <div>
                    <input type="description" name="description" placeholder="" value={this.state.description} onChange={this.onChange}/>
                </div>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
  }
}

export default FormAddItem;