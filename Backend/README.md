# 🚀 Backend API Documentation

## 📌 User Registration API

### 🔗 Endpoint
POST /users/register

---

## 📖 Description
This API is used to register a new user.  
It validates input, hashes the password, stores the user in the database, and returns a JWT token.

---

## 🧾 Request Body (JSON)

{
  "fullname": {
    "firstname": "Dheeraj",
    "lastname": "Chauhan"
  },
  "email": "test@gmail.com",
  "password": "123456"
}

---

## 🧠 Validation Rules

- firstname → required (min 3 characters)
- lastname → optional (min 3 characters)
- email → required (valid format)
- password → required (min 6 characters)

---

## 🔁 Working Flow

1. Client sends POST request  
2. Server validates input  
3. Password is hashed (bcrypt)  
4. User is saved in database  
5. JWT token is generated  
6. Response is sent  

---

## ✅ Success Response

{
  "message": "User registered successfully",
  "token": "JWT_TOKEN",
  "user": {
    "fullname": {
      "firstname": "dheeraj",
      "lastname": "chauhan"
    },
    "email": "dheerajrajput75@gmail.com",
    "password": "hashed_password",
    "_id": "user_id"
  }
}

---

## ❌ Error Responses

- 400 → Invalid input  
- 409 → Email already exists  
- 500 → Server error  

---

## 🔐 Notes

- Password is stored in hashed form  
- Email must be unique  
- Use token for authentication  

---

## 🛠️ Example (Frontend)

axios.post("/users/register", {
  fullname: {
    firstname: "Dheeraj",
    lastname: "Chauhan"
  },
  email: "test@gmail.com",
  password: "123456"
})
.then(res => console.log(res.data))
.catch(err => console.log(err));

---

## 🧰 Tech Stack

Node.js | Express.js | MongoDB | Mongoose | JWT | Bcrypt

---




# 🔐 Login API Documentation

## 📌 Endpoint
POST /users/login

---

## 📖 Description
This API is used to authenticate a user using email and password.  
If credentials are correct, it returns a JWT token along with user details.

---

## 🧾 Request Body (JSON)

{
  "email": "test@gmail.com",
  "password": "123456"
}

---

## 🧠 Validation Rules

- email → required (must be valid)
- password → required (min 6 characters)

---

## 🔁 Working Flow

1. Client sends login request  
2. Server checks email in database  
3. Password is fetched (`+password`)  
4. Password is compared using bcrypt  
5. If valid → JWT token generated  
6. Response is sent  

---

## ✅ Success Response

{
  "message": "Login successful",
  "token": "JWT_TOKEN",
  "user": {
    "fullname": {
      "firstname": "dheeraj",
      "lastname": "chauhan"
    },
    "_id": "user_id",
    "email": "dheerajrajput75@gmail.com"
  }
}

---

## ❌ Error Responses

- 400 → Invalid input  
- 404 → User not found  
- 401 → Invalid password  
- 500 → Server error  

---

## 🔐 Important Notes

- Password is not returned in response (security best practice)  
- JWT token is used for authentication  
- Use `.select('+password')` only internally for password comparison  

---

## 🛠️ Example (Frontend)

axios.post("/users/login", {
  email: "test@gmail.com",
  password: "123456"
})
.then(res => console.log(res.data))
.catch(err => console.log(err));

---

## 🧰 Tech Stack

Node.js | Express.js | MongoDB | Mongoose | JWT | Bcrypt

---