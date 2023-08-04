type Label = 'Green' | 'Blue' | 'Red' | 'Yellow';

type ToDo = {
    status: 'ToDo';
    label: Label[];
    subject: string;
    deadLine: Date;
}

type Doing = {
    status: 'Doing';
    label: Label[];
    subject: string;
    deadLine: Date;
    started: Date;
}

type Done = {
    status: 'Done';
    label: Label[];
    subject: string;
    deadLine: Date;
    started: Date;
    finished: Date;
}

type Task = ToDo | Doing | Done ;

