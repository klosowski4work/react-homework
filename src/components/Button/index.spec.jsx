import React from 'react';
import renderer from 'react-test-renderer';
import { mount, simulate } from 'enzyme';
import { Button } from './';


let props;
let wrapper;
describe('Button component', () => {
    beforeEach(() => {
        props = {
            text: "test button",
            size: "small",
            color: "red",
            variation: "link",
            onClick: jest.fn()
        }
        wrapper = mount(<Button {...props} />);
    })
    it('should render component', () => {
        expect(renderer.create(<Button {...props} />).toJSON()).toMatchSnapshot();
    });
    it('check class name props', () => {
        expect(wrapper.render().hasClass('button-link')).toBeTruthy();
        expect(wrapper.render().hasClass('button-link--red')).toBeTruthy();
        expect(wrapper.render().hasClass('button-link--small')).toBeTruthy();
        expect(wrapper.render().hasClass('button--small')).toBeFalsy();
    });
    it('on click function should not be called', () => {
        expect(props.onClick.mock.calls.length).toBe(0);
    });
    it('on click function should be called', () => {
        wrapper.find('button').simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });
});