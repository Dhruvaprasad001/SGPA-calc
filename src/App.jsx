import React, { useState } from 'react';
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import { creditsAtomFamily, iaMarkAtomFamily, subjectAtomFamily } from './atoms';

function Header() {
  return (
    <header className="header">
      <h1>SGPA CALCULATOR</h1>
    </header>
  );
}

function SubjectCountInput({ setNumSubjects }) {
  return (
    <div className="input-group">
      <h3>Number of Subjects</h3>
      <input
        type="number"
        min="1"
        onChange={(e) => setNumSubjects(parseInt(e.target.value))}
      />
    </div>
  );
}

function IAMarks({ numSubjects }) {
  return (
    <div className="input-group">
      <h3>IA Marks</h3>
      {[...Array(numSubjects)].map((_, index) => {
        const updateIAMarks = useSetRecoilState(iaMarkAtomFamily(index + 1));
        return (
          <div key={index}>
            <input
              type="text"
              required
              placeholder={`Subject ${index + 1}`}
              onChange={(e) => {
                setTimeout(() => {
                  updateIAMarks({
                    id: (index + 1).toString(),
                    marks: e.target.value
                  });
                }, 5000);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function SubjectMarks({ numSubjects }) {
  return (
    <div className="input-group">
      <h3>Sem End Marks</h3>
      {[...Array(numSubjects)].map((_, index) => {
        const updateSUBJECTS = useSetRecoilState(subjectAtomFamily(index + 1));
        return (
          <div key={index}>
            <input
              type="text"
              required
              placeholder={`Subject ${index + 1}`}
              onChange={(e) => {
                setTimeout(() => {
                  updateSUBJECTS({
                    id: (index + 1).toString(),
                    marks: e.target.value
                  });
                }, 5000);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function Credits({ numSubjects }) {
  return (
    <div className="input-group">
      <h3>Credits</h3>
      {[...Array(numSubjects)].map((_, index) => {
        const updateCredits = useSetRecoilState(creditsAtomFamily(index + 1));
        return (
          <div key={index}>
            <input
              type="number"
              min="1"
              max="10"
              required
              onChange={(e) => {
                setTimeout(() => {
                  updateCredits({
                    id: (index + 1).toString(),
                    credits: e.target.value
                  });
                }, 5000);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function CalculateSGPAButton({ numSubjects }) {
  let totalCredits = 0;
  let totalGradePoints = 0;

  for (let i = 1; i <= numSubjects; i++) {
    const IAMarks = useRecoilValue(iaMarkAtomFamily(i));
    const SUBJECTS = useRecoilValue(subjectAtomFamily(i));
    const Credits = useRecoilValue(creditsAtomFamily(i));

    let ans = (Math.floor((parseInt(IAMarks.marks) + parseInt(SUBJECTS.marks / 2)) / 10) + 1) * Credits.credits;
    totalGradePoints += ans;
    totalCredits += Credits.credits * 10;
  }

  let sgpa = (totalGradePoints / totalCredits) * 10;

  return (
    <div className="result">
      Your SGPA for this sem is going to be : {sgpa.toFixed(2)}
    </div>
  );
}

function App() {
  const [numSubjects, setNumSubjects] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <RecoilRoot>
      <Header />
      <div className="container">
        {!showCalculator ? (
          <button className="start-button" onClick={() => setShowCalculator(true)}>
            Start SGPA Calculation
          </button>
        ) : (
          <>
            <SubjectCountInput setNumSubjects={setNumSubjects} />
            {numSubjects > 0 && (
              <div className="calculator-grid">
                <IAMarks numSubjects={numSubjects} />
                <SubjectMarks numSubjects={numSubjects} />
                <Credits numSubjects={numSubjects} />
              </div>
            )}
            {numSubjects > 0 && <CalculateSGPAButton numSubjects={numSubjects} />}
          </>
        )}
      </div>
    </RecoilRoot>
  );
}

export default App;