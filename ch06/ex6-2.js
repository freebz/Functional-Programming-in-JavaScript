// 6.2 Challenges of testing imperative programs

// 6.2.1 Difficulty identifying and decomposing tasks

// 6.2.2 Dependency on shared resources leads to inconsistent results

var counter = 0;  // (global)

function increment() {
    return ++counter;
}


// 6.2.3 Predefined order of execution
