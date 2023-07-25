// 引入 React 模組和其他相依性
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

// 引入 CSS 樣式
import styles from './index.module.css';

// 首頁標頭部分的組件
function HomepageHeader() {
  // 使用 useDocusaurusContext 鉤子獲取 Docusaurus 的配置資料
  const { siteConfig } = useDocusaurusContext();
  
  return (
    // 標頭部分的 HTML 結構，包含網站的標題、標語和教程按鈕
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* 網站標題 */}
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* 網站標語 */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* 指向 Docusaurus 教程的按鈕 */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/過山車-">
            現在就開始購物
          </Link>
        </div>
      </div>
    </header>
  );
}

// 首頁的主組件
export default function Home() {
  // 使用 useDocusaurusContext 鉤子獲取 Docusaurus 的配置資料
  const { siteConfig } = useDocusaurusContext();
  
  return (
    // 使用 Layout 組件設置網頁的標題和描述
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* 首頁標頭部分 */}
      <HomepageHeader />
      <main>
        {/* 首頁的主要內容部分，可能包含特色內容 */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
