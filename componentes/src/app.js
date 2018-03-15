var hardcode = {
    title: "Fill out",
    subtitle: "this form",
    questions: ["Name", "Last name", "Nickname", "Major"],
    answers: []
};

class MyApp extends React.Component {
    render(){
        return (
            <div>
                <Header info={hardcode}/>
                <Form info={hardcode}/>
                <Action/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.info.title}</h1>
                <h2>{this.props.info.subtitle}</h2>
            </div>
        );
    }
}

const checkInput = (e) => {
    e.preventDefault();
    console.log(e);
    const input = e.target.elements.question.value;
    console.log(input);
    if (input) {
        alert("Your input is valid!")
    } else {
        alert("Your input is not valid!")
    }
}

class Field extends React.Component {
    render(){
        console.log(this.props);
        return (
            <form onSubmit={checkInput}>
                <input type="text" name="question" placeholder={this.props.question}/>
                <button className="btn btn-danger">Validate</button>
            </form>
        );
    }
}

class Form extends React.Component {
    render(){
        console.log("Printed within form")
        console.log(this.props);
        return (
            this.props.info.questions.map((question) => {
                return <div><Field question={question}/></div>
            })
        )
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button>Pick an option</button>
            </div>
        );
    }
}

ReactDOM.render(<MyApp/>, document.getElementById('app'));