  import React, { useState, useEffect } from 'react';

  import faqs from './faqs40.json'; // Assuming the file is in the same folder

  function FAQs() {
    const [questionsToShow, setQuestionsToShow] = useState(4);
    const [newFaqArray, setNewFaqArray] = useState([]);

    useEffect(() => {
      setNewFaqArray(faqs);
    }, []);

    return (
      <div>
        <h1>FAQS</h1>

        {newFaqArray.slice(0, questionsToShow).map((records) => (
          <div className="pb-5 text-center w-100" style={{}} key={records.question}>
            <div className="bg-light " style={{ height: "65px"}}>
              {records.question}{" "}
            </div>
            <br />
            <span className="bg-white ">
              <br />
              <div>

              {records.answer}
              </div>
            </span>
          </div>
        ))}

        <form action="faqs.json" method="post">
          <label htmlFor="question">Question</label>
          <input type="text" name="question" id="" />
          <label htmlFor="question">Answer</label>
          <input type="text" name="answer" id="" />
        </form>

        <button className="bg-info offset-5 w-20"onClick={() => setQuestionsToShow(questionsToShow + 4)}>
          Load More
        </button>
      </div>
    );
  }

  export default FAQs;

  // import React,{useState,useEffect} from 'react'
  // import Navbar from '../components/Navbar';
  // import faqs from '../pages/faqs40.json';

  // function FAQs() {
  //   var newFaqArray = [];
    
  //   const getData = () => {
  //     fetch("faqs40.json", {
        
  //         header: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //         }
        
  //      }).then((response) => response.json().then((data) =>console.log(data))
  //    )}

  //   useEffect(() => {
      
  //     getData()
  //   }
  //     , []);
  //   console.log(newFaqArray);

  //   return (
  //     <div >
  //       <Navbar/>
  //       <h1>FAQS</h1>
        
        
  //       {
  //          newFaqArray = faqs && faqs.map(records => {
            
  //           return (

  //             <div className="p-3">
  //               <span>
  //                 {records.question} <br />
  //               </span>
  //               <span>
  //                 {" "}
  //                 <br />
  //                 {records.answer}  
  //               </span>
  //             </div>
  //           );
            
  //          })
          
  //       }
        

  //       <form action="faqs.json" method="post">
  //         <label htmlFor="question">Question</label>
  //         <input type="text" name="question" id="" />
  //         <label htmlFor="question">Answer</label>
  //         <input type="text" name="answer" id="" />
  //       </form>
        
  //     </div>
  //   )
  // }

  // export default FAQs