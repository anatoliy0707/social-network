export const required = (value: string | null) => {
    debugger
    if (value) {
        return undefined
    }

    return "Field is required!"
};


export const maxLengthCreator = (length: number) => (value: string | null) => {
    debugger
    if (value && value.length > length) {
        return `Max length is ${length} symbol`
    }
    return undefined
};