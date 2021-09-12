import React from "react";
import { Wrapper } from "./styles";
export function PageContent({ center, htmlContent }) {
  return (
    <Wrapper center={center}>
      <div
        className="Container content"
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
      />
    </Wrapper>
  );
}
