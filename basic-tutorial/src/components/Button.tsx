import React from "react";
import { StgButton } from "@stg/harmonix-component-library";
import { getDataAueAttributes } from "../commons/dataAueAttributes.ts";

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

    const dataAueAttributes = getDataAueAttributes(props, "Button", "button", "compomnent")

    return (
        <StgButton
            {...dataAueAttributes}
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
