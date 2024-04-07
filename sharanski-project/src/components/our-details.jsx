import { ExempleDetails } from "./exemple-details";
import { SariDetails } from "./sari-component";
import { TehilaHDetails } from "./Tehilah_H_Component";

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
        <TehilaHDetails></TehilaHDetails>
      </div>
    </>
  );
};
