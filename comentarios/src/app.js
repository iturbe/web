// Si este documento tiene un "use strict" hasta arriba, SE GENERA AUTOMÁTICAMENTE!

// var number = 1234;

// var gasStation = {
//     name:"Gas Interlomas",
//     brand:"G500",
//     price:19.34
// };

// var showPrice = () => {
//     if (!gasStation.price) {
//         return "Unknown"
//     } else {
//         return gasStation.price
//     }
// }

// let counter = 0;

// const addOne = () => {
//     console.log("added");
//     counter++;
//     render();
// }

// const render = () => {
//     var template = (
//         <div>
//             <p>HEllO!</p>
//             <p>{number}</p>
//             <h1>{gasStation.name}</h1>
//             <h2>{gasStation.brand}</h2>
//             <h3>{showPrice()}</h3>
//             <h4>Counter: {counter}</h4>
//             <button className="myClass" id="12" onClick={addOne}>+1</button>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('app');

// render();

console.log("Helo yarn");

var numero = 123;

let gasStation = {
    name: "G500 Zona Esmeralda",
    brand: "G500",
    price: 19.32,
    comments: []
};

let counter = 0;

const showPrice = () => {
    if (!gasStation.price)
        return "Unknown";
    else
        return gasStation.price;
}

const addOne = () => {
    console.log("add one");
    counter++;
    render();
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    if (comment) {
        gasStation.comments.push(comment);
        e.target.elements.comment.value = '';
        render();
    }
};

const numbers = [123,456,789];

const randomComment = () => {
    const randomNum = Math.floor(Math.random() * gasStation.comments.length);
    const option = gasStation.comments[randomNum];
    alert(option);
}

const deleteComment = (e) => {
    var name;
    var index;
    e = e || window.event;
    e = e.target || e.srcElement;
    if (e.nodeName === 'BUTTON') {
        name = e.id;
        index = gasStation.comments.indexOf(name);
        if (index > -1) {
            gasStation.comments.splice(index, 1);
        }
    }
    render();
}

const dummyFunc = (commentNum) => {
    
}

const render = () => {
    const template = (
        <div>
            <h3>{gasStation.name}</h3>
            {(gasStation.brand && gasStation.brand == "Shell") && <li>Brand: {gasStation.brand}</li>}
            {/* <p>{<h3>{gasStation.brand}</h3>}</p> */}
            {showPrice()}
            <p>Counter: {counter}</p>
            <button id="12" className="btn btn-primary" onClick={addOne}>+1</button>
            <p>{gasStation.comments.length > 0 ? 'Comentarios' : 'Sin comentarios'}</p>
            { (gasStation.comments && gasStation.comments.length > 0) && <ol>
                    {
                        gasStation.comments.map((comment, index) => {
                            return <li key = {comment}>{comment} <button type="button" id={comment} className="btn btn-danger" onClick={deleteComment}>X</button></li>
                        })
                    }
                </ol>
            }
            {/* {gasStation.comments} */}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="comment"></input>
                <button className="btn btn-success">Agregar comentario</button>
            </form>
            <button className="btn btn-info" disabled={gasStation.comments.length == 0} onClick={randomComment}>Random Comment</button>
        </div>
    );
    ReactDOM.render(template,appRoot);    
};

const appRoot = document.getElementById('app');

render();

// ReactDOM.render(template,appRoot);