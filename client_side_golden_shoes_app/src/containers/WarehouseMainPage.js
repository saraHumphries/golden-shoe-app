import OrderService from "../services/OrderService";
import { useState, useEffect } from "react";
import WarehouseOrder from "../components/WarehouseOrder";



const WarehouseMainPage = function() {

    const [orders, setOrders] = useState([]);

    const markOrderAsDispatched = function(orderId) {
        const updatedOrder = {
            dispatchedStatus: true
        };
        OrderService.updateOrderDispatchStatus(orderId, updatedOrder);
    };

    

    useEffect(() => {
        removeTopAndTitleBars();
        OrderService.getOrders()
            .then(res => setOrders(res));
    }, [markOrderAsDispatched]);

    
    const removeTopAndTitleBars = function() {
        const topBar = document.getElementById('top-bar');
        topBar.style.display = 'none';
        const titleBar = document.getElementById('title-bar');
        titleBar.style.display = 'none';
    };
    

    const warehouseOrdersList = orders.map((order) => {
        return <WarehouseOrder markOrderAsDispatched={markOrderAsDispatched} order={order} key={order.id}></WarehouseOrder>
    });
    
    return (
        <div className='warehouse-main'>
            <h2 id='shop-title'>GOLDEN SHOE</h2>
            <h1>GOLDEN SHOE ORDERS</h1>
            <div className='table-headings'>
                <h4>order_id</h4>
                <h4>order_date</h4>
                <h4>customer_name</h4>
                <h4>customer_address</h4>
                <div></div>
                <h4>order_items</h4>
            </div>
            {warehouseOrdersList}
        </div>
    );
};

export default WarehouseMainPage;