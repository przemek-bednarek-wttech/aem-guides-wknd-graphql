import Container from "./Container.tsx"

const ExperienceFragment = (props: any) => {
    const newProps = JSON.parse(JSON.stringify(props));
    newProps.className = "experience-fragment";
    newProps.model = "experience-fragment";
    newProps.dataLabel = "Experience Fragment";
    return Container(newProps);
}

export default ExperienceFragment;