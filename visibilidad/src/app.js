// Alonso Iturbe 
// A01021621

// Si este documento tiene un "use strict" hasta arriba, SE GENERA AUTOMÁTICAMENTE!

var buttonText = "Click to Obamify";

const toggleImage = () => {
    var x = document.getElementById("imageContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
        buttonText = "Click to De-Obamify";
    } else {
        x.style.display = "none";
        buttonText = "Click to Obamify";
    }

    render();
}

const render = () => {
    const template = (
        <div>
            <h3>Visibilidad</h3>
            <button id="12" className="myClass" onClick={toggleImage}>{buttonText}</button>
            <div id="imageContainer" display="none">
                <img src="images/obama.jpg" alt="ObamaImage" />
            </div>
        </div>
    );
    ReactDOM.render(template,appRoot);    
};

const appRoot = document.getElementById('app');

render();

// ReactDOM.render(template,appRoot);