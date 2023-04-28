import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
  return [
    { title: 'GuitarLA - Sobre Nosotros' },
    { description: 'Venta de Guitarras' }
  ]
}

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'preload', href: imagen, as: 'image' },
  ]
}

export default function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non voluptate perferendis quae quam, tempora a molestiae. Saepe fuga cum cupiditate in eaque aliquam, impedit dolores veritatis! Itaque, iure expedita?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ratione expedita et sapiente incidunt tempora, suscipit id non nihil ad dignissimos, obcaecati eos cupiditate voluptatem commodi iste, culpa quas dolorem assumenda? Aliquid, porro nobis deleniti quas ducimus totam ipsum ea culpa eligendi architecto dolor at voluptate ullam repudiandae consequatur quidem?</p>
        </div>
      </div>
    </main>
  );
};
