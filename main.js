subject = ["turtle", "dog", "cat", "bird", "student", "teacher", "car", "house", "tree", "computer", "mountain", "city", "book", "chef", "artist"];
vowel_subject = ["actor", "apple", "elephant", "idea", "island", "orange", "umbrella", "octopus", "ice", "engine", "omelet"];

verb = ["run", "jump", "swim", "read", "write", "eat", "sleep", "speak", "sing", "dance", "study", "draw", "cook", "drive", "play"];

object = ["ball", "book", "pen", "phone", "computer", "car", "table", "chair", "bag", "bottle", "watch", "key", "hat", "shoe", "lamp"];
vowel_object = ["apple", "elephant", "ice", "umbrella", "orange", "engine", "oven", "island", "ink", "egg"];

const message = () => {
    choice = Math.ceil(Math.random() * 4)

    if (choice === 1) {
        let subjectWord = subject[Math.ceil(Math.random() * (subject.length)) - 1];
        let verbWord = verb[Math.ceil(Math.random() * (verb.length)) - 1];
        let objectWord = object[Math.ceil(Math.random() * (object.length)) - 1];

        console.log(`A ${subjectWord} may ${verbWord} like a ${objectWord}`);
    } else if (choice === 2) {
        let subjectWord = vowel_subject[Math.ceil(Math.random() * (vowel_subject.length)) - 1];
        let verbWord = verb[Math.ceil(Math.random() * (verb.length)) - 1];
        let objectWord = object[Math.ceil(Math.random() * (object.length)) - 1];

        console.log(`An ${subjectWord} may ${verbWord} like a ${objectWord}`);
    } else if (choice === 3) {
        let subjectWord = subject[Math.ceil(Math.random() * (subject.length)) - 1];
        let verbWord = verb[Math.ceil(Math.random() * (verb.length)) - 1];
        let objectWord = vowel_object[Math.ceil(Math.random() * (vowel_object.length)) - 1];

        console.log(`A ${subjectWord} may ${verbWord} like an ${objectWord}`);
    } else if (choice === 4) {
        let subjectWord = vowel_subject[Math.ceil(Math.random() * (vowel_subject.length)) - 1];
        let verbWord = verb[Math.ceil(Math.random() * (verb.length)) - 1];
        let objectWord = vowel_object[Math.ceil(Math.random() * (vowel_object.length)) - 1];

        console.log(`An ${subjectWord} may ${verbWord} like an ${objectWord}`);
    }
}

message();
