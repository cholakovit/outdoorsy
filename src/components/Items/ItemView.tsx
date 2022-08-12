// Styled Elements
import {
  Item,
  ItemImg,
  ItemContent,
  ItemName,
  ItemDescription,
  ItemKeywords,
} from "./Item.styles";

// React functional component
import { FC } from "react";

// Types
import { ItemProps } from "../../store/types";

const ItemView: FC<ItemProps> = ({ item }) => {
  return (
    <Item>
      <ItemImg>
        <img src={`../img/${item.img}`} alt={item.name} loading="lazy" />
      </ItemImg>
      <ItemContent>
        <ItemName variant="subtitle1">
          {item.name.substring(0, 100) + "..."}
        </ItemName>
        <ItemDescription variant="body1">
          {item.description.substring(0, 200) + "..."}
        </ItemDescription>
        <ItemKeywords variant="h6">Keywords: {item.keywords}</ItemKeywords>
      </ItemContent>
    </Item>
  );
};

export default ItemView;
