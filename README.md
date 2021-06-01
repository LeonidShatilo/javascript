# frontend-lab

### Task 1. Type Comparison

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-01-type-comparison/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-01-type-comparison)

Make an analysis of strict and non-strict comparison operators, as well as mathematical calculations between different data types.

---

### Task 2. Object Gauss

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-02-object-gauss/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-02-object-gauss)

The following function is provided:

```javascript
function randn_bm() {
  let u = 0;
  let v = 0;

  while (u === 0) {
    u = Math.random();
  }
  while (v === 0) {
    v = Math.random();
  }

  return (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2) | 0;
}
```

- Generate 10 numbers using the provided function `randn_bm`.
- Create an object with the keys associated with the generated numbers and the value as the number of corresponding numbers.
- Example of object: `{ 0: 5, 1: 3, 2: 2 }`.
- Visualize the distribution of the numbers.

---

### Task 3. Sum of Range

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-03-sum-of-range/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-03-sum-of-range)

- Implement function `range(min, max)` that can return sum of integer numbers in range [min, max].
- Consider edge cases: result is greater than `Number.MAX_SAFE_INTEGER`, argument is not a number, min > max, etc.
- **\* An additional assignment:** For performance reason add memoization mechanism.

---

### Task 4. Memory Managment

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-04-memory-managment/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-04-memory-managment)

- Implement a function that leads to the stack overflow issue.
- Implement a function that can affect memory leak issue.

---

### Task 5. Inheritance

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-05-inheritance/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-05-inheritance)

- Describe base class Entity that can store name.
- Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to a user.
- Add examples of usage of these classes, e.g., create some instances, display data related to them.

---

### Task 6. Arrays

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-06-arrays/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-06-arrays)

The Russian quote is given. Find most frequent letters.

`Пора перестать ждать неожиданных подарков от жизни, а самому делать жизнь.`

---

### Task 7. Tic-Tac-Toe

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-07-tic-tac-toe/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-07-tic-tac-toe)

- Using JavaScript constructs on page Tic-Tac-Toe layout.
- Add possibility to interact with layout by mouse click (add «X» or «O»).
- Add a module that can write down on page game result (1st win, 2nd win, or draw).

---

### Task 8. Table

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-08-table/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-08-table)

- Add to HTML page table with header and some rows.
- Add to header event listener to implement sorting functionality across the table data (alphabetical).
- Add to cells user interaction feature (click and edit text).

---

### Task 9. Asynchrony

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-09-asynchrony/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-09-asynchrony)

- Develop 4 function that can perform operations `+, -, *, /` but return result with some random delay (> than 1 sec).
- Create stack calculation module that can interact with mentioned before functions and handle Reverse Polish Notation input.
- Calculate `1 2 + 3 * 4 +`.

---

### Task 10. Network Interaction

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-10-network-interaction/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-10-network-interaction)

- Develop a page with two dropdowns «Base» and «Symbol».
- Values of selections should invoke render of currency rates from https://free.currencyconverterapi.com/ (link on the documentation https://www.currencyconverterapi.com/docs).
- Handle possible error cases.

---

### Task 11. Babel Compiler

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-11-babel-compiler/dist/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-11-babel-compiler)

- Convert your code from the previous task by the Babel transpiler to ES5 version.
- Check working status of app for different browsers.

---

### Task 12. Modules

[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-12-modules)

- Split your code from the previous task to some modules (at least 2).
- Implement dynamic import for a module.

For the demonstration you need to clone the repository, install the dependencies for this task and start the server.

```shell
$ git clone https://github.com/LeonidShatilo/frontend-lab
$ cd frontend-lab/task-12-modules
$ npm install
$ npm run start
```

---

### Task 13. Storage

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-13-storage/)
[![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-13-storage)

Develop a page with the stored state that can «restore» user name and predefined theme (light or dark).
