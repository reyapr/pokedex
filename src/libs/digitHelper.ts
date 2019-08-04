export const digitHelper = (num: number | string) => {
  let stringNum = num.toString()
  let number = stringNum.length || 0
  let result = stringNum
  while(number < 3){
    result = '0' + result
    number++
  }
  return result
}