export function renderButton(text, onClick, class_name) {
	return (
		<button type='button' onClick={ onClick } className={ class_name } >
			{ text }
		</button>
	);
}
