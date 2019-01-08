/*L3 - Table Looping Rendering*/
function TableBodyComponent(props) {
    const item = props.item
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
    )
}

/*L2 - List Body Rendering*/
function TableComponent(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            {props.items.map(item => (
                <TableBodyComponent item={item} />
            ))}
        </div>
    )
}

/*L1 - Cars List Rendering*/
function CarListing() {
    const carsData = [
        { "Year": 2013, "Model": "A", "Price": 32000 },
        { "Year": 2011, "Model": "B", "Price": 44000 },
        { "Year": 2016, "Model": "B", "Price": 15500 }
    ]

    return (
        <div className="card card-body">
            <TableComponent title="Cars" items={carsData} />
        </div>
    )
}

/*L1 - Class Components*/
class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = { "Location": "MH", "Count": 0 }
        console.log("Constructor : " + this.state.Location)
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentWillMount() {
        console.log("Will Mount : " + this.state.Location)
    }

    render() {
        return (
            <div className="card card-body">
                <h3>
                    Hello ! This is {this.props.name} from {this.state.Location} : Click Here &nbsp;
                    <button onClick={this.clickHandler}>{this.state.Count}</button>
                </h3>
            </div>
        )
    }

    componentDidMount() {
        this.setState((prevState, props) => {
            var result = { "Location": "Pune, " + prevState.Location }
            console.log("During Mounting : " + result.Location)
            return result
        })

        this.setState((prevState, props) => {
            var result = { "Location": prevState.Location + ", India" }
            console.log("During Mounting Again : " + result.Location)
            return result
        })

        console.log("Async Mounting : " + this.state.Location)
    }

    clickHandler() {
        this.setState((prevState, props) => {
            return { "Count": prevState.Count + 1 }
        })
    }
}

/*L2 - Class Components*/
class Details extends React.Component {
    render() {
        return <div>{this.props.details}</div>
    }
}

/*L2 - Class Components*/
class Tab extends React.Component {
    render() {
        return (
            <a className="nav-item nav-link" style={{ color: this.props.active ? 'blue' : 'gray' }} onClick={() => { this.props.clickHandler(this.props.id, this.props.name) }}>
                {this.props.name}
            </a>
        )
    }
}

/*L1 - Class Components*/
class Navigator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeArray: [0, 0, 0, 0], details: "click tab to navigate content" }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(id, details) {
        var arr = [0, 0, 0, 0]
        arr[id] = 1
        this.setState({ activeArray: arr, details: details })
    }

    render() {
        return (
            <div className="card card-body">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">My Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Tab id="0" name="Tab1" active={this.state.activeArray[0]} clickHandler={this.clickHandler} />
                            <Tab id="1" name="Tab2" active={this.state.activeArray[1]} clickHandler={this.clickHandler} />
                            <Tab id="2" name="Tab3" active={this.state.activeArray[2]} clickHandler={this.clickHandler} />
                            <Tab id="3" name="Tab4" active={this.state.activeArray[3]} clickHandler={this.clickHandler} />
                        </div>
                    </div>
                </nav>
                <Details details={this.state.details} />
            </div>
        )
    }
}

/*L2 - Class Components*/
class TriviaOption extends React.Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={() => { this.props.clickHandler(this.props.value) }}>
                    {this.props.value}
                </button> &nbsp;
            </div>
        )
    }
}

/*L1 - TriviaGame Components*/
class TriviaGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = { correctAnswer: 0, incorrectAnswer: 0 }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(value) {
        if (value === 8) {
            this.setState((prevState, props) => {
                return { "correctAnswer": prevState.correctAnswer + 1 }
            })
        } else {
            this.setState((prevState, props) => {
                return { "incorrectAnswer": prevState.incorrectAnswer + 1 }
            })
        }
    }

    render() {
        return (
            <div className="card card-body">
                <h3 style={{ color: 'red' }}>What is 8 x 1 ?</h3>
                <div className="btn-group" role="group">
                    <TriviaOption value={5} clickHandler={this.clickHandler} />
                    <TriviaOption value={6} clickHandler={this.clickHandler} />
                    <TriviaOption value={7} clickHandler={this.clickHandler} />
                    <TriviaOption value={8} clickHandler={this.clickHandler} />
                </div>
                <br /><br />
                <h5>
                    Correct Answer &nbsp;
                    <span className="badge badge-success"> {this.state.correctAnswer}</span> &nbsp; &nbsp;
                    Incorrect Answer &nbsp;
                    <span className="badge badge-warning"> {this.state.incorrectAnswer}</span>
                </h5>
            </div>
        )
    }
}

/*Final Rendering Element*/
var renderElement = (
    <div> <br />
        <CarListing /> <br />
        <Welcome name="Subhendu" /> <br />
        <Navigator /> <br />
        <TriviaGame /> <br />
    </div>
)

ReactDOM.render(
    renderElement,
    document.getElementById("root")
)