import { ExempleDetails } from "./exemple-details";
import { SariDetails } from "./sari-component";
import { azaniAndAlshech_Details } from "./azaniAndAlshech_Details";

export const OurDetails = () => {
  return (
    <>
      <h1>Our details</h1>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {/* כל אחת טוענת את הקומפוננטה שלה */}
       
       
       
       
       
       


       
       
       
        <ExempleDetails></ExempleDetails>
        <azaniAndAlshech_Details></azaniAndAlshech_Details>
        <SariDetails></SariDetails>
      </div>
    </>
  );
};
