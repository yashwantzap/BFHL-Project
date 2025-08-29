from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Union
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to call this API (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# My details
FULL_NAME = "Yashwant Chowdary Nutulapati"
DOB_DDMMYYYY = "08012005"
EMAIL = "yashwantchowdary5@gmail.com"
ROLL_NUMBER = "22BCE0845"

class InputData(BaseModel):
    data: List[Union[str, int]]

@app.post("/bfhl")
async def process_data(input_data: InputData):
    try:
        arr = [str(x) for x in (input_data.data or [])]

        odd_numbers, even_numbers, alphabets, special_characters = [], [], [], []
        collected_letters = []
        total_sum = 0

        for s in arr:
            if s.isdigit():
                n = int(s)
                if n % 2 == 0:
                    even_numbers.append(s)
                else:
                    odd_numbers.append(s)
                total_sum += n
            elif s.isalpha():
                alphabets.append(s.upper())
                collected_letters.extend(list(s))
            else:
                special_characters.append(s)
                for ch in s:
                    if ch.isalpha():
                        collected_letters.append(ch)

        # Reverse + alternating caps
        reversed_letters = list(reversed(collected_letters))
        concat_chars = [
            (ch.upper() if i % 2 == 0 else ch.lower())
            for i, ch in enumerate(reversed_letters)
        ]
        concat_string = "".join(concat_chars)

        return {
            "is_success": True,
            "user_id": f"{FULL_NAME}_{DOB_DDMMYYYY}",
            "email": EMAIL,
            "roll_number": ROLL_NUMBER,
            "odd_numbers": odd_numbers,
            "even_numbers": even_numbers,
            "alphabets": alphabets,
            "special_characters": special_characters,
            "sum": str(total_sum),
            "concat_string": concat_string,
        }
    except Exception as e:
        return {"is_success": False, "error": str(e)}
