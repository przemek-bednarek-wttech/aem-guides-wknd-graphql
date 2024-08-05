import React from "react";
import { StgButton } from "@stg/harmonix-component-library";

interface ButtonType {
    path: string;
    label: string;
    ariaLabel: string;
    linkUrl: string;
    extendedLink: boolean;
    icon: string;
    type: "primary" | "secondary" | "tertiary" | undefined;
}

const Button = (props: ButtonType) => {

    return (
        <StgButton
            data-aue-resource={`urn:aemconnection:${props.path}`} 
            data-aue-type="component" 
            data-aue-label="Button"
            data-aue-model="button"
            href={props.linkUrl}
            target={props.extendedLink ? "_blank" : undefined}
            aria-label={props.ariaLabel}
            icon={props.icon}
            variant={props.type}>
            {props.label}
        </StgButton>
    );
};

export default Button;
