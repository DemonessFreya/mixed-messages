subject = ['turtle', 'pig'];
verb = ['run', 'steal'];
object = ['loser', 'winner'];

const message = () => {
    let subjectWord = subject[Math.ceil(Math.random() * (subject.length)) - 1];
    let verbWord = verb[Math.ceil(Math.random() * (verb.length)) - 1];
    let objectWord = object[Math.ceil(Math.random() * (object.length)) - 1];

    console.log(`Hello ${subjectWord}, you ${verbWord} like a ${objectWord}`);
}

message();
