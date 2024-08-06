import React from "react";
import { StgAccordionGroup } from "@stg/harmonix-component-library";
import AccordionItem from "./AccordionItem.tsx";
import { getDataAueAttributes } from "../commons/dataAueAttributes.ts";

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

    const dataAueAttributes = getDataAueAttributes(props, "Accordion", "accordion", "container")

    return (
        <div className={"accordion-content"}
            {...dataAueAttributes}>
            <StgAccordionGroup 
              data={data}
            />
        </div>
    );
};

export default Accordion;
