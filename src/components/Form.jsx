export function Form() {
    return (
        <>
        <form method="POST">
            <label>
                _Id
                <input type="text" />
            </label>
            <label>
                Quantity
                <input type="number" min="1" step="1"/>
            </label>
            <label>
                Price
                <input type="number" min="1" step="any" />
            </label>
            <label>
                Product
                <select name="product" id="product">
                    <option value="default">default_product</option>
                </select>
            </label>
            <label>
                Client
                <select name="client" id="client">
                    <option value="default">default_client</option>
                </select>
            </label>
            <label>
                Active
                <label htmlFor="active_yes">
                    <input type="radio" name="active" id="active_yes" />
                    yes
                </label>
                <label htmlFor="active_no">
                    <input type="radio" name="active" id="active_no" />
                    no
                </label>
            </label>
            <button type="submit">Register</button>
        </form>
        </>
    )
}