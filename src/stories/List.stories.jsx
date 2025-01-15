import List from "../components/List";
import { ListBodyContainer } from "../components/List";
import ListItem from "../components/ListItem";
import ListHeader from "../components/ListHeader";
import { TwoCols } from "./ListHeader.stories";
import { Default } from "./ListItem.stories";
import { Basic as BasicHeader } from "./ListHeader.stories";
import { Row } from "./ListItem.stories";

export default {
    title: 'Lists/AttributesList/List',
    component: List,
    parameters: {
      layout: 'centered',
    },
    argTypes:{
      numberOfChildren:{
        control: "number"
      }
    },
    args: {
      numberOfChildren: 5
    },
    tags: ['autodocs'],
};

export const Basic = {
  args: {

  },
  render: ({numberOfChildren, ...args}) => (
    <div className="w-[640px]">
      <List>
        <ListHeader {...BasicHeader.args}/>
        <ListBodyContainer>
          {
            renderChildren(numberOfChildren, <ListItem {...Default.args}/>)
          }
        </ListBodyContainer>
      </List>
    </div>
  )
};

export const Extended = {
  args:{},
  render: ({numberOfChildren, ...args}) => (
    <div className="w-[640px]">
      <List>
        <ListHeader {...TwoCols.args}/>
        <ListBodyContainer>
          {
            renderChildren(numberOfChildren, <ListItem {...Row.args}/>)
          }
        </ListBodyContainer>
      </List>
    </div>
  )
}

function renderChildren(numberOfChildren, child){

  const children = [];

  for (let index = 0; index < numberOfChildren; index++) {
    children.push(child)
  }

  return children;
}