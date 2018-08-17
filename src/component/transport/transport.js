/*L3 - Tabel Looping Rendering*/
function TableComponent(props) {
    const item = props.item;
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
    const carsData = [
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

/*Final Rendering*/
var renderElement = (
    <div>
        <div><CarListing/></div>
    </div>
);

ReactDOM.render(
    renderElement,
    document.getElementById("root")
)