class VisiblilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggle(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            };
        });
    }


    render(){
        return(
          <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggle}>
                {this.state.visibility ? 'Hide details':'Show details'}
            </button>
            {this.state.visibility && (
                <div>
                    <p>Hey. There are some details you can now see!</p>
                </div>
            )}
          </div>
        );
      }

}

ReactDOM.render(<VisiblilityToggle />,document.getElementById('app'));