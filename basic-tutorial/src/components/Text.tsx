import React from "react";

const Text = (props: any) => {
    const text = props.text;
    const cssClasses = props.cssClasses ? " " + props.cssClasses : "";

    return (
        <div className={"text-content" + cssClasses}
            data-aue-resource={`urn:aemconnection:${props.path}`} 
            data-aue-type="component"
            data-aue-label="Text"
            data-aue-model="text">
            <div className="text-inner-content" 
                data-aue-prop="text" 
                data-aue-type="richtext" 
                data-aue-label="Text"
                dangerouslySetInnerHTML={{__html: text}}>
            </div>
        </div>
    );
};

export default Text;