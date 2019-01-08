/*L3 - Table Looping Rendering*/
function TableBodyComponent(props) {
    const item=props.item;
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Model</th>
                    <th scope="col">Price</th>
                    <th scope="col">Buy</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{item.Year}</td>
                    <td>{item.Model}</td>
                    <td>&#36; {item.Price}</td>
                    <td><button>Buy Now</button></td>
                </tr>
            </tbody>
        </table>
    );
}

/*L2 - List Body Rendering*/
function TableComponent(props) {
    return (
        <div>
            <br/>
            <h3>{props.title}</h3>
            {props.items.map(item => (
                <TableBodyComponent item={item} />
            ))}
        </div>
    );
}

/*L1 - Cars List Rendering*/
function CarListing() {
    const carsData=[
        { "Year": 2013, "Model": "A", "Price": 32000 },
        { "Year": 2011, "Model": "B", "Price": 44000 },
        { "Year": 2016, "Model": "B", "Price": 15500 }
    ];

    return (
        <div>
            <TableComponent title="Cars" items={carsData} />
        </div>
    );
};

/*L1 - Class Components*/
class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state={"Location":"MH","Count":0};
        console.log("Constructor : " + this.state.Location);
        this.clickHandler=this.clickHandler.bind(this)
    }
    
    componentWillMount(){
        console.log("Will Mount : " + this.state.Location);
    }

    render(){
        return (
            <div>
                <h3>
                    Hello ! This is {this.props.name} from {this.state.Location} : Click Here &nbsp;
                    <button onClick={this.clickHandler}>{this.state.Count}</button>
                </h3>
            </div>
        );
    }

    componentDidMount(){
        this.setState((prevState, props) => { 
            var result={"Location":"Pune, " + prevState.Location};
            console.log("During Mounting : " + result.Location);
            return result;
        });

        this.setState((prevState, props) => { 
            var result={"Location":prevState.Location + ", India"};
            console.log("During Mounting Again : " + result.Location);
            return result;
        });
    
        console.log("Async Mounting : " + this.state.Location);
    }

    clickHandler(){
        this.setState((prevState, props) => {
          return {"Count": prevState.Count + 1}
        })
    }
}

/*L2 - Class Components*/
class Details extends React.Component{
    render(){
      return <div>{this.props.details}</div>
    }
}

/*L2 - Class Components*/
class Tab extends React.Component{
    render(){
        return (
            <a className="nav-item nav-link" style={{color: this.props.active? 'blue': 'gray'}} onClick={() => {this.props.clickHandler(this.props.id, this.props.name)}}>
                {this.props.name}
            </a>
          )
    }
}

/*L1 - Class Components*/
class Navigator extends React.Component{
    constructor(props){
        super(props)
        this.state={activeArray:[0,0,0,0], details:"on tab click, content will appear here"}
        this.clickHandler=this.clickHandler.bind(this)
    }
    
    clickHandler(id, details){
        var arr=[0,0,0,0]
        arr[id]=1
        this.setState({activeArray:arr, details:details});
    }
    
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">My Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Tab id="0" name="1" active={this.state.activeArray[0]} clickHandler={this.clickHandler}/>
                            <Tab id="1" name="2" active={this.state.activeArray[1]} clickHandler={this.clickHandler}/>
                            <Tab id="2" name="3" active={this.state.activeArray[2]} clickHandler={this.clickHandler}/>
                            <Tab id="3" name="4" active={this.state.activeArray[3]} clickHandler={this.clickHandler}/>
                        </div>
                    </div>
                </nav>
                <Details details={this.state.details}/>
            </div>
        )
    }
}

/*Final Rendering Element*/
var renderElement=(
    <div>
        <br/><CarListing/><br/>
        <br/><Welcome name="Subhendu"/><br/>
        <br/><Navigator/><br/>
    </div>
);

ReactDOM.render(
    renderElement,
    document.getElementById("root")
)