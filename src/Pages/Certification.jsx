import React from 'react'
import Fssai from "../Images/fssai.png"
import Impex1 from "../Images/impex1.png"
import ISO from "../Images/iso.png"
import GST from "../Images/gst.png"
import FEIO from "../Images/fiofinal.jpg"
const Certification = () => {
  return (
    <>
    <center>
        <h1 className='text-[30px]'>Certification</h1>
    </center>
        <div className='flex justify-around'>  
           <marquee behavior="scroll" direction="right" scrollamount="40"> <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{height:'200px',width:'200px'}}> <img src={Fssai} alt="" style={{height:'100px', width:'150px'}}/><br/></div>
               <div style={{height:'200px',width:'250px'}}><img src={Impex1} alt="" style={{height:'100px'}}/></div>
               <div style={{height:'200px',width:'200px'}}><img src={GST} alt="" style={{width:'110px',height:'110px'}}/></div>
               <div style={{height:'200px',width:'200px'}}><img src={ISO} alt="" style={{height:'100px'}}/></div>
               <div style={{height:'200px',width:'200px'}}><img src={FEIO} alt="" style={{width:'200px',height:'120px'}}/></div>
                  <div style={{height:'200px',width:'200px'}}> <img src={Fssai} alt="" style={{height:'100px', width:'150px'}}/><br/></div>

               </div></marquee>
            {/* <img src={Fssai} alt="" style={{height:'100px', width:'150px'}}/>
            <img src={Impex1} alt="" style={{height:'100px'}}/> */}
        </div>
    </>
  )
}

export default Certification
