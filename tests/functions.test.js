import { describe, expect, it } from "vitest";

describe('max', () => { 
    it('should return  the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2)
    })
})  