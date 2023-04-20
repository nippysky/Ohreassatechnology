// function to convert number to currency
export default function numberToCurrency(num: number) {
  if (num % 1 !== 0) {
    const convertNumToString = `${num}`;
    const getDecimalPart = convertNumToString.slice(
      convertNumToString.indexOf(".")
    );
    const truncatedNum = Math.trunc(num);
    const addCommas = truncatedNum
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const finalValue = addCommas + getDecimalPart;

    return finalValue;
  } else {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
