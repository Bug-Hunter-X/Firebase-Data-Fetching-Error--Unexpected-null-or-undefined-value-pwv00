# Firebase Data Fetching Error: Unexpected null or undefined

This repository demonstrates a common error encountered when fetching data from Firebase Realtime Database and handling potential null or undefined values.

The `bug.js` file shows the problematic code. It attempts to access nested properties of the data fetched from Firebase without proper null checks. This leads to unexpected errors if the data structure is different from what is anticipated.

The `bugSolution.js` provides the corrected code that uses optional chaining and nullish coalescing to gracefully handle missing or undefined values.

## Steps to Reproduce

1.  Set up a Firebase project and create a Realtime Database.
2.  Populate the database with sample data. Adjust the code in `bug.js` to reflect the structure of your data.
3.  Run the `bug.js` file. You'll likely encounter an error if the expected properties are not present in the fetched data.
4.  Run the `bugSolution.js` file to see how to handle null or undefined values safely.

## How to Solve the Error

This error arises when a program attempts to access a property of an object that is either null or undefined. To resolve this, you need to implement proper null checks. One of the best way is using optional chaining (?.) and nullish coalescing (??).
