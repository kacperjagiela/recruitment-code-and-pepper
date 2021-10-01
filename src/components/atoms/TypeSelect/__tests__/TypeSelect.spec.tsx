import { render } from '@testing-library/react';

import { TypeSelect } from '..';

describe('<TypeSelect />', () => {
    it('renders correctly', () => {
        const { container } = render(<TypeSelect options={['a']} onChange={jest.fn} label="test" />);

        expect(container).toMatchSnapshot();
    });
});
