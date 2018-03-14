class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Título</h1>
                <h2>Subtítulo</h2>
            </div>
        );
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

const jsx = (
    <div>
        <h1>Título</h1>
        <Header/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));