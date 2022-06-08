export const check_plural = (number, word) => {
    if(number <= 1) {
        return word
    }
    else{
        return word+'s'
    }
}