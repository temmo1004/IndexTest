import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '電動麻將機',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        嘿！看這裡！這就是電動麻將機！🀄️🎮

        不需要約朋友，隨時隨地享受麻將樂趣！超簡單操作，新手老手都適合！多人連線，擴展社交圈！絕對是你的好夥伴，帶來歡樂和刺激！快來感受麻將的魅力吧！💃🎉
      </>
    ),
  },
  {
    title: '麻將機維修',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        沒問題！麻將機維修，快速又可靠！聯絡我們，專業技術團隊將為你解決問題！🀄️🛠️
      </>
    ),
  },
  {
    title: '周邊產品',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        當然！麻將周邊產品多樣有趣！牌套裝、麻將桌、計分板、筒、教學資源等，提升你的麻將體驗！🀄️🎲🎁
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

const GoogleMap = () => {
  // Coordinates for 24°56'57.4"N 121°13'26.3"E
  const mapLatitude = 24.949278;
  const mapLongitude = 121.224028;

  return (
    <div className={styles.googleMap}>
      {/* Google Map iframe with the specified coordinates */}
      <div className={styles.mapContainer}>
        <iframe
          title="Google Map"
          src={`https://maps.google.com/maps?q=${mapLatitude},${mapLongitude}&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          width="90%" // Make the map fill 90% of the width of the container
          height="400" // Set the height of the map (adjust as needed)
        />
      </div>
    </div>
  );
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* Render each feature */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <div className={clsx('col col--8', styles.mapColumn)}>
            {/* Render the Google Map component */}
            <GoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
}
