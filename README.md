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
