import React, { useState } from 'react';
import styles from './MaijiangMachine.module.css';

const MaijiangMachine = () => {
  // 假設有三張圖片
  const images = [
    require('../static/img/過山車(1).jpg').default,
    require('../static/img/過山車(2).jpg').default,
    require('../static/img/過山車(3).jpg').default,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (step) => {
    // 切換到下一張圖片，循環播放
    let nextImage = (currentImage + step + images.length) % images.length;
    setCurrentImage(nextImage);
  };

  return (
    <div className={styles.maijiangMachine}>
  <div className={styles.imageAndButtons}>
    <div className={styles.imageContainer}>
      <img src={images[currentImage]} alt="麻將機圖片" className={styles.image} />
      <div className={styles.arrowButtonsContainer}>
        <button className={styles.arrowButtons} onClick={() => changeImage(-1)}>
          ←
        </button>
        <button className={styles.arrowButtons} onClick={() => changeImage(1)}>
          →
        </button>
      </div>
    </div>
  </div>
  <div className={styles.content}>
    <h2>蟠龍獻瑞3號</h2>
    <ul>
      <li>價格：NT$ 2,5000</li>
      <li>
        說明：蟠龍獻瑞3號機是一款精心設計的產品，將傳統的麻將遊戲與現代科技相結合。它的實木外觀質感出眾，為您的娛樂空間增添了一抹高雅的風采。擁有自動洗牌、發牌等電動功能，使您能夠輕鬆地與家人和朋友一起享受麻將遊戲的樂趣，同時節省了大量手動處理牌的時間。
      </li>
    </ul>
  </div>
</div>
  );
};

export default MaijiangMachine;
