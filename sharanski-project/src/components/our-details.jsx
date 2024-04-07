import { Avigail } from "./avigail";
import { ExempleDetails } from "./exemple-details";
import { SaraRuthDetails } from "./Sara-Ruth-conponent";
import { NaomiDetails } from "./naomi-details";
import { SariDetails } from "./sari-component";
import { ElishevaDetails } from "./elisheva_component"

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
        <Avigail></Avigail>
        <ExempleDetails></ExempleDetails>
        <SariDetails></SariDetails>
        <SaraRuthDetails></SaraRuthDetails>
        <ElishevaDetails></ElishevaDetails>
        <NaomiDetails></NaomiDetails>
      </div>
    </>
  );
};
