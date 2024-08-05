import Accordion from "./components/Accordion.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";
import ExperienceFragment from "./components/ExperienceFragment.tsx"
import Text from "./components/Text.tsx";

export const componentMapper: Map<string, React.FC<any>> = new Map();

const initialize = () => {
    componentMapper.set("straumann/components/container", Container);
    componentMapper.set("straumann/components/accordion", Accordion);
    componentMapper.set("straumann/components/experiencefragment", ExperienceFragment)

    componentMapper.set("straumann/components/stgbutton", Button);
    componentMapper.set("straumann/components/text", Text);
};

setTimeout(initialize, 0);
