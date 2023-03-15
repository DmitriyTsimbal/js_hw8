//Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

const STUDENT_GRADES = [2,5,5,3,4,2,1,5,4,4,3,2,3,1,5,4];

const getStudentFGrades = (...studentGrades) => {
  let studentFGrades = 0;
  for (let grade of studentGrades){
    if (grade === 2){
       studentFGrades++;
    }
  }
  return studentFGrades;
}

const getStudentGoodGrades = (...studentGrades) => {
  let studentGoodGrades = 0;
  for (let grade of studentGrades){
      switch (grade) {
          case 4:
          case 5:
              studentGoodGrades++
              break;
      }
  }
  return studentGoodGrades;
}

const getStudentsLoverMediumGrades = (...studentGrades) => {
  let studentLoverMediumGrades = 0;
  for (let grade of studentGrades){
      if (grade < 3){
          studentLoverMediumGrades++
      }
  }
  return studentLoverMediumGrades;
}


/*
One function variant
 const getStudentGradesSort = (...studentGrades) => {
     let studentFGrades = 0;
     let studentGoodGrades = 0;
     let studentLoverMediumGrades = 0;
     for (let grade of studentGrades){
         switch (grade) {
             case 2:
                 studentFGrades++;
                 break;
             case 4:
             case 5:
                 studentGoodGrades++;
                 break;
         }
         if (grade<3){
             studentLoverMediumGrades++;
         }
     }
     return [studentFGrades, studentGoodGrades, studentLoverMediumGrades];
 }

 const STUDENTS_GRADES_SORT = getStudentGradesSort(...STUDENT_GRADES);

 const F_GRADES_COUNT = STUDENTS_GRADES_SORT[0];
 const GOOD_GRADES_COUNT = STUDENTS_GRADES_SORT[1];
 const LOVER_MEDIUM_GRADES_COUNT = STUDENTS_GRADES_SORT[2];
*/


const GOOD_GRADES_COUNT = getStudentGoodGrades(...STUDENT_GRADES);
const F_GRADES_COUNT = getStudentFGrades(...STUDENT_GRADES);
const LOVER_MEDIUM_GRADES_COUNT = getStudentsLoverMediumGrades(...STUDENT_GRADES);


document.write(`<p>Student F grades count: ${F_GRADES_COUNT}</p><hr>
<p>Student GOOD grades count: ${GOOD_GRADES_COUNT}</p><hr>
<p>Student lover-medium grades count: ${LOVER_MEDIUM_GRADES_COUNT}</p>`)