import React from "react";
import { Wrapper } from "./styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PageContent } from "../PageContent";

export function FacilityTab({ facilities }) {
    return (
        <Wrapper>
            <Tabs selectedTabClassName="active-tab">
                <TabList className="Container">
                    {facilities.map((facility) => (
                        <Tab className="tabs" key={facility.id}>
                            {facility.name}
                        </Tab>
                    ))}
                </TabList>
                {facilities.map((facility) => (
                    <TabPanel key={facility.id}>
                        <div className="heading Container">
                            <h3>{facility.name}</h3>
                        </div>
                        <PageContent htmlContent={facility.content.html} />
                    </TabPanel>
                ))}
            </Tabs>
        </Wrapper>
    );
}
