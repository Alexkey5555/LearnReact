

const multy = (x, y = 3) => x + y;
const arr = [1, 2, 3];
console.log(arr[1]);



console.log(multy(57));

/*const red = {
    color: "#ff0000",
    fontSize: "30px"
}
const button = {
    fontSize: "30px"
}
const alertHello = () => {
    alert('Hello');
}
const Hello = props => <p style={red} onClick={alertHello}>Hello {props.name}</p>

class RenderJSX extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    changeCounter = () => {
        console.log(this);
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <header>
                    <img className="logo"></img>
                    <h1>Hello React</h1>
                </header>
                <main>
                    <button style={button} onClick={this.changeCounter}>{this.state.counter}</button>
                    <p>This text</p>
                    <Hello name="Max" />
                    <Hello name="Alex" />
                    <Hello name="John" />
                </main>
            </div >
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderJSX />);*/


