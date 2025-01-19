import {Then, When} from "@cucumber/cucumber";
import {Greeter} from "../../src/index.js";
import assert from "node:assert";

let whatIHeard: string;

When('the greeter says hello', function () {
    whatIHeard = new Greeter().sayHello();
});

Then('I should have heard {string}', function (name: string) {
    assert.equal(whatIHeard, name);
});
