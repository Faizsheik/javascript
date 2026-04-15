
//constructor function. 

function studentdetails (id,name,course,marks)
{
    this.id = id,
    this.name = name,
    this.course = course,
    this.marks = marks
}

//studentDB
const studentDb = {};

function addStudentDetails (id,name,course,marks)
{
    const studobj = new studentdetails(id,name,course,marks);
    studentDb[id] = studobj; //used to create object with id as property
    console.log(`student with id ${id} was created`);
}

addStudentDetails(1,"Faiz","MCA",8);
addStudentDetails(2,"Jesi","MCA",9);
addStudentDetails(3,"Jeni","MCA",9);
addStudentDetails(4,"sheik","MCA",2);


console.log(studentDb);


//Display all student details. 

function getAllStudentDetails()
{
    const result = Object.values(studentDb);
    console.log("List All Student Details");
    result.forEach((element)=>{
         console.log(`Student name: ${element.name} Course: ${element.course} Marks: ${element.marks}`);

    })
   // console.log("values from studentDb object",result);
}

getAllStudentDetails();

//Update a particulat student details with their ID

function updateStudentDetail(id,updmarks)
{
    console.log("Student database after updated mark for particular student");
    studentDb[id].marks = updmarks;

}

updateStudentDetail(1,7);
console.log(studentDb);

//list all the student who marks >7
var resultarray = [];
function studentfilter()
{
    const result = Object.values(studentDb);
    console.log("res",result);
    resultarray = result.filter((element)=>element.marks>7);
    
}
studentfilter();
console.log(resultarray);

//check any failed student <5

var failed = "";
function hasFailed()
{
    const result=Object.values(studentDb);
    failed = result.some((element)=> element.marks<5);
    return failed;

   // if(failed === true){console.log(`Failed student is ${element.name}`)};
}
hasFailed();
console.log(studentDb);
console.log("check",failed);

if (failed == true)
{
    console.log("There are some failed students")
}
else
{
    console.log("There are no failed students ")
}


//find out the failes student

function failedstudent()
{
    const result = Object.values(studentDb);
    const failedstudent = result.find((e)=>e.marks<5);
    console.log(failedstudent);
    if(failedstudent)
    {
        console.log(`Failed student is ${failedstudent.name}`);
        return true;
    }
    else{
        return false;
    }
}

failedstudent();
