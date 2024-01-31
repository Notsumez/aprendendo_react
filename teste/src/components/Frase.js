import styles from './Frase.module.css';

function Frase () {
    return (
        <div className={styles.frase_container}>
            <p className={styles.fraseContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor doloremque corrupti nulla sint consequuntur, ut, quod debitis ipsa odit enim quas, animi incidunt excepturi sunt beatae dignissimos ullam quidem.</p>
        </div>
    )
}

export default Frase