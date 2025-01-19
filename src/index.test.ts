import {Greeter} from "./index.js";
import {expect} from "vitest";

describe("Greeter", () => {
    it("should return hello world", () => {
        const greeter = new Greeter();
        expect(greeter.sayHello()).equal("hello");
    })
})