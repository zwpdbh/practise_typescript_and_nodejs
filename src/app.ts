import * as dotenv from "dotenv";
dotenv.config();

class App {
    public start() {
        console.log("start application...");
    }
}

const app = new App();
app.start();


const testVar = (process.env.TEST_PORT ? process.env.TEST_PORT : 100000);
console.log(testVar);



