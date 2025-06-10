function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let historyStudent = new Student("John", "male", 19);
let lawStudent = new Student("Mikl", "male", 21);
let artStudent = new Student("Leah", "female", 17);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty("marks") || this.marks.length === 0) return 0;
  let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
