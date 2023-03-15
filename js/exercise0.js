import {inputValidation as userValidation} from "./validation.js";
//Дано масив, який містить оцінки з К предметів.
// Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), 
// хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).


const getStudentGrades = () => {
    const NUMBER_OF_SUBJECTS = userValidation('Enter a count of subjects(1-30)',1,30)
    let studentGrades = [];
    for (let numberOfGrades = 0; numberOfGrades < NUMBER_OF_SUBJECTS; numberOfGrades++){
        const STUDENT_GRADES = userValidation('Enter a student grade: ',0,5);
        studentGrades.push(STUDENT_GRADES)
    }
    return studentGrades;
}

const getAverageGrade = (...studentGrades) => {
    let gradesSum = 0;
    for (let grade of studentGrades){
        gradesSum += grade;
    }
    return gradesSum / studentGrades.length;
}

const getMinGrade = (first= Infinity, ...studentGrades) => {
  let minValue = first;
  for (let grade of studentGrades){
      if (grade < minValue){
          minValue = grade;
      }
  }
  return minValue;
}

const getStudentCategory = (studentGrades) => {
    let categoryDiv = document.createElement('p')
    let category;
    switch (studentGrades) {
        case 3:
            category = 'This is medium student'
            break;
        case 4:
            category = 'This is good student'
            break;
        case 5:
            category = 'This is ideal student';
            break;
        default:
            category = 'This is poor student';
    }
    categoryDiv.textContent = `Average grade is ${ AVERAGE_GRADE.toFixed(1) }. ${ category }.`
    document.body.appendChild(categoryDiv)
}

const STUDENT_GRADES = getStudentGrades()
const MIN_STUDENT_GRADE = getMinGrade(...STUDENT_GRADES)
const AVERAGE_GRADE = getAverageGrade(...STUDENT_GRADES);

getStudentCategory(MIN_STUDENT_GRADE)
