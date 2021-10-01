import { render } from '@testing-library/react';

import personMock, { secondPersonMock } from '~/mocks/personMock';
import starShipMock from '~/mocks/starShipMock';

import { Battlefront } from '..';

describe('<Battlefront />', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Battlefront
                firstDuelist={personMock}
                secondDuelist={secondPersonMock}
                currentAttribute="mass"
                currentBattleType="person"
            />,
        );

        expect(container).toMatchSnapshot();
    });

    it('renders correctly for starships', () => {
        const { container } = render(
            <Battlefront
                firstDuelist={starShipMock}
                secondDuelist={starShipMock}
                currentAttribute="length"
                currentBattleType="starships"
            />,
        );

        expect(container).toMatchSnapshot();
    });
});
