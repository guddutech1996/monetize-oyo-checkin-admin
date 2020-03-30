class Component extends Component{

    state  = {
        counter :  0
    };
    render(){
        return(
            <div>
                {this.state.counter}
            </div>
        );
    }

}