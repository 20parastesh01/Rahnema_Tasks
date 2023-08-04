type Label = 'Green' | 'Blue' | 'Red' | 'Yellow';

type ToDo = {
  status: 'ToDo';
  labels: Label[];
  subject: string;
  deadLine: Date;
};

type Doing = {
  status: 'Doing';
  labels: Label[];
  subject: string;
  deadLine: Date;
  started: Date;
};

type Done = {
  status: 'Done';
  labels: Label[];
  subject: string;
  deadLine: Date;
  started: Date;
  finished: Date;
};

type Task = ToDo | Doing | Done;

const toDoList: ToDo[] = [];
const doingList: Doing[] = [];
const doneList: Done[] = [];

const allTasks = [...toDoList, ...doingList, ...doneList];

const findIndexByStatusSubject = (
  status: Task['status'],
  subject: string,
  taskList: Task[]
): number => {
  return taskList.findIndex(
    (task) => task.status === status && task.subject === subject
  );
};


// Add / Remove Tasks

const addTask = (task: Task) => {
  switch (task.status) {
    case 'ToDo':
      toDoList.push(task);
      break;

    case 'Doing':
      doingList.push(task);
      break;

    case 'Done':
      doneList.push(task);
      break;
  }
};

const removeTask = (status: Task['status'], subject: string) => {
  switch (status) {
    case 'ToDo':
      const taskIndexToDo = findIndexByStatusSubject(status, subject, toDoList);
      toDoList.splice(taskIndexToDo, taskIndexToDo + 1);
      break;

    case 'Doing':
      const taskIndexDoing = findIndexByStatusSubject(
        status,
        subject,
        doingList
      );
      doingList.splice(taskIndexDoing, taskIndexDoing + 1);
      break;

    case 'Done':
      const taskIndexDone = findIndexByStatusSubject(status, subject, doneList);
      doneList.splice(taskIndexDone, taskIndexDone + 1);
      break;
  }
};


// Add / Remove Labels

const addLabel = (status: Task['status'], subject: string, label: Label) => {
  switch (status) {
    case 'ToDo':
      const taskIndexToDo = findIndexByStatusSubject(status, subject, toDoList);
      toDoList[taskIndexToDo].labels.push(label);
      break;

    case 'Doing':
      const taskIndexDoing = findIndexByStatusSubject(
        status,
        subject,
        doingList
      );
      doingList[taskIndexDoing].labels.push(label);
      break;

    case 'Done':
      const taskIndexDone = findIndexByStatusSubject(status, subject, doneList);
      doneList[taskIndexDone].labels.push(label);
      break;
  }
};

const removeLabel = (status: Task['status'], subject: string, label: Label) => {
  switch (status) {
    case 'ToDo':
      const taskIndexToDo = findIndexByStatusSubject(status, subject, toDoList);
      doneList[taskIndexToDo].labels[label].splice(
        taskIndexToDo,
        taskIndexToDo + 1
      );
      break;

    case 'Doing':
      const taskIndexDoing = findIndexByStatusSubject(
        status,
        subject,
        doingList
      );
      doingList[taskIndexDoing].labels[label].splice(
        taskIndexDoing,
        taskIndexDoing + 1
      );
      break;

    case 'Done':
      const taskIndexDone = findIndexByStatusSubject(status, subject, doneList);
      doneList[taskIndexDone].labels[label].splice(
        taskIndexDone,
        taskIndexDone + 1
      );
      break;
  }
};


// Change Status

const changeStatusToDoing = (
  status1: Task['status'],
  subject: string,
  started: Date
) => {
  switch (status1) {
    case 'ToDo':
      const taskIndexToDo = findIndexByStatusSubject(
        status1,
        subject,
        toDoList
      );
      const changedTask: Doing = {
        status: 'Doing',
        labels: toDoList[taskIndexToDo].labels,
        subject: toDoList[taskIndexToDo].subject,
        deadLine: toDoList[taskIndexToDo].deadLine,
        started: started,
      };
      doingList.push(changedTask);
      toDoList.splice(taskIndexToDo, taskIndexToDo + 1);
      break;

    case 'Done':
      const taskIndexDone = findIndexByStatusSubject(
        status1,
        subject,
        doneList
      );
      const changedTask1: Doing = {
        status: 'Doing',
        labels: toDoList[taskIndexDone].labels,
        subject: toDoList[taskIndexDone].subject,
        deadLine: toDoList[taskIndexDone].deadLine,
        started: started,
      };
      doingList.push(changedTask1);
      doneList.splice(taskIndexDone, taskIndexDone + 1);
  }
};

const changeStatusToDone = (
  status1: Task['status'],
  subject: string,
  started: Date,
  finished: Date
) => {
  switch (status1) {
    case 'ToDo':
      const taskIndexToDo1 = findIndexByStatusSubject(
        status1,
        subject,
        toDoList
      );
      const changedTask: Done = {
        status: 'Done',
        labels: toDoList[taskIndexToDo1].labels,
        subject: toDoList[taskIndexToDo1].subject,
        deadLine: toDoList[taskIndexToDo1].deadLine,
        started: started,
        finished: finished,
      };
      doneList.push(changedTask);
      toDoList.splice(taskIndexToDo1, taskIndexToDo1 + 1);
      break;
    case 'Doing':
      const taskIndexDoing1 = findIndexByStatusSubject(
        status1,
        subject,
        toDoList
      );
      const changedTask1: Done = {
        status: 'Done',
        labels: toDoList[taskIndexDoing1].labels,
        subject: toDoList[taskIndexDoing1].subject,
        deadLine: toDoList[taskIndexDoing1].deadLine,
        started: started,
        finished: finished,
      };
      doneList.push(changedTask1);
      doingList.splice(taskIndexDoing1, taskIndexDoing1 + 1);
      break;
  }
};

const changeStatusToDo = (status1: Task['status'], subject: string) => {
  switch (status1) {
    case 'Doing':
      const taskIndexDoing = findIndexByStatusSubject(
        status1,
        subject,
        toDoList
      );
      const changedTask: ToDo = {
        status: 'ToDo',
        labels: toDoList[taskIndexDoing].labels,
        subject: toDoList[taskIndexDoing].subject,
        deadLine: toDoList[taskIndexDoing].deadLine,
      };
      toDoList.push(changedTask);
      doingList.splice(taskIndexDoing, taskIndexDoing + 1);
      break;
    case 'Done':
      const taskIndexDoing1 = findIndexByStatusSubject(
        status1,
        subject,
        toDoList
      );
      const changedTask1: ToDo = {
        status: 'ToDo',
        labels: toDoList[taskIndexDoing1].labels,
        subject: toDoList[taskIndexDoing1].subject,
        deadLine: toDoList[taskIndexDoing1].deadLine,
      };
      toDoList.push(changedTask1);
      doneList.splice(taskIndexDoing1, taskIndexDoing1 + 1);
      break;
  }
};


// Filter By Status / Subject / Label

const filterByStatus = (status: Task['status']) => {
  switch (status) {
    case 'ToDo':
      return toDoList;

    case 'Doing':
      return doingList;

    case 'Done':
      return doneList;
  }
};

const filterBySubject = (subject: Task['subject']) => {
  const filteredList = [...toDoList, ...doingList, ...doneList].filter(
    (task) => task.subject === subject
  );

  return filteredList;
};

const filterByLabel = (label: Label): Task[] => {
  const filteredList = [...toDoList, ...doingList, ...doneList].filter((task) =>
    task.labels.includes(label)
  );

  return filteredList;
};

const newToDoTask: ToDo = {
  status: 'ToDo',
  labels: ['Green'],
  subject: 'Study Algebra',
  deadLine: new Date('2023-08-31'),
};

const newDoingTask: Doing = {
  status: 'Doing',
  labels: ['Yellow', 'Green'],
  subject: 'Crash Course',
  deadLine: new Date('2023-08-10'),
  started: new Date('2023-08-4'),
};

console.log(toDoList);

addTask(newToDoTask);
console.log('New Task Added List Successfully : ', toDoList);

addTask(newDoingTask);

// removeTask('ToDo', 'Buy groceries');
// console.log('Task Removed From List Successfully : ', toDoList);

// addLabel('Doing', 'Crash Course', 'Red');
// // error
// console.log('Label Added Successfully : ', doingList);

// const subjectToFilter = 'Crash Course';
// const labelToFilter = 'Green';

// const filteredTasksBySubject = filterBySubject(subjectToFilter);
// const filteredTasksByLabel = filterByLabel(labelToFilter);

// console.log("Filtered tasks by Subject:", filteredTasksBySubject);
// console.log("Filtered tasks by Label:", filteredTasksByLabel);



