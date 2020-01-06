<script>
  //Data sets of students
  
  var students = [
   { rollNo: 21, name: 'Alpha' }, 
	{ rollNo: 22, name: 'Beta' }, 
	{ rollNo: 23, name: 'Gamma' }, 
	{ rollNo: 24, name: 'Delta' }, 
	{ rollNo: 25, name: 'Omega'} 
  ];

var TotalStudent = students.map(function(student){
  return student.rollno;
}));

console.log(TotalStudent);
</script>
