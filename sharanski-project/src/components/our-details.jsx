import { ExempleDetails } from "./exemple-details";

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
        <ExempleDetails></ExempleDetails>
      </div>
    </>
  );
};
