# crackpass

### a collection of js scripts that let you do unintended things with a smartpass student account

before running any script, make sure you fill out any id/value in its respective var EXCEPT `s`

- [`end_own_pass.js`](end_own_pass.js) = ends a user-started pass
- [`approve_own_pass_request.js`](end_own_pass.js) = approves a pass request with a teacher pin. works with any account, can be used to bypass daily pass limit
- [`custom_hall_pass.js`](custom_hall_pass.js) = creates a custom hall pass, bypasses duration limit and closed rooms(?)
- [`custom_hall_pass_request.js`](custom_hall_pass_request.js) = creates a custom hall pass request **TO YOUR ACCOUNT**, bypasses duration limit, closed rooms(?), and daily pass limit, can use [approve_own_pass_request.js](end_own_pass.js) to approve the request or enter your teacher pin if known
