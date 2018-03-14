"use strict";

// Alonso Iturbe 
// A01021621

// Si este documento tiene un "use strict" hasta arriba, SE GENERA AUTOMÁTICAMENTE!

var buttonText = "Click to Obamify";

var toggleImage = function toggleImage() {
    var x = document.getElementById("imageContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
        buttonText = "Click to De-Obamify";
    } else {
        x.style.display = "none";
        buttonText = "Click to Obamify";
    }

    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "Visibilidad"
        ),
        React.createElement(
            "button",
            { id: "12", className: "myClass", onClick: toggleImage },
            buttonText
        ),
        React.createElement(
            "div",
            { id: "imageContainer", display: "none" },
            React.createElement("img", { src: "images/obama.jpg", alt: "ObamaImage" })
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render();

// ReactDOM.render(template,appRoot);
