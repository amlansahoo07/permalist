<img width="1265" alt="image" src="https://github.com/user-attachments/assets/0f7c998d-d6dc-4d50-845d-56236187c06d">


# Permalist

Permalist is a web application that allows users to create, edit, and manage a list of items. This project is designed to help users keep track of tasks or items, with a focus on providing a seamless and user-friendly experience. The application is built using Node.js, Express, and PostgreSQL, ensuring robust and persistent data storage.

## Features

- **Add Items**: Users can add new items to the list.
- **Edit Items**: Existing items can be edited to update their content.
- **Delete Items**: Items can be removed from the list.
- **Persistent Data**: All items are stored in a PostgreSQL database, ensuring data is saved across sessions.
- **Responsive Design**: The application is designed to be responsive and user-friendly across different devices.

## Technologies Used

- **Frontend**: HTML, CSS, EJS (Embedded JavaScript templates)
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Middleware**: Body-parser for handling form data

## Setup

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/amlansahoo07/permalist.git
   cd permalist
   ```
2. Install the required dependencies.
   ```bash
   npm install
   ```
3. Set up the PostgreSQL database.
   - Create a new PostgreSQL database named `permalist`.
   - Create a table named `items` with the following schema:
     ```sql
     CREATE TABLE items (
       id SERIAL PRIMARY KEY,
       title VARCHAR(100) NOT NULL
     );
     ```
4. Start the application.
   ```bash
   node index.js
   ```
5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Adding an Item**: Enter the item in the input field and click the "+" button.
- **Editing an Item**: Click the pencil icon next to the item, make changes, and click the checkmark icon to save.
- **Deleting an Item**: Click the checkbox next to the item to remove it from the list.

## Acknowledgements

This project is inspired and developed as part of [Angela Yu's Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)'s on Udemy.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
