import { useState } from "react";

export function Form() {
	const [payload, setPayload] = useState({
		product: "default",
		client: "default",
	});

	function handleChange({ target }) {
		const { name, value } = target;
		setPayload({ ...payload, [name]: value });
	}

	function handlePriceChange({ target }) {
		const { name, value } = target;
		setPayload({ ...payload, [name]: parseFloat(value).toFixed(2) });
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/api/bf3c6a69da854c03926955a6c2051f0f/abm-stock", {
			method: "POST",
			headers: { "content-type": "application/json"},
			body: JSON.stringify(payload),
		})
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
	}

	return (
		<form onSubmit={ handleSubmit }>
			<label>
				Quantity
				<input
					type="number"
					min="1"
					step="1"
					name="quantity"
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Price
				<input
					type="number"
					name="price"
					min="1"
					step="0.01"
					placeholder="0.00"
					onChange={ handlePriceChange }
					required
				/>
			</label>
			<label>
				Product
				<select name="product" id="product" onChange={ handleChange }>
					<option value="default">default_product</option>
				</select>
			</label>
			<label>
				Client
				<select name="client" id="client" onChange={ handleChange }>
					<option value="default">default_client</option>
				</select>
			</label>
			<label>
				Active
				<label htmlFor="active_yes">
					<input
						type="radio"
						name="active"
						id="active_yes"
						value="yes"
						onChange={ handleChange }
						required
					/>
					yes
				</label>
				<label htmlFor="active_no">
					<input
						type="radio"
						name="active"
						id="active_no"
						value="no"
						onChange={ handleChange }
					/>
					no
				</label>
			</label>
			<button>Register</button>
		</form>
	);
}
