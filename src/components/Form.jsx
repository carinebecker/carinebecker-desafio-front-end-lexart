import { useContext } from 'react';
import { renderButton } from './util/renderButton';
import StockContext from '../context/StockContext';

export function Form() {
	const {
		endpoint,
		setForceUpdate,
		payload,
		setPayload,
		payloadInitialState,
		tableData,
		setTableData,
		isEditing,
		setIsEditing,
	} = useContext(StockContext);

	function handleChange({ target }) {
		const { name, value } = target;
		setPayload({ ...payload, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch(endpoint, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(payload),
		})
			.then((response) => response.json())
			.then((data) => setTableData([...tableData, data]))
			.then(() => setPayload(payloadInitialState))
			.catch((err) => console.log(err));
	}

	function handleEdit(id) {
		delete payload._id;
		fetch(`${endpoint}/${id}`, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(payload),
		})
			.then(() => setPayload(payloadInitialState))
			.then(() => setIsEditing(false))
			.then(() => setForceUpdate((value) => value + 1))
			.catch((err) => console.log(err));
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Quantity
				<input
					type='number'
					min='1'
					step='1'
					name='quantity'
					placeholder='0'
					onChange={handleChange}
					value={payload.quantity}
					required
				/>
			</label>
			<label>
				Price
				<input
					type='number'
					name='price'
					min='1'
					placeholder='0.00'
					onChange={handleChange}
					value={payload.price}
					required
				/>
			</label>
			<label>
				Product
				<select name='product' id='product' onChange={handleChange}>
					<option value='default'>default_product</option>
				</select>
			</label>
			<label>
				Client
				<select name='client' id='client' onChange={handleChange}>
					<option value='default'>default_client</option>
				</select>
			</label>
			<label>
				Active
				<label htmlFor='active_yes'>
					<input
						type='radio'
						name='active'
						id='active_yes'
						value='yes'
						checked={payload.active === 'yes'}
						onChange={handleChange}
						required
					/>
					yes
				</label>
				<label htmlFor='active_no'>
					<input
						type='radio'
						name='active'
						id='active_no'
						value='no'
						onChange={handleChange}
					/>
					no
				</label>
			</label>
			{isEditing === true
				? renderButton('Edit', () => handleEdit(payload._id))
				: renderButton('Register', (e) => handleSubmit(e))}
		</form>
	);
}
