function rot13(str) {
  let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let arrayedString = str.split(""); //convert the string into an array
  let newArray = []; //Array that contains the decoded array.
  for(let i = 0;i < arrayedString.length;i++) //loop through array strings
  {
    let num = 0;
    if(alphabet.indexOf(arrayedString[i]) >= 13)
    {
      num = alphabet.indexOf(arrayedString[i]) - 13;
    }
    else
    {
      num = alphabet.indexOf(arrayedString[i]) + 13;
    }
     //look for the index of replacement
    if(alphabet.indexOf(arrayedString[i]) >= 0) //only accepts letters(symbols return -1)
    {
      newArray.push(alphabet[num]); 
      //changes the original string for the index of replacement
    }
    else
    {
      newArray.push(arrayedString[i]);
    }
    
  }
  let decodedString =  newArray.toString();
  let comasOut = /[,]/g;
  return decodedString.replace(comasOut,"")

}
