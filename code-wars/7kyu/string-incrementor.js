// String incrementer

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.




// MY CODE

function incrementString (strng) {
    // return incrementedString
    // check if ends with int
    if (parseInt(strng[strng.length - 1]) === NaN) {
        return strng.concat(1)
      }
    let arr = strng.split(/([0-9]+)/)
  //   let newInt = parseInt(arr[1]) + 1
    console.log("arr:", arr)
    // split int into array of ints
    let intArr = arr[1].split("")
    console.log("intArr: ", intArr)
    for (let i = intArr.length - 1; i >= 0; i--) {
      console.log("intIndex: ", i)
      console.log("intArr[i]: ", intArr[i])
      console.log("Parsed: ", parseInt(intArr[i]))
      if (parseInt(intArr[i]) < 9) {
        intArr[i] = parseInt(intArr[i] + 1)
        console.log("simple add: ", intArr)
        break
      } else {
        intArr[i] = 0
        console.log("next index: ", parseInt(intArr[i - 1]))
        console.log(parseInt(intArr[i - 1]) === NaN)
        if (parseInt(intArr[i - 1]) === NaN) {
          console.log("unshifting")
          intArr.unshift(1)
          break
        } else continue
      }
    }
    
    console.log("attempt:", arr[0].concat(intArr.join(""))) 
    return arr[0].concat(intArr.join(""))
  }



//   DOES NOT WORK AND I DON'T KNOW WHY!!!!!  >.<