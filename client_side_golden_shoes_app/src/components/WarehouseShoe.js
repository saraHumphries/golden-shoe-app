import { useEffect, useState } from "react/cjs/react.development";
import StockService from "../services/StockService";
import WarehouseStockItem from "./WarehouseStockItem";

const WarehouseShoe = function({shoeType}) {

    const [stockItems, setStockItems] = useState([]);

    useEffect(() => {
        StockService.getUnsoldStockItemsByShoeTypeId(shoeType.id)
            .then(res => setStockItems(res));
    }, []);

   

    const warehouseStockItems = stockItems.map((warehouseStockItem, index) => {
        return <WarehouseStockItem index={index} warehouseStockItem = {warehouseStockItem} key={warehouseStockItem.id}></WarehouseStockItem>
    });

    


    return (
        <div id='warehouse-stock-table'>
            <div id='shoe-type-info'>
                <div>
                    <img className="show-shoe-image"src={shoeType.imageUrl}></img>
                    <p className='shoe-text'>{shoeType.brand}</p>
                    <h6 className='shoe-text'>{shoeType.description}</h6>
                </div>
                {stockItems.length < 5? <p id='low-stock-text'>LOW STOCK!!</p> : null}
            </div>
            <div id='stock-info-section'>
                <h3>{stockItems.length} items left in stock</h3>
                {warehouseStockItems}
            </div>
        </div>
    );
};

export default WarehouseShoe;