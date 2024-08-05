import React from "react";
import Error from "./Error";
import Loading from "./Loading";
import { StgButton } from "@stg/harmonix-component-library";
import { useButtonByPath } from "../api/usePersistedQueries";

interface ButtonType {
    _path: string;
    label: string;
    ariaLabel: string;
    linkUrl: string;
    extendedLink: boolean;
}

const Button = (props: any) => {
    const path = "/content/dam/my-project/en/buttons/button1";
    const { button, error } = useButtonByPath(props, path);

      // Handle error and loading conditions
    if (error) {
        return <Error errorMessage={error} />;
    } else if (!button) {
        return <Loading />;
    }

    const label = (button as ButtonType).label;
    const linkUrl = (button as ButtonType).linkUrl;
    const extendedLink = (button as ButtonType).extendedLink || true;
    const ariaLabel = (button as ButtonType).ariaLabel;

    return (
        <StgButton
            key={path}
            data-aue-resource={`urn:aemconnection:${path}/jcr:content/data/master`} 
            data-aue-type="component" 
            data-aue-label={label}
            href={linkUrl}
            target={extendedLink ? "_blank" : undefined}
            aria-label={ariaLabel}>
            {label}
        </StgButton>
    );
};

export default Button;
