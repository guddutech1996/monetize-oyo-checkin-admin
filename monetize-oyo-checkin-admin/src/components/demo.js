import React from 'react';
import { Component } from "react";

class Demo extends Component{

    state ={
        count: 0,
        imageUrl: "https://picsum.photos/200",
        tags: []
    };
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
        console.log('Constructor',this);
    }

    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    handleIncrement(product){
        console.log(product);
        console.log('Increment Clicked');
        this.state.count =  this.state.count + 1 ;
        this.setState(
            {
                count:  this.state.count
            }
        );
    }

    renderTags(){
        if(this.state.tags.length == 0) return <p>There are no tags!</p>;
        return <ul>
        {this.state.tags.map(tag =>
            <li key = {tag}>{tag}</li>
            )}
    </ul>;
    }
    render(){
        let product = 123;
        return(
            <div>
                <span>{this.state.count}</span>
                <button onClick ={ () => this.handleIncrement(product)} 
                className ="btn btn-secondary btn-sm">
                    Increment
                </button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2";
        classes += (this.state.count ==0)? "baddge-warning" : "badge-primary";
        return classes;
    }

}
export default Demo;