# SGPA Calculator

A simple SGPA (Semester Grade Point Average) calculator built using React and Recoil. This tool allows students to input their subject grades and credits to compute their SGPA.

## Features
- User-friendly interface for entering grades and credits.
- Automatic calculation of SGPA based on the provided inputs.
- Responsive design using custom CSS.
- Clear button to reset inputs and start a new calculation.

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dhruvaprasad991/sgpa-calculator.git
   cd sgpa-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) (if using Vite) in your browser to see the application running.

## Usage
1. Enter the number of subjects.
2. Input the grade and corresponding credit for each subject.
3. Click on the "Calculate SGPA" button to get the result.

## Formula Used
SGPA is calculated using the formula:

\[ SGPA = \frac{\sum (grade\_points \times credits)}{\Max marks} \]

## Technologies Used
- React.js (Frontend)
- Custom CSS (Styling)
- Vite (Build tool)

