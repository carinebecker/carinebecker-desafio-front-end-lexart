import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export function Table() {
	const [data, setData] = useState();

	useEffect(() => {
        setData([
            {
                _id: "6185db7197069d03e848f9cf",
                product: "default",
                client: "default",
                quantity: "2",
                price: "1.09",
                active: "no",
            },
        ])
		// fetch("/api/00acaa3ac09645bc9ebf58dec2a3775f/abm-stock", {
		// 	method: "GET",
		// 	headers: { "content-type": "application/json" },
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => setData(data))
		// 	.catch((err) => console.log(err));
	}, []);

    function renderSelectBtn() {
        return <button>Select</button>
    }

    function renderDeleteBtn() {
        return <button>Delete</button>
    }

	function renderData() {
		return data.map(({ _id: id, quantity, product, price, client, active }) => (
            <tr>
                <td>{ id }</td>
                <td>{ quantity }</td>
                <td>{ product }</td>
                <td>{ price }</td>
                <td>{ client }</td>
                <td>{ active }</td>
                <td>{ renderSelectBtn() }</td>
                <td>{ renderDeleteBtn() }</td>
            </tr>
        ));
	}

	return (
		<div>
			<table>
                <thead>
                    <tr>
                        <th>_Id</th>
                        <th>Quantity</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Client</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {!data ? <p>loading data...</p> : renderData()}
                </tbody>
            </table>
		</div>
	);
}
