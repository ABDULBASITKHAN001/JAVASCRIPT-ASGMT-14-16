console.log("HELLO-WORLD:");

// CHAP 14-16 
console.log("");
console.log("1");
// QUESTION NUMBER 01 : /////////////////////////////////////////////////////////////////////////////////////
// Declaring an empty array for storing student names
console.log("Declaring an empty array for storing student names :");
var Student_Names = [];
Student_Names.push("BASIT");
Student_Names.push("KHAN");

console.log(Student_Names); // OUTPUT : "BASIT" "KHAN"


console.log("");
console.log("2");
// QUESTION NUNMBER 02 : Declare an empty array using object notation //////////////////////////////////////
console.log("Declare an empty array using object notation :");
var  studentNames = new Array();

studentNames.push ("BASIT");
studentNames.push ("KHAN");
console.log(studentNames)


console.log("");
console.log("3");
// QUESTION NUMBER 03 : Declaring  and initializing a strings array. /////////////////////////////////////////
console.log(" Declaring and Initializing a Strings Array :");
var names = ["ABDUL" , "BASIT" , "KHURRAM" ,"KHAN"];
 console.log(names)


 console.log("");
 console.log("4");
 // QUESTION NUMBER 04 : DECLARING AND INITIALIZIGN A NUMBERS ARRAY. ///////////////////////////////////////
 console.log(" Declaring and Initializing a Numbers Array :");
 var numbers = ["1" , "2" , "3" , "4" , "5"];
 console.log(numbers);


 console.log("");
 console.log("5");
 // QUESTION NUMBER  05 : DECLARING AND INITIALIZING A BOOLEAN ARRAY. ///////////////////////////////////////
 var boolean = ["TRUE" , "FALSE" , "TRUE" , "FALSE" , "TRUE"];
 console.log(boolean);


 console.log("");
 console.log("6");
 // QUESTION NUMBER 06 : DECLARING AND INITIALIZING A MIXED ARRAY. //////////////////////////////////////////
 var mixed = ["1" , "BASIT" , "TRUE" , "FALSE" , "2" , "KHAN"];
 console.log(mixed);


 console.log("");
 console.log("7");
 // QUESTION NUMBER 07 : DECLARING AND INITIALIZING PAKISTAN QUALIFICATIONS : //////////////////////////////
 console.log("DECLARING AND INITIALIZING PAKISTAN QUALIFICATIONS :");
 var QUALIFICATIONS = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
 for (var i=0 ; i < QUALIFICATIONS.length ; i++){
    console.log((i+1) + ") "  + QUALIFICATIONS[i] + "br");
 }


 console.log("");
 console.log("8");
 // QUESTION NUMBER 08 : TO SHOW THE MARKSHEET OF STUDENTS: /////////////////////////////////////////////////////
 console.log("TO SHOW THE MARKSHEET OF STUDENTS : ");
 var students = ["AYAN" , "ADIL" , "BASIT"];
 var student_score = ["355" , "277" , " 492"];
var total_marks = 500;

function calculatePercentage(score) {
    return (score / total_marks) * 100;
}
for(var i=0 ; i < students.length ; i++ ){
    var score = student_score[i];
        var percentage = calculatePercentage(score).toFixed(2);
        console.log("Score of  " ,  students[i] ,  "is: " ,  score+"." ,   "Percentage:" ,percentage )
}


console.log("");
console.log("9");
// QUESTION NUMBER 09 : // Store student scores in an array : //////////////////////////////////////////////////
console.log("Store Student Scores In An Array")
var  studentScores = [320, 230, 480, 120];

// Output the original scores to the console
console.log("Original Scores of Students:", studentScores);

// Sort the array in ascending order
studentScores.sort((a, b) => a - b);

// Output the sorted scores to the console
console.log("Ordered Scores of Students:", studentScores);


console.log("");
console.log("10");
// QUESTION NUMBER 10 : TAKING OUTPUT OF SELECTED CITIES FROM INPUT : //////////////////////////////////////////
console.log("TAKING OUTPUT OF SELECTED CITIES FROM INPUT:");
var cities = ["LAHORE" , "KARACHI" , "ISLAMABAD" , "QUETTA" , "PESHAWAR"];
var selected_cities = cities.slice(1,4);

console.log("ORIGNAL CITIES :" ,cities);
console.log("SELECTED CITIES : " ,selected_cities)


console.log("");
console.log("11");
// QUESTION NUMBER 11 : // Array of strings : ////////////////////////////////////////////////////////////////
console.log("JOINING ALL STRINGS TOGETER:")
var arr = ["This ", " is ", " my ", " cat"];
var single_string = arr.join('');

console.log("ARRAY: ", arr);
console.log("SRINGS:" , single_string);


console.log("");
console.log("12");
// QUESTION NUMBER 12 : ARRAY (FIFO) FIRST IN - FIRST OUT
console.log("ARRAY (FIFO) FIRST IN - FIRST OUT");
// Initialize an empty queue
let queue = [];

// Enqueue (add) elements to the queue
queue.push("keyboard");
queue.push("mouse");
queue.push("printer");
queue.push("monitor");

// Function to dequeue (remove) and log the removed element to console
function dequeue() {
    if (queue.length > 0) {
        let removedElement = queue.shift(); // Removes the first element
        console.log(`Out: ${removedElement}`);
    } else {
        console.log("Queue is empty");
    }
}

// Process the queue until all elements are removed
dequeue(); // Logs: Out: keyboard
dequeue(); // Logs: Out: mouse
dequeue(); // Logs: Out: printer
dequeue(); // Logs: Out: monitor
dequeue(); // Logs: Queue is empty


////////////////////////////////////... CHAPTER 14-16 COMPLETED ...\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 