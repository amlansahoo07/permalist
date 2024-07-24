import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// Set up PostgreSQL client with connection details
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "postgres",
  port: 5432,
});
db.connect(); // Connect to the PostgreSQL database

// Middleware for parsing URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));

// Initial items for the list (for reference or placeholder)
let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

// Route for the homepage to display the list of items
app.get("/", async (req, res) => {
  try {
    // Query to fetch all items from the database
    let result = await db.query("select * from items order by id asc");
    items = result.rows; // Update the items array with the fetched data
    console.log(items);
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (error) {
    console.log(error); // Log any errors
  }
});

// Route to handle adding a new item
app.post("/add", async (req, res) => {
  const item = req.body.newItem; // Get the new item from the request body
  try {
    // Insert the new item into the database
    await db.query("insert into items (title) values ($1)", [item]);
    res.redirect("/"); // Redirect to the homepage after adding the item
  } catch (error) {
    console.log(error); // Log any errors
  }
});

// Route to handle editing an existing item
app.post("/edit", async (req, res) => {
  try {
    // Update the item title based on the provided ID and new title
    await db.query("update items set title = $1 where id = $2", [
      req.body.updatedItemTitle,
      req.body.updatedItemId,
    ]);
    res.redirect("/"); // Redirect to the homepage after editing the item
  } catch (error) {
    console.log(error); // Log any errors
  }
});

// Route to handle deleting an item
app.post("/delete", async (req, res) => {
  console.log(req.body.deleteItemId); // Log the ID of the item to be deleted
  try {
    // Delete the item from the database based on the provided ID
    await db.query("delete from items where id = $1", [req.body.deleteItemId]);
    res.redirect("/"); // Redirect to the homepage after deleting the item
  } catch (error) {
    console.log(error); // Log any errors
  }
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
