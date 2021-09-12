import React from "react";
import { Wrapper } from "./styles";

export function ProductTable({ tableData, htmlContent }) {
    return (
        <Wrapper className="Container">
            <div
                id="table-data"
                dangerouslySetInnerHTML={{
                    __html: tableData,
                }}
            />
            <h4>Notes:</h4>
            <div
                id="notes"
                dangerouslySetInnerHTML={{
                    __html: htmlContent,
                }}
            />
        </Wrapper>
    );
}
