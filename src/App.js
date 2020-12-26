import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({ sub: '', subID: '', cred: '1', grd: 'A' });
  const [GPA, setGPA] = useState(0.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(oop) {
    // TODO
    var gpa = 0
    var cre = 0
    var calu = 0
    oop.forEach((i) => {
      switch (i.grd) {
        case 'A':
          gpa = 4
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'B+':
          gpa = 3.5
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'B':
          gpa = 3
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'C+':
          gpa = 2.5
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'C':
          gpa = 2
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'D+':
          gpa = 1.5
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'D':
          gpa = 1
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
        case 'F':
          gpa = 0
          cre += Number(i.cred)
          calu += gpa * Number(i.cred)
          break
      }
    })
    setGPA(calu / cre) 
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    const real = [...myCourses, inputData] 
    setMyCourse(real)
    console.log(myCourses)

    // recalculate GPA
    calculateGPA(real);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(id) {
    // TODO
    const delbox = myCourses.filter(function (obj) {
      return obj.subID !== id
    })
    setMyCourse(delbox)
    calculateGPA(delbox)
  }

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
        {/* TODO display courses */}
        {myCourses.map((item) => {
          const deletebtn = document.createElement('botton');
          deletebtn.innerHTML = 'x'
          deletebtn.onclick = () => {
            onDeleteCourse(item.sub)
          }
          return <CourseCard sub_1={item.sub} subID_1={item.subID} cred_1={item.cred} grd_1={item.grd} btn_1={onDeleteCourse} />
        })}
      </div>
      {/* TODO add course input form */}
      <div className="bg-pink-100 rounded-3xl" >
        <form onSubmit={addCourse} className="p-3" >
          <td className="w-full" >
            <label className="  m-5">Subject ID:</label>
            <input className="rounded-3xl"  type="text" placeholder="add subject ID" value={inputData.subID} onChange={(e) => setInputData({ ...inputData, subID: e.target.value })} /><br />
            <label className="m-5">Subject:</label>
            <input className="rounded-3xl" type="text" placeholder="add subject" value={inputData.sub} onChange={(e) => setInputData({ ...inputData, sub: e.target.value })} /><br />
            <label className="m-5">Credit:</label>
            <select className="rounded-3xl" placeholder="choose credit" value={inputData.cred} onChange={(e) => setInputData({ ...inputData, cred: e.target.value })}>
              {credit.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select><br />
            <label className="m-5">Grade:</label>
            <select className="rounded-3xl" value={inputData.grd} onChange={(e) => setInputData({ ...inputData, grd: e.target.value })}>
              {
                grade.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))
              }
            </select><br />
          </td>
          <td >
            <button className="bg-pink-300 hover:bg-pink-400 rounded-3xl p-1" type='submit'  >{'\u2714'}</button>
          </td> 
        </form >
      </div><br />
      
      {/* TODO display calculated GPA */}
      { 
      <div className="text-center bg-pink-200 rounded-3xl p-5 ">
        <h3>GPA : {GPA.toFixed(2)}</h3>
      </div>
      }

    </div>
  );
}

export default App;
