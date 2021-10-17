const fakeAuth = require("./fakeAuth")
// @ponicode
describe("fakeAuth.login", () => {
    test("0", () => {
        let callFunction = () => {
            fakeAuth.login()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fakeAuth.logout", () => {
    test("0", () => {
        let callFunction = () => {
            fakeAuth.logout()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fakeAuth.isAuthenticated", () => {
    test("0", () => {
        let callFunction = () => {
            fakeAuth.isAuthenticated()
        }
    
        expect(callFunction).not.toThrow()
    })
})
