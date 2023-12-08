# SQL Query Handler for JavaScript

This JavaScript project provides a convenient and simple way to handle SQL queries in your applications. It consists of a concrete class that can be easily extended for each table in your database.

## Getting Started

To integrate this project into your repository, follow these steps:

1. Add this project as a git template:

   ```bash
   git remote add template https://github.com/your-template-repo.git
   git fetch template
   git merge --allow-unrelated-histories template/main
   ```

2. Update the `createConnection.js` file:

   Change the database name to match your specific database in the `createConnection.js` file.

3. Set the SQL password:

   Open the `pwd.txt` file and input your SQL password.

## Usage

To use this SQL query handler, follow these steps:

1. Create a class for each table you need to interact with.

2. Make these classes inherit from the provided `model` class.

3. Utilize the following methods on instances of your new inherited class objects:

   - `update`: Update a record in the database.
   - `load`: Load a single record from the database.
   - `loadmany`: Load multiple records from the database.
   - `save`: Save a new record to the database.
   - `delete`: Delete a record from the database.

### Example:

```javascript
const { Model } = require('./model');

class User extends Model {
  constructor() {
    super('users'); // 'users' should be the name of your table
  }

  // Additional methods or properties specific to the 'users' table can be added here.
}

// Usage
const user = new User();
user.load(1); // Load user with ID 1
user.update(1, { name: 'John Doe' }); // Update user with ID 1
// ... and so on
```

## Contributions

Feel free to contribute by submitting issues or pull requests. Any feedback or improvements are highly appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

**Note:** This code is almost entirely copied from [Khoi Nguyen](https://github.com/khoi-nguyen/LW3L-orm/blob/main/models/Model.js), and I'm giving him all the credits for the original implementation.