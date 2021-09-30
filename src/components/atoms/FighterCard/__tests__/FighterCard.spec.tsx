import { render } from '@testing-library/react';

import { personMock } from '~/mocks';

import { FighterCard } from '..';

describe('<FighterCard />', () => {
    it('renders correctly', () => {
        const { container } = render(<FighterCard fighter={personMock} shouldWin={false} currentAttribute="mass" />);

        expect(container).toMatchSnapshot();
    });
});
