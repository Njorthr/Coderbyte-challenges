function PalindromeTwo(str) { 
    // regex for punctuation and removing it
    const noPunc = str.replace(/[.,\/#!$%\^&\*;:{}=\-|`~()]/g,"");
    // removing spaces and converting to lower case
    const finalStr = noPunc.replace(/\s/g,"").toLowerCase()
    // reversing
    const reversed = finalStr.split("").reverse().join("")
    // checking if two equal yes: true no: false
    if(reversed === finalStr) return true
    return false
}