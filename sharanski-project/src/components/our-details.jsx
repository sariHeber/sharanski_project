import { AyalaDetails } from "./ayala-component";
import { Avigail } from "./avigail";
import { ExempleDetails } from "./exemple-details";
import { SaraRuthDetails } from "./Sara-Ruth-conponent";
import { NaomiDetails } from "./naomi-details";
import { RivkiDetails } from "./rivki-details";
import { SariDetails } from "./sari-component";
import { TamiDetails } from "./tami-component";
import { TehilaHDetails } from "./Tehilah_H_Component";
import { ElishevaDetails } from "./elisheva_component"
import { BatshevaKDetails } from "./BatshevaK-component"
import { RivkiDetails } from "./rivki-details";

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
        <AyalaDetails></AyalaDetails>
        <TehilaHDetails></TehilaHDetails>
        <SaraRuthDetails></SaraRuthDetails>
        <ElishevaDetails></ElishevaDetails>
        <NaomiDetails></NaomiDetails>
        <BatshevaKDetails></BatshevaKDetails>
        <RivkiDetails></RivkiDetails>
        <TamiDetails></TamiDetails>
      </div>
    </>
  );
};
