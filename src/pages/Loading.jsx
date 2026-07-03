import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import typing from "../assets/sounds/typing.mp3";
import thunder from "../assets/sounds/thunder.mp3";

function Loading() {

const navigate=useNavigate();

useEffect(()=>{

const type=new Audio(typing);

const storm=new Audio(thunder);

storm.volume=.5;

type.volume=.4;

storm.play();

setTimeout(()=>{

type.play();

},900);

setTimeout(()=>{

navigate("/emotions");

},6000);

},[]);

return(

<div className="loading-screen">

<motion.h1

initial={{opacity:0}}

animate={{opacity:1}}

transition={{duration:1}}

>

WAYNE ENTERPRISES

</motion.h1>

<motion.h2

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:1}}

>

BATCOMPUTER v3.0

</motion.h2>

<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:2}}

>

INITIALIZING...

</motion.p>

<div className="loader">

<div className="progress"></div>

</div>

<motion.h3

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:4}}

>

ACCESS GRANTED

</motion.h3>

<motion.h2

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:5}}

>

WELCOME BACK

MASTER BRUCE

</motion.h2>

</div>

)

}

export default Loading;