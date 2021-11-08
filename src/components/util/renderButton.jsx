export function renderButton(text, onClick) {
	return (
		<button type='button' onClick={onClick}>
			{text}
		</button>
	);
}
