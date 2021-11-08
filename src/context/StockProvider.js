import React, { useState, useEffect } from 'react';
import StockContext from './StockContext';

export function StockProvider({ children }) {
	const endpoint = '/api/e192eb978c7c426bb2e519da4c9e7a97/abm-stock';
	const payloadInitialState = {
		product: 'default',
		client: 'default',
		quantity: '',
		price: '',
		active: '',
	};
	const [payload, setPayload] = useState(payloadInitialState);
	const [isEditing, setIsEditing] = useState();
	const [tableData, setTableData] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	const [forceUpdate, setForceUpdate] = useState(0);

	const contextData = {
		endpoint,
		forceUpdate,
		setForceUpdate,
		payload,
		setPayload,
		payloadInitialState,
		tableData,
		setTableData,
		isFetching,
		isEditing,
		setIsEditing,
	};

	useEffect(() => {
		fetch(endpoint, {
			method: 'GET',
			headers: { 'content-type': 'application/json' },
		})
			.then((response) => response.json())
			.then((data) => setTableData(data))
			.then(() => setIsFetching(false))
			.catch((err) => console.log(err));
	}, [forceUpdate]);

	return (
		<StockContext.Provider value={contextData}>
			{children}
		</StockContext.Provider>
	);
}
