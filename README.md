# VIT BFHL – REST API Project

A REST API project that processes arrays of mixed data types and returns categorized results such as odd/even numbers, uppercase letters, special characters, sum of numbers, and concatenated string in alternating caps. Frontend built with React allows easy testing of API requests.  

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Folder Structure](#folder-structure)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Categorizes numbers into odd and even arrays  
- Identifies uppercase alphabets and special characters  
- Calculates the sum of numbers  
- Concatenates alphabets in reverse with alternating caps  
- Responsive frontend built with React  
- Secure backend APIs with FastAPI  

---

## Tech Stack

**Frontend:** React, HTML, CSS, JavaScript, Axios  
**Backend:** FastAPI, Python    

---

## Getting Started

### Prerequisites

- Node.js >= 18.x  
- Python >= 3.10  
- pip / virtualenv  
- Git  

### Installation

#### Clone the repo

```bash
git clone https://github.com/yashwantzap/BFHL-Project.git
cd project-name
````

#### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

#### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Open your browser at `http://localhost:3000`. Make sure backend is running at `http://127.0.0.1:8000`.

---

## Folder Structure

```
project-name/
│
├─ backend/
│   ├─ main.py
│   ├─ requirements.txt
│
├─ frontend/
│   ├─ src/
│   │   ├─ App.js
│   │   ├─ index.css
│   │   └─ index.js
│   ├─ package.json
│
└─ README.md
```

---

## Usage

1. Start backend and frontend servers
2. Open frontend in browser
3. Enter custom JSON input or use example payload buttons
4. Submit to see categorized response from API

---

## API Endpoints

### POST `/bfhl`

**Request Body (JSON)**

```json
{
  "data": ["a","1","334","4","R","$"]
}
```

**Response**

```json
{
  "is_success": true,
  "user_id": "yourname_ddmmyyyy",
  "email": "your_email@example.com",
  "roll_number": "your_roll_number",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "uppercase_alphabets": ["R"],
  "special_characters": ["$"],
  "sum_of_numbers": "339",
  "concatenated_string": "Ar"
}
```

---

## License

This project is licensed under the MIT License.

