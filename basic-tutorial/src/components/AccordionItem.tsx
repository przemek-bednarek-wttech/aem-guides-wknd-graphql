import Container from "./Container.tsx"

const AccordionItem = (props: any) => {
    const newProps = JSON.parse(JSON.stringify(props));
    newProps.className = "accordion-item";
    newProps.model = "accordion-item";
    newProps.dataLabel = "Accordion Item";
    return Container(newProps);
}

export default AccordionItem;