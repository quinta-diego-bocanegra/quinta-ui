import ListHeader from "../components/ListHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListHeaderCell } from "../components/ListHeader";
import { ListHeaderCellValue } from "../components/ListHeader";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
    title: 'Lists/AttributesList/ListHeader',
    component: ListHeader,
    parameters: {
      layout: 'centered',
      viewport: {
        defaultViewport: "tablet",
        viewports: {...INITIAL_VIEWPORTS}
      }
    },
    tags: ['autodocs'],
};

export const Basic = {
    args: {
        icon: <FontAwesomeIcon icon={faImage} size="lg"/>,
        children: (
            <>
                <ListHeaderCell title={"Brand"}>
                    <ListHeaderCellValue>VOLKSWAGEN</ListHeaderCellValue>
                </ListHeaderCell>
            </>
        )
    },
    render: (args) => <div className="w-[640px] flex flex-col"><ListHeader {...args}/></div> 
}

export const TwoCols = {
    args: {
        ...Basic.args,
        children: (
            <>
                <ListHeaderCell title={"Brand"}>
                    <ListHeaderCellValue>VOLKSWAGEN</ListHeaderCellValue>
                </ListHeaderCell>
                <ListHeaderCell title={"Model"} justify={"right"}>
                    <ListHeaderCellValue>2018</ListHeaderCellValue>
                </ListHeaderCell>
            </>
        )
    },
    render: Basic.render
}

