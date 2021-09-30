const parseStringToNumberOrNumberRange = (string: string): number => {
    if (string.includes('-')) {
        const splitedString = string.split('-');

        return Number(splitedString[1]);
    }

    const stringToNumber = Number(string.replace(',', ''));

    if (!Number.isNaN(stringToNumber)) {
        return stringToNumber;
    }
    return 0;
};

export default parseStringToNumberOrNumberRange;
