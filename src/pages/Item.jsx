import ItemComponent from '../components/Item/ItemComponent';
import ItemHeaderComponent from '../components/Item/ItemHeaderComponent';
import '../styles/item.css';

const Item = () => {
  return (
    <div className="content-body-item">
      <ItemHeaderComponent />
      <hr />
      <ItemComponent />
    </div>
  );
};
export default Item;
