import styles from '@/components/Header/header.module.css'
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className={styles.header}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/gallery">Galeria de Gatos</Link></li>
                    <li><Link href="/galeria">Texto Oculto</Link></li>
                    <li><Link href="/gerenciamento">Contador</Link></li>
                    <li><Link href="/counter">Contador com Reset</Link></li>
                    <li><Link href="/file">Alterar Título</Link></li>
                </ul>
            </nav>
        </header>
    )
}