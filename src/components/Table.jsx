import { useContext } from 'react';
import StockContext from '../context/StockContext';
import { renderButton } from './util/renderButton';

export function Table() {
	const {
		endpoint,
		setForceUpdate,
		setPayload,
		tableData,
		isFetching,
		setIsEditing,
	} = useContext(StockContext);

	function handleSelect(id) {
		fetch(`${endpoint}/${id}`, {
			method: 'GET',
			headers: { 'content-type': 'application/json' },
		})
			.then((response) => response.json())
			.then((data) => setPayload(data))
			.then(() => setIsEditing(true))
			.catch((err) => console.log(err));
	}

	function handleDelete(id) {
		window.confirm('Are you sure you want to delete the item?');
		fetch(`${endpoint}/${id}`, {
			method: 'DELETE',
			headers: { 'content-type': 'application/json' },
		})
			.then(() => setForceUpdate((value) => value + 1))
			.catch((err) => console.log(err));
	}

	function renderData() {
		return tableData.map(
			({ _id: id, quantity, product, price, client, active }) => (
				<tr key={id}>
					<td>{id}</td>
					<td>{quantity}</td>
					<td>{product}</td>
					<td>${price}</td>
					<td>{client}</td>
					<td>{active}</td>
					<td>{renderButton('Select', () => handleSelect(id), 'table-button green')}</td>
					<td>{renderButton('Delete', () => handleDelete(id), 'table-button red')}</td>
				</tr>
			)
		);
	}

	return (
		<div>
			{isFetching ? (
				<p>loading data...</p>
			) : (
				<table className='stocks-table'>
					<thead>
						<tr>
							<th>_Id</th>
							<th>Quantity</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Client</th>
							<th>Active</th>
                            <th></th>
                            <th></th>
						</tr>
					</thead>
					<tbody>{ renderData() }</tbody>
				</table>
			)}
		</div>
	);
}
