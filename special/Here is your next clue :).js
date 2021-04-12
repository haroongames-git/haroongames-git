/*
For the next clue, you need to be sneaky.
Go back to the Developer Console and type the following in:
*/

// vvvvvvvv DON'T PUT ANYTHING IN THIS SECTION OR IT WON'T WORK. THESE ARE CLUES ON HOW TO GET THE CORRECT URL vvvvvvvv

let morse_code = new MorseCode(
  new Binary(
    "10110100 01110100 01110100 01110100 01110100 00000100 10110100 10110100 10110100 01110100 01110100"
      .split('')
      .reverse()
      .join()
   )
)

const favourite_number = new Number(
  morse_code.translate('english')
)

// ^^^^^^^^ DON'T PUT ANYTHING IN THIS SECTION OR IT WON'T WORK. THESE ARE CLUES ON HOW TO GET THE CORRECT URL ^^^^^^^^


fetch(`https://stoppeeking.cleveryouare.repl.co/clue/${favourite_number}`)
