import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[rojo,setRojo]=useState("secondary")
	const[amarillo,setAmarillo]=useState("secondary")
	const[verde,setVerde]=useState("secondary")

	const prenderRojo=()=>{
		setRojo("danger")
		setAmarillo("secondary")
		setVerde("secondary")
	}

	const prenderAmarillo=()=>{
		setAmarillo("warning")
		setRojo("secondary")
		setVerde("secondary")
	}

	const prenderVerde=()=>{
		setAmarillo("secondary")
		setRojo("secondary")
		setVerde("success")
	}

	return (
		 <div className="text-center container">
		 <div className="bg-dark p-2" style={{width:"120px"}}>

		
           <div className={`bg-${rojo} rounded-circle mt-1`} style={{width:"100px",height:"100px"}} onClick={prenderRojo}>
			</div> 
			<div className={`bg-${amarillo} rounded-circle mt-1`} style={{width:"100px",height:"100px"}} onClick={prenderAmarillo}>
			</div>
			<div className={`bg-${verde} rounded-circle mt-1`} style={{width:"100px",height:"100px"}} onClick={prenderVerde}>
			</div>
			</div>
		</div>
	);
};

export default Home;