import React from "react";
import Error from "./Error";
import Loading from "./Loading";
import { useContainerByPath } from "../api/useRegularContentQueries.ts";
import { componentMapper } from "../componentsmapper.ts";
import { DataAueAttributes, getDataAueAttributes } from "../commons/dataAueAttributes.ts";

const Container = (props: any) => {
    const path = props.path ?? props.pagePath + "/jcr:content/" + props.componentSubpath;
    const disableChildEditing = props.model == "experience-fragment";
    const { container, error } = useContainerByPath(props, path);

    if (error) {
        return <Error errorMessage={error} />;
    } else if (!container) {
        return <Loading />;
    }

    const dataAueAttributes = getDataAueAttributes(props, "Container", "container", "container", path)

    return (
        <div
            className={props.className ?? "container"}
            key={props.key}
            {...dataAueAttributes}
            >
          {container[":itemsOrder"] && container[":itemsOrder"].length > 0 && 
          (<div className="container-list">
            {container[":itemsOrder"].map((itemName) => {
                const item = container[":items"][itemName];
                if (item) {
                    item.path = path + "/" + itemName;
                    item.disableEditing = disableChildEditing || props.disableEditing;
                }
                const type = componentMapper.get(item?.[":type"]);

                if (type) {
                    return <div key={item.path}> {React.createElement(type, item)} </div>;
                } else {
                    return null;
                }
            })}
          </div>)}
          
        </div>
    );
};

export default Container;
