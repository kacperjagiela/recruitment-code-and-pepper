import { render } from '@testing-library/react';

import personMock from '~/mocks/personMock';
import starShipMock from '~/mocks/starShipMock';

import { FighterCard } from '..';

describe('<FighterCard />', () => {
    it('renders correctly', () => {
        const { container } = render(<FighterCard fighter={personMock} shouldWin={false} currentAttribute="mass" />);

        expect(container).toMatchSnapshot();
    });

    it('renders correctly for starship', () => {
        const { container, getByText } = render(
            <FighterCard fighter={starShipMock} shouldWin={true} currentAttribute="consumables" />,
        );

        expect(getByText('1 year')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('renders current attribute on card with underline', () => {
        const { getByText } = render(
            <FighterCard fighter={starShipMock} shouldWin={true} currentAttribute="consumables" />,
        );

        expect(getByText('consumables:').closest('p')).toHaveStyle('text-decoration: underline');
    });
});
