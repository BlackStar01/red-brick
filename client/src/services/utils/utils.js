export const check_plural = (number, word) => {
    if(number <= 1) {
        return word
    }
    else{
        return word+'s'
    }
}

export const check_number = (number) => {
    if(number < 10 && number > 0) {
        return parseInt('0' + number)
        
    }
    else{
        return number
    }
}