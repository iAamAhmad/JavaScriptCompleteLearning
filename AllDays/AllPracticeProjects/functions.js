const lifePhase = age => {
   if (age < 0 || age > 140) {
      return 'This is not a valid age'
   } else if (age < 4) {
      return 'baby'
   } else if (age < 13) {
      return 'child'
   } else if (age < 20) {
      return 'teen'
   } else if (age < 65) {
      return 'adult'
   } else {
      return 'senior citizen'
   }
}
/*
// As a function declaration:
function lifePhase (age) {
   if (age < 0 || age > 140) {
      return 'This is not a valid age'
  } else if (age < 4) {
       return 'baby'
   } else if (age < 13) {
       return 'child'
   } else if (age < 20) {
      return 'teen'
   } else if (age < 65) {
      return 'adult'
   } else {
       return 'senior citizen'
   }  
}
*/
console.log(lifePhase(5)) 



const finalGrade = (midterm, final, homework) => {
   if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
       return 'You have entered an invalid grade.'
   }
   let average = (midterm + final + homework) / 3
   if (average < 60) {
       return 'F'
   }
   else if (average < 70) {
       return 'D'
   }
   else if (average < 80) {
       return 'C'
   }
   else if (average < 90) {
       return 'B'
   } else {
       return 'A'
   }
}

/*
//as a function declaration:
function finalGrade(midterm, final, homework) {
   if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
       return 'You have entered an invalid grade.'
   }
   let average = (midterm + final + homework) / 3
   if (average < 60) {
       return 'F'
   }
   else if (average < 70) {
       return 'D'
   }
   else if (average < 80) {
       return 'C'
   }
   else if (average < 90) {
       return 'B'
   } else {
       return 'A'
   }
}
*/




