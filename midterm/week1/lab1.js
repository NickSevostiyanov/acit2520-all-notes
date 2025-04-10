// 1. Insert in the box below the code required to show how many CPUs your machine has. 
// I expect the code to return a single Integer value when executed. 
// Hint: It requires the "os" module.

    console.log(navigator.hardwareConcurrency);
    // os.cpus() is the node api. 

// 2. I have a Macbook Pro 16 inch laptop with the following specs: /2 marks
// When I type the command from question 1 into a script.js file and run it with node script.js, 
// the output I got was 12. Given that my specs in the image above claim I have only 6-Cores, 
// how is this possible? Provide a screenshot from the Node.js documentation that proves your answer, 
// and paste the screenshot below. Then provide a brief explaination in the “Answer here” box below.
    // Your MacBook Pro likely supports Hyper-Threading (or a similar technology), so each of the 6 physical cores can run 2 threads, resulting in 12 logical cores.
    // Node.js uses os.cpus() to fetch the CPU information, and this function reports logical cores, not physical cores.

// 3. What is the difference between Javascript, Node.js, and Ecmascript? 
    // JavaScript is the programming language.
    // Node.js is a runtime environment for executing JavaScript outside the browser.
    // ECMAScript is the specification that defines the language features and syntax for JavaScript.

// 4. Every programming language needs what key thing in order to be able to execute?
    // Compiler: Translates the entire source code into machine code before execution.
    // Interpreter: Translates and executes the code line-by-line at runtime.

// 5. What is the difference between using the Node REPL 
// vs executing things with the node <filename.js> command? /2 marks
    // Compiler: Translates the entire source code into machine code before execution.
    // Interpreter: Translates and executes the code line-by-line at runtime.

// 6. Explain how process.argv can be used in Node.
    // process.argv allows you to access and work with the command-line arguments passed to a Node.js script.
    // This is helpful for making your Node.js applications configurable and dynamic through user input provided via the command line.


// Create a function called wordPosition which takes a list of words, 
// and returns the indices where each word shows up in the list. 
// Take a look at the comment below to see how the output should look. 
// The order of the keys in the dictionary does not matter, but the overall structure should match. 
// The values for each key are a list of integers (indices). Make sure to use modern javascript syntax. 

    const wordPosition = (words) => {
        const wordMap = {};
        
        words.forEach((word, index) => {
            if (!wordMap[word]) {
                wordMap[word] = [];
            }
            wordMap[word].push(index);
        });
        
        return wordMap	
    }


    const input = [
    "buy",
    "it",
    "use",
    "it",
    "break",
    "it",
    "fix",
    "it",
    "trash",
    "it",
    "change",
    "it",
    "mail",
    "upgrade",
    "it",
    ];

    const output = wordPosition(input);

    /*
    Output should look like so:
    {
    break: [ 4 ],
    buy: [ 0 ],
    change: [10],
    fix: [ 6 ],
    it:  [1, 3, 5, 7, 9, 11, 14],
    mail: [ 12 ],
    trash: [ 8 ],
    upgrade: [ 13 ],
    use: [ 2 ],
    }

    */