import { useState, useEffect } from "react";
import AnswersList from "./AnswersList";
import AnswersItem from "./AnswersItem";

function Survey()  {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState(
    {
      color: '',
      timespent: [],
      review: '',
      username: '',
      email: ''
    });

  const [answerData, setAnswerData] = useState([]);

  useEffect(() => {
    console.log(answerData)
  }, [answerData])


  const handleSubmit = (event) => {
    event.preventDefault(); 
    // console.log(formData)
    const newAnswer = {
      username: formData.username,
      email: formData.email,
      review: formData.review,
      timespent: formData.timespent,
      color: formData.color
    }
    // setAnswerData((prev) => [...prev, newAnswer])
    setAnswerData([...answerData, newAnswer])
    
  }
  
    const handleChange = (event) => {
      const { name, value, type, checked } = event.target;
      
      if (type === "checkbox") {

        setFormData({ ...formData, [checked]: event.target.checked });

        if(checked){
          formData.timespent.push(event.target.value)
        }
        
        else formData.timespent.splice(formData.timeSpent.indexOf(event.target.value), 1)
      } 
      else {
        
        setFormData({ ...formData, [event.target.name]: event.target.value });
      }
      
      
     
  }
     
  

  return (
    <>

      <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answerData}></AnswersList>
      </section>

      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}> 
        <h2>Tell us what you think about your rubber duck!</h2>

        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
            <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={formData.color === '1'} />
            <label
           htmlFor="color-one"
           >1 </label>
      
          </li>
          <li>
          <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={formData.color === '2'} /><label
          htmlFor="color-two"
      >2 </label>
    
    </li>
    <li>
    <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} checked={formData.color === '3'} /><label
      htmlFor="color-three"
      >3</label
    >
    </li>
    <li>
    <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={formData.color === '4'} /><label
      htmlFor="color-four"
      >4 </label>
    
      </li>
      </ul>
        

        </div>
        <div className="form__group">
          
          <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
  <li>
    <label
      ><input
        name="timespent"
        type="checkbox"
        value="swimming"
        onChange={handleChange}
        checked={formData.timespent.includes("swimming")}
      />Swimming</label
    >
  </li>
  <li>
    <label
      ><input name="timespent" type="checkbox" value="bathing" onChange={handleChange} checked={formData.timespent.includes("bathing")} />Bathing</label
    >
  </li>
  <li>
    <label
      ><input
        name="timespent"
        type="checkbox"
        value="chatting"
        onChange={handleChange}
        checked={formData.timespent.includes("chatting")}
      />Chatting</label
    >
  </li>
  <li>
    <label
      ><input name="timespent" type="checkbox" value="noTime" onChange={handleChange} checked={formData.timespent.includes("noTime")} />I dont like to
      spend time with it

    </label>
    
  </li>
</ul>
          
        </div>

        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formData.review}
          ></textarea> </label>
        <label
          >Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            /> </label>
        <label
          >Leave us your email pretty please??<input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email} />
            </label>
        <input className="form__submit" type="submit"  value="Submit Survey!" />
      </form>
      
      </section>
      </main>
    
    </>
    );

    
  
}

export default Survey;
