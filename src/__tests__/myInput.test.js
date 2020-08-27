import React from 'react'
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyInput from '../component/myInput'

Enzyme.configure({ adapter: new Adapter() });

it('Validate attributes of the TextInput', () => {
    const values = {
        label: 'test',
        defaultValue: 'testValue'
    }
    const wrapper = mount(<MyInput {...values} />);
    expect(wrapper.find('label').text()).toBe('test');
    expect(wrapper.find('input').prop('defaultValue')).toBe('testValue');
});

it('Can not render label When label is null', () => {
    const wrapper = mount(<MyInput />);
    expect(wrapper.find('label').length).toBe(0);
});

it('Render label When label is not null', () => {
    const wrapper = mount(<MyInput label='up' />);
    expect(wrapper.find('label').length).toBe(1);
});

it('Validate onChange event of the TextInput', () => {
    let temp = '';
    const props = {
        onChange: function (value) {
            temp = value;
        }
    }
    const wrapper = mount(<MyInput {...props} value='testValue' />);
    let input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Changed' } });
    expect(temp).toBe('Changed');
});
