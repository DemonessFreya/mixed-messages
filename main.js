subject = ['turtle', 'pig'];
verb = ['run', 'steal'];
object = ['loser', 'winner'];

const message = () => {
    let subjectWord = subject[Math.ceil(Math.random() * (subject.length))];
    let verbWord = verb[Math.ceil(Math.random() * (verb.length))];
    let objectWord = object[Math.ceil(Math.random() * (object.length))];

    console.log(`Hello ${subjectWord}, you ${verbWord} like a ${objectWord}`);
}

message();
