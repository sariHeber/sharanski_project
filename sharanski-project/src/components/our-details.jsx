import { ExempleDetails } from "./exemple-details";
import { SariDetails } from "./sari-component";
import { TziviDetails } from "./tzivi-component";

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
        <TziviDetails></TziviDetails>
        <ExempleDetails></ExempleDetails>
        <SariDetails></SariDetails>
      </div>
    </>
  );
};
