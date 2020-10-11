import React from 'react';
import Button from '../button/button';
import { shallow, ShallowWrapper } from 'enzyme'


describe('<Button />', () => {
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    let mockFunction: jest.Mock<any, any>;
    beforeEach(() => {
        const buttonText = 'test text';
        mockFunction = jest.fn();
        wrapper = shallow(<Button text={buttonText} onClick={mockFunction}/>);
    })
    it('should render the Button without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should have a button defined', () => {
        expect(wrapper.find('button').length).toBe(1);
    });

    it('should show a button with the text passed to it', () => {
        expect(wrapper.find('button').text()).toBe('test text');
    });

    it('should have a button with the prop passed to it', () => {
        expect(wrapper.find('button').prop('onClick')).toBe(mockFunction);
    });
    it('should have a button with the prop passed to it', () => {
        wrapper.find('button').simulate('click');
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});

