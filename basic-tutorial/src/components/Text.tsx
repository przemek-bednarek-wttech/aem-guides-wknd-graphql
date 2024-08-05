import React from "react";

const Text = (props: any) => {
    const text = props.text;
    const cssClasses = props.cssClasses ? " " + props.cssClasses : "";

    return (
        <div className={"text-content" + cssClasses}
            data-aue-resource={!props.disableEditing ? `urn:aemconnection:${props.path}` : ""} 
            data-aue-type={!props.disableEditing ? "component" : ""}
            data-aue-label={!props.disableEditing ? "Text" : ""}
            data-aue-model={!props.disableEditing ? "text" : ""}>
            <div className="text-inner-content" 
                data-aue-prop={!props.disableEditing ? "text" : ""}
                data-aue-type={!props.disableEditing ? "richtext" : ""}
                data-aue-label={!props.disableEditing ? "Text" : ""}
                dangerouslySetInnerHTML={{__html: text}}>
            </div>
        </div>
    );
};

export default Text;