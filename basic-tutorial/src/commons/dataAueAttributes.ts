export interface DataAueAttributes {
    "data-aue-model"?: string,
    "data-aue-resource"?: string,
    "data-aue-type"?: string,
    "data-aue-label"?: string,
    "data-aue-prop"?: string,
}

export const getDataAueAttributes = (props: any, defaultLabel: string, defaultModel: string, defaultType: string, path?: string): DataAueAttributes => 
    !props.disableEditing ? {
        "data-aue-label": props.dataLabel ?? defaultLabel,
        "data-aue-model": props.model ?? defaultModel,
        "data-aue-resource": `urn:aemconnection:${path ?? props.path}`,
        "data-aue-type": defaultType
    } : {};


export const getDataAueRichtextAttributes = (props: any): DataAueAttributes =>
    !props.disableEditing ? {
        "data-aue-prop": "text",
        "data-aue-type": "richtext",
        "data-aue-label": "Text"
    } : {};
