import { ExempleDetails } from "./exemple-details";
import { SariDetails } from "./sari-component";
import { EstiDetails } from "./esti-component";

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
        <SariDetails></SariDetails>
        <EstiDetails></EstiDetails>
      </div>
    </>
  );
};
