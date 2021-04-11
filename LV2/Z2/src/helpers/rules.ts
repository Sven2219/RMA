export const required = (message: string) => {
    return {
        value: true,
        message,
    }
}

export const pattern = (value: RegExp, message: string) => {
    return{
        value,
        message,
    }
}
