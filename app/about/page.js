import styles from '@/app/about/about.module.css'

export default function About() {
    return (
        <div>
        <h1 className={styles.about}>Sobre Nós</h1>

        <h2>Informações de contato:
            <br></br>
            Email: contato@email.com
            <br></br>
            
            Endereço: Rua das Pedras 944

        
        </h2>
        <img src="https://media1.tenor.com/images/2954f6fb5fa96cd38b989e265015c30e/tenor.gif?itemid=14847680
" alt="Wallpaper" className={styles.Wallpaper} />
        </div>
    )
}
