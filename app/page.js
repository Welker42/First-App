import image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <img src="https://camo.githubusercontent.com/1ecb2e9568d5f780044c7f401a8e54226e921a9fa74868131f82bb45872e0214/68747470733a2f2f63646e622e61727473746174696f6e2e636f6d2f702f6173736574732f696d616765732f696d616765732f3033362f3132352f3430352f6f726967696e616c2f69676f722d667265697461732d6d6573612e6769663f31363136373739353632" alt="Wallpaper" className={styles.Wallpaper} />
      <h1 className={styles.title}>Página Inicial Gatos</h1>
      <h2 className={styles.texto}>Seja bem vindo,essa página é designada a gerar fotos de gatos aleatórios</h2>
    </div>
  );
}
