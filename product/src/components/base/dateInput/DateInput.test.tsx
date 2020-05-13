import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { DateInputProps, DateInput } from './DateInput';

configure({ adapter: new Adapter() });

const defaultProps: DateInputProps = {
    text: 'test',
    onHandle: jest.fn(),
};

const setup = (props: Partial<DateInputProps> = {}) =>
    shallow(<DateInput {...{ ...defaultProps, ...props }} />);

describe('DateInput', () => {
    it('should render', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have correct className date-input', () => {
        const wrapper = setup();
        expect(wrapper.hasClass('date-input')).toBeTruthy();
        // todo
        // find children
    });

    it('should selected DateInput', () => {
        const onChange = jest.fn();
        const props: DateInputProps = {
            text: 'XXXXX',
            onHandle: onChange,
        };
        const wrapper = setup(props);
        const dateInput = wrapper.find('input');
        dateInput.simulate('change', { target: { value : 'YYY'} });
        expect(onChange).toHaveBeenCalledWith('YYY');
    });


});
