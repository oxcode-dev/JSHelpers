import { describe, expect, it } from "vitest";
import { randomStr } from "../src";

describe('randomStr', () => { 
    it('should return ', () => {
        console.log(randomStr())
        expect(randomStr()).toBeTypeOf('string')
    })
})  