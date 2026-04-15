import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";

const MenuSection = ({ title, items, onAddToCart }) => {
    const [quantities, setQuantities] = useState(
        Object.fromEntries(items.map((item) => [item.id, 1]))
    );

    const handleQtyChange = (id, value) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Number(value),
        }));
    };

    return (
        <Table borderless className="menu-table">
            <thead>
            <tr>
                <th className="menu-header" colSpan={4}>
                    {title}
                </th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <tr>
                        <td className="item-name">{item.name}</td>

                        <td className="item-price">
                            ${item.price}
                        </td>

                        <td className="item-qty">
                            <Form.Select
                                size="sm"
                                value={quantities[item.id]}
                                onChange={(e) => handleQtyChange(item.id, e.target.value)}
                            >
                                {[1, 2, 3, 4, 5].map((qty) => (
                                    <option key={qty} value={qty}>
                                        {qty}
                                    </option>
                                ))}
                            </Form.Select>
                        </td>

                        <td className="item-add">
                            <i
                                className="fa-solid fa-plus add-icon"
                                style={{ cursor: "pointer" }}
                                onClick={() => onAddToCart(item.id, quantities[item.id])}
                            ></i>
                        </td>
                    </tr>

                    <tr>
                        <td className="item-description" colSpan={4}>
                            {item.description}
                        </td>
                    </tr>
                </React.Fragment>
            ))}
            </tbody>
        </Table>
    );
};

export default MenuSection;