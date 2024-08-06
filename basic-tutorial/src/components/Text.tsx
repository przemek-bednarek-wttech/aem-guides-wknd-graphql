import React from "react";
import { getDataAueAttributes, getDataAueRichtextAttributes } from "../commons/dataAueAttributes.ts";

const Text = (props: any) => {
    const text = props.text;
    const cssClasses = props.cssClasses ? " " + props.cssClasses : "";

    const dataAueAttributes = getDataAueAttributes(props, "Text", "text", "component");
    const textEdit = getDataAueRichtextAttributes(props);

    return (
        <div className={"text-content" + cssClasses}
            {...dataAueAttributes}>
            <div className="text-inner-content" 
                {...textEdit}
                dangerouslySetInnerHTML={{__html: text}}>
            </div>
        </div>
    );
};

export default Text;