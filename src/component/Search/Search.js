import propTypes from "prop-types"
import styles from '../Search/Search.module.css'
const SearchInput = (props) => {
    return(
        <form className={styles.form} onSubmit={props.onSubmit}>
        <input className={styles.input} type='text' placeholder='List'
         onChange={props.onChange} value={props.value} />
        <button className={styles.button} type='submit'>add</button>
      </form>
    )
}
SearchInput.prototype = {
    onsubmit: propTypes.func,
    onchange : propTypes.func,
    value : propTypes.func
}
export default SearchInput