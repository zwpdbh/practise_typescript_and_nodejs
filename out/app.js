"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        console.log("start application...");
    };
    return App;
}());
var app = new App();
app.start();
var testVar = (process.env.TEST_PORT ? process.env.TEST_PORT : 100000);
console.log(testVar);
//# sourceMappingURL=app.js.map