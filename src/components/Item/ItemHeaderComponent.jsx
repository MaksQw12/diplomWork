import '../../styles/itemHeaderComponent.css';
const ItemHeaderComponent = () => {
  return (
    <div className="content-header-item">
      <input type="text" placeholder="Поиск..." className="item-input" />

      <button className="item-button">Поиск</button>
    </div>
  );
};
export default ItemHeaderComponent;
