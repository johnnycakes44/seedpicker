let bip39 = require('bip39')

function calculate() {
  var suppliedSeedPhrase = document.getElementById('seedphrase_ta').value
  var wordCount = suppliedSeedPhrase.trim().split(" ").length
  if(wordCount != 11 && wordCount != 23) {
    alert("Please enter 11 or 23 words. (You entered " + wordCount + ")")
  } else {
    for (var index = 1; index <= 2048; index++) {
      var current = bip39.wordlists.EN[index-1]
      var candidate = suppliedSeedPhrase.trim() + " " + current
      try {
        bip39.mnemonicToEntropy(candidate)  
        //TODO Find all matching words and randomize 
        alert("Your last word is : \"" + current + "\"")
        break
      } catch {
        //do nothing
      } 
    }  
  }
}

module.exports.calculate = calculate;