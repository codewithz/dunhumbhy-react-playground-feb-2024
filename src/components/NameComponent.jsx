import { Component } from "react";

export class NameComponent extends Component{
// they have an pre defined object called as props 
    
    
    render(){
        const name=this.props.name
        const message=this.props.message
        return(
            <div>
                <h3>Name : {name}</h3>
                <h4>Message : {message}</h4>
            </div>
        );
    }

}