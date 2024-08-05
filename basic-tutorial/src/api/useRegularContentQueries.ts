import { useEffect, useState } from "react";
import { ContainerType } from "./types";

async function fetchRegularContent(path) {
    let data;
    let err;

    try {
        const response = await fetch("https://localhost:8443" + path + ".model.json", {headers: {"Authorization": "Basic YWRtaW46YWRtaW4="}});
        data = await response.json();
    } catch (e) {
        // An error occurred, return the error messages
        console.error(e);
    }

    // Return the GraphQL and any errors
    return { data, err };
}


/**
 * Custom hook that calls the 'my-project/components-by-container-path' persisted query.
 *
 * @returns an array of Team JSON objects, and array of errors
 */
export function useContainerByPath(props: ContainerType, path: string): { container: ContainerType | undefined, error: any } {
    const [container, setContainer] = useState<ContainerType>();
    const [error, setError] = useState(null);
  
    // Use React useEffect to manage state changes
    useEffect(() => {
      async function fetchData() {
        // Call the AEM GraphQL persisted query named "my-project/components-by-container-path"
        const { data, err } = await fetchRegularContent(path);
        // Sets the items variable to the list of team JSON objects
        setContainer(data as ContainerType);
        // Set any errors
        setError(err);
      }
      // Call the internal fetchData() as per React best practices
      if (props?.path) {
        setContainer(props);
      } else {
        fetchData();
      }
    }, [path]);
  
    return { container, error };
  }