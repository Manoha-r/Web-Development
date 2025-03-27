// 1. Promise.all() -> If one promise fails, the whole Promise.all() rejects.
let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p1 resolved");
    }, 1000);
});

let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p2 resolved");
    }, 1000);
});

let p3 = new Promise((resolve, reject) => {
    let success = false;
    setTimeout(() => {
        if (success) {
            resolve("p3 resolved");
        } else {
            reject("p3 was not saved");
        }
    }, 1000);
});

// 1. Promise.all()
Promise.all([p1, p2, p3])
    .then((msg) => {
        console.log("Promise.all resolved:", msg);
    })
    .catch((msg) => {
        console.log("Promise.all rejected:", msg); // ❌ One failure causes rejection
    });

// 2. Promise.race() -> Returns the first resolved or rejected promise
Promise.race([p1, p2, p3])
    .then((msg) => {
        console.log("Promise.race resolved:", msg);
    })
    .catch((msg) => {
        console.log("Promise.race rejected:", msg);
    });

// 3. Promise.allSettled() -> Returns all promise results (fulfilled or rejected)
Promise.allSettled([p1, p2, p3])
    .then((result) => {
        console.log("Promise.allSettled:", result);
    });

// 4. Promise.any() -> Returns the first successful resolved promise
Promise.any([p1, p2, p3])
    .then((result) => {
        console.log("Promise.any resolved:", result);
    })
    .catch((error) => {
        console.log("Promise.any failed:", error); // If all fail, it returns AggregateError
    });
