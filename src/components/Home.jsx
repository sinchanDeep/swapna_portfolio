//import image from "image.jpg";
import Navbar from "./Navbar";
import resume from "../Resume/resume.pdf";
import { gsap  } from "gsap";
import { useEffect, useLayoutEffect, useReducer,useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import javaLogo from "./javaLogo.svg";
import pythonLogo from "./pythonLogo.svg";
import htmlLogo from "./htmlLogo.svg";
import javascriptLogo from "./javascriptLogo.svg";
import cssLogo from "./cssLogo.svg";
import bootstrapLogo from "./bootstrapLogo.svg";
import mysqlLogo from "./mysqlLogo.svg";
import projectOne from "./project1.png";
import projectTwo from "./project2.png";
import projectThree from "./project3.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const introRef = useRef(null);
  const scrollRef = useRef(null);
  const secondpage = useRef(null);
  const thirdPage1 = useRef(null);
  const thirdPage2 = useRef(null);
  const thirdPage3 = useRef(null);
  const secondPageImage1 = useRef(null);
  const secondPageImage2 = useRef(null);
  const secondPageImage3 = useRef(null);
  const secondPageImage4 = useRef(null);
  const secondPageImage5 = useRef(null);
  const secondPageImage6 = useRef(null);
  const secondPageImage7 = useRef(null);
  gsap.registerPlugin(ScrollTrigger)
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    //first page animation
    gsap.from(introRef.current,{
      scrollTrigger : {
        trigger : introRef.current,
        start : "top 14%",
        end: "top 3%",
       //toggleActions :"play reset play reset",
        markers : false,
        onLeave : () => {
          gsap.to(introRef.current,{
            opacity : 0,
            y : 0,
            duration : 1,
            ease : "power3.in"
          })
        },
        onLeaveBack : () => {
          gsap.to(introRef.current,{
            opacity : 1,
            y : 0,
            duration :1.5,
            ease : "power3.in"
          })
        },
        onEnterBack : () => {
          gsap.to(introRef.current,{
             duration: 2.3,
      opacity: 1,
      y: 50,
      ease: "power3.out",
          })
        }
      },
      duration: 2.3,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    })

    //second page animation
    gsap.from(scrollRef.current,{
      scrollTrigger:{
        trigger : scrollRef.current,
        start : "top bottom",
        end : "top 60%",
        markers : false,
        scrub : 1,
      },
      opacity : 0,
      y:250,
      ease : "power3.out"
    });
  });

  //second page
  gsap.fromTo([secondPageImage1.current,secondPageImage2.current,secondPageImage3.current,
    secondPageImage4.current,
    secondPageImage5.current,
    secondPageImage6.current,
    secondPageImage7.current
  ],
    {scale : 1},
    {
     scale : 1.5,
     scrollTrigger:{
        trigger : secondPageImage1.current,
        start : "top bottom",
        end : "top top",
        markers : false,
       toggleActions : "play reset play reset"
      },
    
      duration : 1
      
  })
  
  //third page animation
  gsap.fromTo(
  [thirdPage1.current,thirdPage2.current,thirdPage3.current],
  { y: 100 }, // fromVars
  {
    y: 0,    // toVars
    scrollTrigger: {
      trigger: thirdPage1.current,
      start: "top bottom",
      end: "top top",
      markers: false,
      toggleActions: "play reset play reset",
      // scrub: true
    },
    delay : 0.3
  }
);



  return () => ctx.revert();
}, []);
  return (
    <>
      <div className="h-auto w-auto p-4 bg-black m-0 md:mt-6">
        <div
          ref={introRef}
          className="flex flex-col md:flex-row p-2 text-start  h-[100vh] "
        >
          <div className="text-white h-auto w-3/4 p-0 md:p-13 relative top-12">
            <h1 className="intro-text">I am Swapna shetty - A </h1>
            <h1 className="text-blue-600">Creative person and a web developer</h1>
            <h1>I design and build websites that don’t just look good, but feel intuitive, engaging, and alive.</h1>
            <p className="text-gray-400">
              currently i am looking for an opportunity to kick start my career
              
            </p>
          </div>
          <div className="text-white h-auto w-3/4 flex items-center justify-center">
            <label
              for="resumeDownload"
              className="text-4xl cursor-pointer text-center text-green-600 hidden md:block"
            >
              <a
                id="resumeDownload"
                download
                href={resume}
                className="text-4xl cursor-pointer text-center text-green-600 block"
              >
                Download my Resume
              </a>
            </label>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="h-[auto] bg-[#F1F3F6] grid grid-cols-1 p-24"
        >
          <div  className="">
            <h1 className="pb-2 md:p-4 underline text-center text-[#1E1E2F]">Objective</h1>
            <p ref={secondpage}  className="text-center text-black text-lg">
              Motivated and detail-oriented recent graduate with a background in
              Information Technology. Eager to apply academic knowledge
              .Committed to continuous learning and growth, aiming to leverage
              skills in programming, networking, and system administration to
              support organizational goals and enhance team success.
            </p>
          </div>
          <div className="">
            <h1 className="text-center text-black p-4 underline">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-12 mt-3">
              <img ref={secondPageImage1} style={{boxShadow : "10px 10px 10px black"}} className="shadow-lg" src={javaLogo} />
              <img ref={secondPageImage2} style={{boxShadow : "10px 10px 10px black"}} src={htmlLogo} />
              <img ref={secondPageImage3} style={{boxShadow : "10px 10px 10px black"}} src={javascriptLogo} />
              <img ref={secondPageImage4} style={{boxShadow : "10px 10px 10px black"}} src={cssLogo} />
              <img ref={secondPageImage5} style={{boxShadow : "10px 10px 10px black"}}  src={bootstrapLogo} />
              <img ref={secondPageImage6} style={{boxShadow : "10px 10px 10px black"}} src={mysqlLogo} />
              <img ref={secondPageImage7} style={{boxShadow : "10px 10px 10px black"}} src={pythonLogo} />
            </div>
          </div>
        </div>
        <div  className="h-auto md:h-[100vh] bg-[#D1D9E6] p-16 mt-6 flex flex-col gap-9">
           <h1 className="text-center text-black underline">Projects</h1>
          <div  className=" grid grid-cols-1 md:grid-cols-3 gap-12">
           
            <div  onClick={()=>{
              navigate("/display" , {
                state : {
                  image : 1
                }
              })
            }} className="relative cursor-pointer group w-auto md:w-100 h-64 overflow-hidden rounded-lg hover:scale-105 transition-all transition duration-1000">
              <img
              id="hoverEffect"
              ref = {thirdPage1}
                src={projectOne}
                alt="Project Preview"
                className="w-full h-full object-cover transition duration-300 group-hover:brightness-30"
              />

              <div className="absolute inset-0 flex flex-col  opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-2xl font-semibold mt-12 text-center">
                  Online Photography Portfolio Website
                </p>
                <p className="text-white text-center">
                  HTML, CSS, PHP, MySQL
                </p>
                <p className="text-white text-center"> 
                  Developed a responsive photography portfolio website to showcase photo collections. Implemented 
                  user login and registration features, and integrated an admin panel for easy photo upload and gallery management.

                </p>
              </div>
            </div>
             <div id="hoverEffect" onClick={()=>{
              navigate("/display" , {
                state : {
                  image : 2
                }
              })
            }} className="relative cursor-pointer group w-auto md:w-100 h-64 overflow-hidden rounded-lg hover:scale-105 transition-all transition duration-1000">
              <img ref={thirdPage2}
                src={projectTwo}
                alt="Project Preview"
                className="w-full h-full object-cover transition duration-300 group-hover:brightness-30"
              />

              <div className="absolute inset-0 flex flex-col  opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-2xl font-semibold mt-12 text-center">
                 E-commerce Website
                </p>
                <p className="text-white text-center">
                  HTML, CSS, JavaScript, PHP, MySQL
                </p>
                <p className="text-white text-center"> 
                  Designed and developed an e-commerce platform where users can browse products, add them to a 
                  shopping cart, and make secure purchases. Integrated payment gateway for online transactions and managed 
                  product inventory with MySQL.


                </p>
              </div>
            </div>
            <div id="hoverEffect" onClick={()=>{
              navigate("/display" , {
                state : {
                  image : 3
                }
              })
            }} className="relative cursor-pointer  group w-auto md:w-100 h-64 overflow-hidden rounded-lg hover:scale-105 transition-all transition duration-1000">
              <img
                ref = {thirdPage3}
                src={projectThree}
                alt="Project Preview"
                className="w-full h-full object-cover transition duration-300 group-hover:brightness-30"
              />

              <div className="absolute inset-0 flex flex-col  opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-2xl font-semibold mt-12 text-center">
                  Coffee and Flower Shop Website
                </p>
                <p className="text-white text-center">
                  HTML, CSS, JavaScript, PHP, MySQL
                </p>
                <p className="text-white text-center"> 
                  Created a website for a local coffee and flower shop, enabling customers to view products, order online, 
                  and schedule deliveries. Designed a user-friendly interface and an order management system to track sales and 
                  customer orders.

                </p>
              
              </div>
            </div>
             <label
              for="resumeDownload"
              className="text-4xl cursor-pointer text-center text-green-600 md:hidden"
            >
              <a
                id="resumeDownload"
                download
                href={resume}
                className="text-4xl cursor-pointer text-center text-green-600 block"
              >
                Download my Resume
              </a>
            </label>
          </div>
           
        </div>
        
      </div>
    </>
  );
}

export default Home
