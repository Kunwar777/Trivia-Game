import React, { useState } from "react";
import QuizData from "./QuizData";
import QuizResult from "./QuizResult";


function Quiz(){
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [clickedOption,setClickedOption]= useState();
    const [showResult,setShowResult]=useState(false);

    const ChangeQuestion=()=>{
        updateScore();
            if(currentQuestion < QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0)
            }else{
                setShowResult(true)
            }
        }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1)
        }
    }

    const resetAll =()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
        
  return (
    <div>
        <p className="heading-txt">Quizz App</p>
        <div className="container">
        {showResult ? (<QuizResult score={score} totalScore={QuizData.length} PlayAgain ={resetAll}/>):( <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}.</span>
                <span id="question-number">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button //className="option-btn"
                        className={`option-btn ${clickedOption == i+1?"checked":null}`}
                         key={i} onClick={()=>
                        setClickedOption(i+1)
                        }>{option}</button>
                    )
                })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={ChangeQuestion}/>
        </>)}
        </div>
    </div>
  )
}
export default Quiz; 