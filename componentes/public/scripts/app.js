"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hardcode = {
    title: "Fill out",
    subtitle: "this form",
    questions: ["Name", "Last name", "Nickname", "Major"],
    answers: []
};

var MyApp = function (_React$Component) {
    _inherits(MyApp, _React$Component);

    function MyApp() {
        _classCallCheck(this, MyApp);

        return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
    }

    _createClass(MyApp, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { info: hardcode }),
                React.createElement(Form, { info: hardcode }),
                React.createElement(Action, null)
            );
        }
    }]);

    return MyApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            console.log(this.props);
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.info.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.info.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var checkInput = function checkInput(e) {
    e.preventDefault();
    console.log(e);
    var input = e.target.elements.question.value;
    console.log(input);
    if (input) {
        alert("Your input is valid!");
    } else {
        alert("Your input is not valid!");
    }
};

var Field = function (_React$Component3) {
    _inherits(Field, _React$Component3);

    function Field() {
        _classCallCheck(this, Field);

        return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
    }

    _createClass(Field, [{
        key: "render",
        value: function render() {
            console.log(this.props);
            return React.createElement(
                "form",
                { onSubmit: checkInput },
                React.createElement("input", { type: "text", name: "question", placeholder: this.props.question }),
                React.createElement(
                    "button",
                    { className: "btn btn-danger" },
                    "Validate"
                )
            );
        }
    }]);

    return Field;
}(React.Component);

var Form = function (_React$Component4) {
    _inherits(Form, _React$Component4);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: "render",
        value: function render() {
            console.log("Printed within form");
            console.log(this.props);
            return this.props.info.questions.map(function (question) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Field, { question: question })
                );
            });
        }
    }]);

    return Form;
}(React.Component);

var Action = function (_React$Component5) {
    _inherits(Action, _React$Component5);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    null,
                    "Pick an option"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

ReactDOM.render(React.createElement(MyApp, null), document.getElementById('app'));
