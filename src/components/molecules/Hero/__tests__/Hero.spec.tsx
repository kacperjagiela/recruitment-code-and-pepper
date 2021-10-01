import { render } from '@testing-library/react';

import { Hero } from '..';

describe('<Hero />', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Hero
                peopleAttributes={['a']}
                starShipsAttributes={['b']}
                onBattleTypeChange={jest.fn}
                onAttributeChange={jest.fn}
                onFightClick={jest.fn}
                currentAttribute=""
                currentBattleType=""
            />,
        );

        expect(container).toMatchSnapshot();
    });

    it('renders select for person attribute', () => {
        const { getByLabelText } = render(
            <Hero
                peopleAttributes={['a']}
                starShipsAttributes={['b']}
                onBattleTypeChange={jest.fn}
                onAttributeChange={jest.fn}
                onFightClick={jest.fn}
                currentAttribute=""
                currentBattleType="person"
            />,
        );

        expect(getByLabelText('Choose person attribute')).toBeInTheDocument();
    });
    it('renders select for starship attribute', () => {
        const { getByLabelText } = render(
            <Hero
                peopleAttributes={['a']}
                starShipsAttributes={['b']}
                onBattleTypeChange={jest.fn}
                onAttributeChange={jest.fn}
                onFightClick={jest.fn}
                currentAttribute=""
                currentBattleType="starships"
            />,
        );

        expect(getByLabelText('Choose starship attribute')).toBeInTheDocument();
    });
});
