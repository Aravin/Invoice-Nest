export function numberToCurrency(num: number | string): string {
    if (num === null || num === '' ){
        return '0.00'
    }
    if (typeof num === 'number') {
        return num.toFixed(2);
    } 

    return num;
}