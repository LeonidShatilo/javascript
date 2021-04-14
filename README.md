# frontend-lab

### Task 1. Type Comparison

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-01-type-comparison/index) [![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-01-type-comparison)

Make an analysis of strict and non-strict comparison operators, as well as mathematical calculations between different data types.

---

### Task 2. Object Gauss

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-02-object-gauss/index) [![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-02-object-gauss)

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

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-03-sum-of-range/index) [![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-03-sum-of-range)

- Implement function `range(min, max)` that can return sum of integer numbers in range [min, max].
- Consider edge cases: result is greater than `Number.MAX_SAFE_INTEGER`, argument is not a number, min > max, etc.
- **\* An additional assignment:** For performance reason add memoization mechanism.

---

### Task 4. Memory Managment

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-04-memory-managment/index) [![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-04-memory-managment)

- Implement a function that leads to the stack overflow issue.
- Implement a function that can affect memory leak issue.

---

### Task 5. Inheritance

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-05-inheritance/index) [![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-05-inheritance)

- Describe base class Entity that can store name.
- Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to a user.
- Add examples of usage of these classes, e.g., create some instances, display data related to them.

---

### Task 6. Arrays

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-06-arrays/index) [![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-06-arrays)

The Russian quote is given. Find most frequent letters.

`Пора перестать ждать неожиданных подарков от жизни, а самому делать жизнь.`

---

### Task 7. Tic-Tac-Toe

[![DEMO](https://img.shields.io/badge/-DEMO-blue?style=flat)](https://leonidshatilo.github.io/frontend-lab/task-07-tic-tac-toe/index) [![Code Review](https://img.shields.io/badge/-Code_Review-orange?style=flat)](https://github.com/LeonidShatilo/frontend-lab/tree/master/task-07-tic-tac-toe)

- Using JavaScript constructs on page Tic-Tac-Toe layout.
- Add possibility to interact with layout by mouse click (add «X» or «O»).
- Add a module that can write down on page game result (1st win, 2nd win, or draw).

---
