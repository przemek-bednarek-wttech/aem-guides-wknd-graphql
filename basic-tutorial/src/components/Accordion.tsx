import React from "react";
import { StgAccordionGroup } from "@stg/harmonix-component-library";
import Container from "./Container.tsx";

const Accordion = (props: any) => {
    //const path = props.pagePath + "/jcr:content/" + props.componentSubpath;
    //const { container, error } = useContainerByPath(path);

    // if (error) {
    //     return <Error errorMessage={error} />;
    // } else if (!container) {
    //     return <Loading />;
    // }

    const data = props[":itemsOrder"].map((itemName) => {
        const childItem = props[":items"][itemName];
        if (childItem) {
            childItem.path = props.path + "/" + itemName;
        }

        return {
            ariacontrols: childItem.accessibilityLabel,
            children: <Container {...childItem} model="accordion-item-container"/>,
            content: "",
            title: childItem.panelTitle,
        }
    });

    return (
        <div className={"accordion-content"}>
            <p className="debug">-----------------Accordion-----------------</p>
            <StgAccordionGroup 
              data={data}
            />
        </div>
    );
};

export default Accordion;
