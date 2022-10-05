export default function isValid(letter) {
	const regex2= /(?:(?<=\().+?(?=\)))/gm;
  
    if(letter.includes("{") ||letter.includes("[")  || letter.includes("()")  ){
        return false
}else{
  return regex2.test(letter)
}
}