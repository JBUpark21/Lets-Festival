import Styles from '../styles/App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const comic01 = 'images/hwa.jpg';
  const comic02 = 'images/sung.jpg';
  const comic03 = 'images/고양가을꽃축제003.jpg';
  const comic04 = 'images/꽃박람회(1).jpg';
  const comic05 = 'images/제주들불축제(2).jpg';
  const url01 = '/Fmain';
  const url02 = '/Fmain';
  const url03 = '/Fmain';
  const url04 = '/Fmain';
  const url05 = '/Fmain';

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: '1',
      image: comic01,
      url: url01,
    },
    {
      id: '2',
      image: comic02,
      url: url01,
    },
    {
      id: '3',
      image: comic03,
      url: url03,
    },
    {
      id: '4',
      image: comic04,
      url: url04,
    },
    {
      id: '5',
      image: comic05,
      url: url05,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index]);

  return (
    <div className={Styles.App}>
      <div className={Styles.carousel}>
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexLefta = mod(index - 2, cards.length);

          const indexRight = mod(index + 1, cards.length);

          const indexRighta = mod(index + 2, cards.length);

          let className = 'card';

          if (i === index) {
            className = Styles.card;
          } else if (i === indexRight) {
            className = Styles.cardleft;
          } else if (i === indexRighta) {
            className = Styles.cardlefta;
          } else if (i === indexLeft) {
            className = Styles.cardright;
          } else if (i === indexLefta) {
            className = Styles.cardrighta;
          } else className = 'card';

          return (
            <div className={Styles.imgbox}>
              <a href={item.url}>
                {' '}
                <h3>
                  <img
                    key={item.id}
                    className={className}
                    src={item.image}
                    alt="Comic"
                  ></img>
                </h3>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
