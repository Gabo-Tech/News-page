import styles from "./List.module.sass";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function List() {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, [getNews]);
  const noticia = news.map((noticia) => {
    return (
      <div key={noticia.id} className={styles.new}>
        <div className={styles.cardbody}>
          <h3 className="card-title">{noticia.title}</h3>
          <p className="card-text">{noticia.abstract}</p>
          <p>
            {noticia.byline}. Published on {noticia.published_date}
          </p>
          <a className="btn btn-primary" href={noticia.url}>
            Read more...
          </a><br/>
          {noticia.media.length !== 0 ? (
            <img
              className="card-img-top img-news"
              src={noticia.media[0]["media-metadata"][2].url}
              alt="imagen"
            />
          ) : null}
        </div>
      </div>
    );
  });
  return <div>{noticia}</div>;
}
