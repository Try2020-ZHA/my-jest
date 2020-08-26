import renderer from 'react-test-renderer';
import Contest from '../component/contest';
import React from 'react';

describe('the contest is rendered correctly',()=>{
    test('render it',()=>{
        const attr={id:1,text:'this is a test',done:true};
        const result=renderer.create(<Contest attr={attr}></Contest>);
        expect(result.toJSON()).toMatchSnapshot();
    })
})