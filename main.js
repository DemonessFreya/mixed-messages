subject = ["turtle", "dog", "cat", "bird", "student", "teacher", "car", "house", "tree", "computer", "mountain", "city", "book", "actor", "chef", "artist"];
verb = ["run", "jump", "swim", "read", "write", "eat", "sleep", "speak", "sing", "dance", "study", "draw", "cook", "drive", "play"];
object = ["ball", "book", "pen", "phone", "computer", "car", "table", "chair", "bag", "bottle", "watch", "key", "hat", "shoe", "lamp"];

const message = () => {
    let subjectWord = subject[Math.ceil(Math.random() * (subject.length)) - 1];
    let verbWord = verb[Math.ceil(Math.random() * (verb.length)) - 1];
    let objectWord = object[Math.ceil(Math.random() * (object.length)) - 1];

    console.log(`A(n) ${subjectWord} may ${verbWord} like a ${objectWord}`);
}

message();
