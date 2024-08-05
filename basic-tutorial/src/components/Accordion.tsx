import React from "react";
import { StgAccordionGroup } from "@stg/harmonix-component-library";
import AccordionItem from "./AccordionItem.tsx";

const Accordion = (props: any) => {

    const data = props[":itemsOrder"].map((itemName) => {
        const childItem = props[":items"][itemName];
        if (childItem) {
            const childItemPath = props.path + "/" + itemName
            childItem.path = childItemPath;
            childItem.key = childItemPath;

            return {
                ariacontrols: childItem.accessibilityLabel,
                children: <AccordionItem {...childItem}/>,
                content: "",
                title: childItem.panelTitle,
            }
        } else {
            return null;
        }
    });

    return (
        <div className={"accordion-content"}
            data-aue-model="accordion"
            data-aue-resource={`urn:aemconnection:${props.path}`} 
            data-aue-type="container"
            data-aue-label="Accordion">
            <StgAccordionGroup 
              data={data}
            />
        </div>
    );
};

export default Accordion;
