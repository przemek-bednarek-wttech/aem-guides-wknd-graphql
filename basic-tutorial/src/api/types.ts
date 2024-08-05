export interface ContainerType {
    path: string,
    ":items": { [key: string]: any };
    ":itemsOrder": string[];
}
