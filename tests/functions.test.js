import { describe, expect, it } from "vitest";
import { randomStr } from "../src/helper";

describe('randomStr', () => { 
    it('should return ', () => {
        console.log(randomStr())
        expect(randomStr()).toBeTypeOf('string')
    })
})  