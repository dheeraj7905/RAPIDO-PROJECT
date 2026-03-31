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


# 👤 User Profile API

## 📌 Endpoint

`GET /users/profile`

---

## 🧾 Description

Retrieves the profile information of the currently authenticated user.

This endpoint returns the logged-in user's details. It requires a valid JWT token to access.

---

## 🔐 Authentication

This route is protected and requires a valid JWT token.

**Header Format:**

```
Authorization: Bearer <token>
```

---

## 📥 Request

### Headers

| Key           | Value            |
| ------------- | ---------------- |
| Authorization | Bearer `<token>` |

---

## 📤 Response

### ✅ Success Response (200 OK)

```json
{
  "user": {
    "fullname": {
      "firstname": "Dheeraj",
      "lastname": "Chauhan"
    },
    "email": "dheeraj@example.com"
  }
}
```

---

## ❌ Error Responses

### 401 Unauthorized

* Token missing
* Token invalid
* Token blacklisted

```json
{
  "message": "Unauthorized access"
}
```

---

## ⚙️ Backend Logic (Flow)

1. Extract token from header or cookies
2. Check if token exists
3. Check if token is blacklisted
4. Verify token using JWT secret
5. Fetch user from database
6. Return user profile data

---

## 🧠 Notes

* Make sure middleware is used to protect the route
* Token should not be expired
* Blacklisted tokens should be denied access

---

## 🚀 Example Usage (cURL)

```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer your_jwt_token"
```

---

## 🛠️ Example Route (Express.js)

```js
router.get('/profile', authUser, async (req, res) => {
    res.status(200).json({
        user: req.user
    });
});
```

---
