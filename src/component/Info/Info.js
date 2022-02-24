import propTypes from "prop-types"
import styles from '../Info/Info.module.css'
const Info = (props) => {
    return (
        <div className={styles.Info}>
        <div className={styles.InfoTotal}>
          <p>{`Total List : ${props.todosLength}`}</p>
        </div>
        <div className={styles.InfoTotal}>
          <p>{`Total counts : ${props.totalCounts}`}</p>
        </div>
      <button onClick={props.onDelete} className={styles.deleteAllButton}>Delete all List</button>  
      </div>
    )
}
Info.propTypes = {
    todosLength : propTypes.number,
    totalCounts : propTypes.func,
    onDelete : propTypes.func
}
export default Info