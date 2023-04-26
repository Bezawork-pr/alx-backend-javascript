interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to director tasks";
    }
}
class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home";
    }
    getCoffeeBreak() {
        return "Cannot have a break";
    }
    workTeacherTasks() {
        return "Getting to work";
    }
}
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary == "number" && salary < 500) {
    return new Teacher;
  }
  return new Director;
  }
  //console.log(createEmployee(200));

//console.log(createEmployee(1000));

//console.log(createEmployee('$500'));
function isDirector(employee: TeacherInterface | DirectorInterface): true | false {
    if (employee instanceof Director) {
        true
    }
    return false;

    }
    function executeWork(employee: TeacherInterface | DirectorInterface): string {
    let output;
    console.log(employee);
    if (isDirector(employee) === true) {
      output = employee.workTask();
    } else {
        output = employee.workTask();
    }
    return output;

}
//console.log(executeWork(createEmployee(200)));

