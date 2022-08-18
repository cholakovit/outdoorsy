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
    <Item role='itemTest'>
      <ItemImg data-testid='itemImg'>
        <img src={`../img/${item.img}`} alt={item.name} loading="lazy" data-testid='itemImg' />
      </ItemImg>
      <ItemContent>
        <ItemName variant="subtitle1" data-testid='itemName'>
          {item.name?.substring(0, 100) + "..."}
        </ItemName>
        <ItemDescription variant="body1" data-testid='itemDescription'>
          {item.description?.substring(0, 200) + "..."}
        </ItemDescription>
        <ItemKeywords variant="h6" data-testid='itemKeywords'>{`Keywords: ${item.keywords}`}</ItemKeywords>
      </ItemContent>
    </Item>
  );
};

export default ItemView;
