import NumberRange from 'types/NumberRange';

const parseStringToNumberOrNumberRange = (string: string): number | NumberRange | null => {
    if (string.includes('-')) {
        const splitedString = string.split('-');

        return { from: Number(splitedString[0]), to: Number(splitedString[1]) } as NumberRange;
    }
    const stringToNumber = Number(string.replace(',', ''));
    if (!Number.isNaN(stringToNumber)) {
        return stringToNumber;
    }
    return null;
};

export default parseStringToNumberOrNumberRange;
