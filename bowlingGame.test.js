const {score} = require('./bowlingGame')

describe("bowling game", ()=> {
    describe("calculation of total score of bowling game", () => {
        it("testcase 1", () => {
            expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90)
        })

        it("testcase 2", () => {
            expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30)
        })

        it("testcase 3", () => {
            expect(score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16)
        })
    })
})