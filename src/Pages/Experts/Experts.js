import React from "react";
import "./Experts.css";
import experts1 from "../../Images/experts/expert-1.jpg";
import experts2 from "../../Images/experts/expert-2.jpg";
import experts3 from "../../Images/experts/expert-3.jpg";
import experts4 from "../../Images/experts/expert-4.jpg";
import experts5 from "../../Images/experts/expert-5.jpg";
import experts6 from "../../Images/experts/expert-6.png";
import Expert from "../Expert/Expert";


const experts =[
    {id:1 , name:'william Raw', img:experts1},
    {id:2 , name:'Rakesh chawla', img:experts2},
    {id:3 , name:'Benny cutter', img:experts3},
    {id:4 , name:'prokash chater', img:experts4},
    {id:5 , name:'Rewish null', img:experts5},
    {id:6 , name:'Nyter chan', img:experts6}
]

const Experts = () => {
  return (
    <div>
      <h2 className="text-primary text-center experts">Our Experts</h2>
      <div className="experts-container">
         {
            experts.map(expert=><Expert
            
                key={expert.id}
                expert={expert}
            ></Expert>)
         }
       </div>
     
    </div>
  );
};

export default Experts;
