import propTypes from "prop-types"
// untuk mengenerate sebuah multiple class dan sebuah dynamic class berdasarkan data tertentu
import classNames from 'classnames'
import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'
import styles from '../Todos/Todos.module.css'
const Todos = (props) =>{
    return(
        <div className={styles.todos}>
        {props.todos.map((todo, index , arr) => {
          return(
            <div key={index} 
            // className={`todo ${!(arr.length === index + 1) && 'todo-devider'}`}
            className={classNames(styles.todo, {
                [styles.todoDevider] : !(arr.length === index + 1)
            })}
            > 
              {todo.title}
              <div className={styles.todoIconWrapper}>
                <div className={styles.todoCount}>
                  {todo.count}
                </div>

                <button onClick={() => props.onSubtractionCount(index)} className={styles.todoActionButton}>
                  <img src={minusIcon} alt="minus icon"/>
                </button>

                <button onClick={() => props.onAdditionalCount(index)} className={styles.todoActionButton}>
                  <img src={plusIcon} alt="plus icon"/>
                </button>
              </div>
            </div>
            
          )
        })}
      </div>
    )
}
Todos.propTypes = {
    todos: propTypes.arrayOf(propTypes.shape({
        title : propTypes.string,
        count : propTypes.number
    })),
    onSubtractionCount : propTypes.func,
    onAdditionalCount : propTypes.func
}

export default Todos