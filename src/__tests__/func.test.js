import getSeven from '../func';

describe('test the func',()=>{
    it('given 77 when call getSeven then return 77',()=>{
        expect(getSeven(77)).toBe(77)
    })
    it('given 6 when call getSeven then return 6 is smaller than 7',()=>{
        expect(getSeven(6)).toBe('6 is smaller than 7')
    })
    it('given 121 when call getSeven then return 119',()=>{
        expect(getSeven(121)).toBe(119)
    })
    it('given 100 when call getSeven then return 98',()=>{
        expect(getSeven(100)).toBe(98)
    })
})