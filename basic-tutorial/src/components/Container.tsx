import React from "react";
import Error from "./Error";
import Loading from "./Loading";
import { useContainerByPath } from "../api/useRegularContentQueries.ts";
import { componentMapper } from "../componentsmapper.ts";

const Container = (props: any) => {
    const path = props.path ?? props.pagePath + "/jcr:content/" + props.componentSubpath;
    const { container, error } = useContainerByPath(props, path);

    if (error) {
        return <Error errorMessage={error} />;
    } else if (!container) {
        return <Loading />;
    }

    return (
        <div
            className="container"
            data-aue-model={props.model ?? ""}
            data-aue-resource={`urn:aemconnection:${path}`} 
            data-aue-type="container">
          {container[":itemsOrder"] && container[":itemsOrder"].length > 0 && 
          (<div className="container-list">
            {container[":itemsOrder"].map((itemName) => {
                const item = container[":items"][itemName];
                if (item) {
                    item.path = path + "/" + itemName;
                }
                const type = componentMapper.get(item?.[":type"]);

                if (type) {
                    return <div key={itemName}> {React.createElement(type, item)} </div>;
                } else {
                    return null;
                }
            })}
          </div>)}
          
        </div>
    );
};

export default Container;
