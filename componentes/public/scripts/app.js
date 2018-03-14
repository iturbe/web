"use strict";

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

var gasStation = {
    name: "G500 Zona Esmeralda",
    brand: "G500",
    price: 19.32,
    comments: []
};

var counter = 0;

var showPrice = function showPrice() {
    if (!gasStation.price) return "Unknown";else return gasStation.price;
};

var addOne = function addOne() {
    console.log("add one");
    counter++;
    render();
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var comment = e.target.elements.comment.value;
    if (comment) {
        gasStation.comments.push(comment);
        e.target.elements.comment.value = '';
        render();
    }
};

var numbers = [123, 456, 789];

var randomComment = function randomComment() {
    var randomNum = Math.floor(Math.random() * gasStation.comments.length);
    var option = gasStation.comments[randomNum];
    alert(option);
};

var deleteComment = function deleteComment(e) {
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
};

var dummyFunc = function dummyFunc(commentNum) {};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            gasStation.name
        ),
        gasStation.brand && gasStation.brand == "Shell" && React.createElement(
            "li",
            null,
            "Brand: ",
            gasStation.brand
        ),
        showPrice(),
        React.createElement(
            "p",
            null,
            "Counter: ",
            counter
        ),
        React.createElement(
            "button",
            { id: "12", className: "btn btn-primary", onClick: addOne },
            "+1"
        ),
        React.createElement(
            "p",
            null,
            gasStation.comments.length > 0 ? 'Comentarios' : 'Sin comentarios'
        ),
        gasStation.comments && gasStation.comments.length > 0 && React.createElement(
            "ol",
            null,
            gasStation.comments.map(function (comment, index) {
                return React.createElement(
                    "li",
                    { key: comment },
                    comment,
                    " ",
                    React.createElement(
                        "button",
                        { type: "button", id: comment, className: "btn btn-danger", onClick: deleteComment },
                        "X"
                    )
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "comment" }),
            React.createElement(
                "button",
                { className: "btn btn-success" },
                "Agregar comentario"
            )
        ),
        React.createElement(
            "button",
            { className: "btn btn-info", disabled: gasStation.comments.length == 0, onClick: randomComment },
            "Random Comment"
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render();

// ReactDOM.render(template,appRoot);
