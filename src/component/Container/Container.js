import propTypes from "prop-types"
import styles from '../Container/Container.module.css'
const Container = (props) => {
    return(
        <section className={styles.container}>
            {props.children}
        </section>
    )
}
// protype dibawah ialah modul yang digunakan unutk memberi warning ketika section container menambahkan sebuah tag element
Container.propTypes = {
    children: propTypes.node
}
export default Container