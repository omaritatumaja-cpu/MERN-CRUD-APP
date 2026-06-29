const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();

 const connectDB = require('./db'); 
// Load the item model from the models directory
const UserModel = require('./models/Users');



const app = express();
connectDB(); // Connect to MongoDB
app.use(cors({origin:'http://localhost:5173'})); // Allow requests from the React app running on port 5173
app.use(express.json());

/* // 👇 ADD THIS ROUTE HERE
app.get('/', (req, res) => {
  res.send('Server is running and ready for API requests!');
}); */
// create an API to bring  a specific existing user to client form before update the existing user
app.get('/getUser/:id', async (req, res) => {
 const id=req.params.id;

UserModel.findById({_id:id})
.then(users=>res.json(users))
.catch(err=>res.json(err))

});
// create an apı to update any specific existing user on database
app.put('/updateUser/:id', async (req, res) => {
 const id=req.params.id;
UserModel.findByIdAndUpdate({_id:id},{
    name:req.body.name,
    email:req.body.email,
    age:req.body.age})
.then(users=>res.json(users))
.catch(err=>res.json(err))

});

// create an apı to update any specific existing user on database
app.delete('/deleteUser/:id', async (req, res) => {
 const id=req.params.id;
UserModel.findByIdAndDelete({_id:id})
.then(res=>res.json(res))
.catch(err=>res.json(err))

});

// 👇 create API on backend so that the front-end can access the data from the database

app.get('/', async (req, res) => {
UserModel.find({})
.then(users=>res.json(users))
.catch(err=>res.json(err))

});

// 👇 API endpoint to create a new user in the database
app.post('/createUser', async (req, res) => {
    // Create a new user document using data from the request body on front-end=client(e.g. { name: "John", email: "john@gmail.com" }=req.body)
    UserModel.create(req.body)
        .then(user => res.status(201).json(user)) // ← DB save succeeded, send user back
        .catch(err => res.status(400).json({ error: err.message })); // ← DB save failed, send error
});

// Example of API routes you might add later
// app.use('/api/users', require('./routes/userRoutes'));

app.listen(3019, () => {
  console.log('Server is running on port 3019');
});