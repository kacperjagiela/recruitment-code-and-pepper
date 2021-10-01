import { render } from '@testing-library/react';

import personMock from '~/mocks/personMock';
import starShipMock from '~/mocks/starShipMock';

import { MainPage } from '..';

describe('<MainPage />', () => {
    it('renders correctly', () => {
        const { container } = render(<MainPage people={[personMock]} starShips={[starShipMock]} />);

        expect(container).toMatchSnapshot();
    });
});
