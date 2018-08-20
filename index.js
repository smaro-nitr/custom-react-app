/*L3 - Tabel Looping Rendering*/
function TableComponent(props) {
    const item=props.item;
    return (
        <table>
            <tr>
                <th>Year</th>
                <th>Model</th>
                <th>Price</th>
                <th>Buy</th>
            </tr>
            <tr>
                <td>{item.Year}</td>
                <td>{item.Model}</td>
                <td>{item.Price}</td>
                <td><button>Buy Now</button></td>
            </tr>
        </table>
    );
}

/*L2 - List Body Rendering*/
function BodyComponent(props) {
    return (
        <div>
            {props.items.map(item => (
                <TableComponent item={item} />
            ))}
        </div>
    );
}

/*L2 - List Header Rendering*/
function HeaderComponent(props) {
    return (
        <h3>{props.title}</h3>
    );
};

/*L1 - Cars List Rendering*/
function CarListing() {
    const carsData=[
        { "Year": 2013, "Model": "A", "Price": 32000 },
        { "Year": 2011, "Model": "B", "Price": 44000 },
        { "Year": 2016, "Model": "B", "Price": 15500 }
    ];

    return (
        <div>
            <HeaderComponent title="Cars" />
            <BodyComponent items={carsData} />
        </div>
    );
};

/*L1 - Class Components*/
class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state={"Location":"India","Count":0};
        console.log("Constructor : " + this.state.Location);
        this.clickHandler=this.clickHandler.bind(this)
    }
    
    componentWillMount(){
        console.log("Will Mount : " + this.state.Location);
    }

    componentDidMount(){
        this.setState((prevState, props) => { 
            var result={"Location":"Pune, " + prevState.Location};
            console.log("During Mounting : " + result.Location);
            return result;
        });

        this.setState((prevState, props) => { 
            var result={"Location":prevState.Location + ", Asia"};
            console.log("During Mounting Again : " + result.Location);
            return result;
        });
    
        console.log("Async Mounting : " + this.state.Location);
    }

    render(){
        return (
            <div>
                <h1>Hello World ! This is {this.props.name} from {this.state.Location}</h1>
                <button onClick={this.clickHandler}>{this.state.Count}</button>
                <br/><br/>
            </div>
        );
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
      return <h1>{this.props.details}</h1>
    }
}

/*L2 - Class Components*/
class Button extends React.Component{
    render(){
        return (
            <button style={{color: this.props.active? 'red': 'blue'}} onClick={() => {this.props.clickHandler(this.props.id, this.props.name)}}>
                {this.props.name}
            </button>
          )
    }
}

/*L1 - Class Components*/
class Navigator extends React.Component{
    constructor(props){
        super(props)
        this.state={activeArray:[0,0,0,0], details:""}
        this.clickHandler=this.clickHandler.bind(this)
    }
    
    clickHandler(id, details){
        var arr=[0,0,0,0]
        arr[id]=1
        this.setState({activeArray:arr,details:details});
    }
    
    render(){
        return (
            <div>
                <Button id={0} active={this.state.activeArray[0]} clickHandler={this.clickHandler} name="bob"/>
                <Button id={1} active={this.state.activeArray[1]} clickHandler={this.clickHandler} name="joe"/>
                <Button id={2} active={this.state.activeArray[2]} clickHandler={this.clickHandler} name="tree"/>
                <Button id={3} active={this.state.activeArray[3]} clickHandler={this.clickHandler} name="four"/>
                <Details details={this.state.details}/>
            </div>
        )
    }
}


/*Final Rendering Element*/
var renderElement=(
    <div>
        <CarListing/>
        <Welcome name="Subhendu"/>
        <Navigator/>
    </div>
);

ReactDOM.render(
    renderElement,
    document.getElementById("root")
)