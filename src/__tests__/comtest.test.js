import ComTest from '../component/contest';
import {mount} from 'enzyme';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('contest calls doneClick when the button is clicked',()=>{
    const attr={id:1,text:'this is a test',done:true};
    const doneClick=jest.fn();
    const wrapper=mount(<ComTest attr={attr} doneClick={doneClick}/>);

    const button=wrapper.find('.trueDone');
    button.simulate('click');
    expect(doneClick).toBeCalledWith(true);
    
})