export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (
  <div>
    <div className="bg-pink-100 rounded-3xl p-5" >
        <td className="w-full ">
          <h2>Subject ID : {props.subID_1} </h2>
          <h2>Subject : {props.sub_1}</h2>
          <h2>Credit : {props.cred_1}</h2>
          <h2>Grade : {props.grd_1}</h2>
        </td>
        <td>
          <button className="bg-pink-300 hover:bg-pink-400 rounded-3xl p-1 " onClick={()=>{
            props.btn_1(props.subID_1)
          }}>{'\u2716'}</button>
         </td>
    </div>
    <br />
  </div>
  );
};
