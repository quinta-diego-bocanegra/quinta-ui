import ListItem from "../components/ListItem";
import { ListItemValue } from "../components/ListItem";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Lists/AttributesList/ListItem',
    component: ListItem,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
      display: {
          control: "radio",
          options: ["horizontal", "vertical"],
          mapping: {horizontal: "row", vertical: "col"}
      }
  },
    tags: ['autodocs'],
};

export const Default = {
  args: {
    icon: faGauge,
    title: "Mileage",
    children: <ListItemValue>1300</ListItemValue>
  },

};

export const Row = {
  args: {
    icon: faScrewdriverWrench,
    title: "Maintenance",
    display: "row",
    children: <ListItemValue>05/06</ListItemValue>,
  },
  render: args => <div className="w-[360px] flex flex-col"><ListItem {...args}/></div>
}