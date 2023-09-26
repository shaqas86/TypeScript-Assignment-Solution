let current_users = ['admin', 'hammad', 'Ali', 'shaqas', 'qasim'];
let new_users = ['raqeeb', 'irfan', 'hammad', 'ali', 'sarfraz'];

for (let newUsername of new_users) {
    let usernameExists = current_users.some(currentUsername =>
        currentUsername.toLowerCase() === newUsername.toLowerCase()
    );

    if (usernameExists) {
        console.log(`The username "${newUsername}" is not available. Please choose a different username.`);
    } else {
        console.log(`The username "${newUsername}" is available.`);
    }
}