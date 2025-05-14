import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import diagram1 from "../images/diagram1.png";
import diagram2 from "../images/diagram2.png";
import diagram3 from "../images/diagram3.png";

const ImageDisplayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayImage, setDisplayImage] = useState(null);

  useEffect(() => {
    const imgId = location.state?.image;
    if (imgId === 1) setDisplayImage(diagram1);
    else if (imgId === 2) setDisplayImage(diagram2);
    else if (imgId === 3) setDisplayImage(diagram3);
    else navigate("/");
  }, [location.state, navigate]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-1 p-4">
     <h1 className="text-md text-center p-2 m-3 underline">
        {location.state?.image == 1 ? "Online Photography Portfolio Website" : ""}
        {location.state?.image == 2 ? " E-commerce Website" : ""}
        {location.state?.image == 3 ? "Coffee and Flower Shop Website" : ""}
     </h1>
       
          <img  src={displayImage} alt="diagram" className="max-w-full h-[100%] md:h-[90%] object-cover" />
             <button
        onClick={() => navigate("/")}
        className="text-white bg-gray-600 px-4 py-2 rounded"
      >
        Back
      </button>
        
      
     
    </div>
  );
};

export default ImageDisplayer;

