function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between align-center">
          Корзина{' '}
          <img className="removeBtn cu-p" src="/img/крестик.svg" alt="" />
        </h2>

        <div className="items">
          <div className="cardItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cardItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999р</b>
            </div>
            <img className="removeBtn" src="/img/крестик.svg" alt="" />
          </div>
          <div className="cardItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cardItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999р</b>
            </div>
            <img className="removeBtn" src="/img/крестик.svg" alt="" />
          </div>
          <div className="cardItem d-flex align-center mb-20 ">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cardItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999р</b>
            </div>
            <img className="removeBtn" src="/img/крестик.svg" alt="" />
          </div>
        </div>
        <div className="cardTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498руб</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/стрелка.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
