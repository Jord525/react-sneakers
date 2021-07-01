import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/белый-лайк.svg" alt="s" />
      </div>
      <img width={133} height={112} src={props.ImageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column  ">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className="button">
          <img width={12} height={12} src="/img/plus2.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
export default Card;
