import React, { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";

interface Character {
  id: string;
  name: string;
  image: string;
  location: { name: string };
  status: "Alive" | "Dead" | "Unknown";
}

interface CardsProps {
  results: Character[];
}

const Cards: React.FC<CardsProps> = ({ results }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga, puedes reemplazarlo con la lógica real
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [results]);

  let display: JSX.Element | string;

  if (loading) {
    display = (
      <>
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={styles.cardsContainer}>
              <div className={styles.cards}>
                <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
                <div style={{ padding: "10px" }}>
                  <div
                    className={`${styles.name} ${styles.skeleton} ${styles.skeletonTextName}`}
                  />
                  <div>
                    <div
                      className={`${styles.lastLocationText} ${styles.skeleton} ${styles.skeletonTextLocation}`}
                    />
                    <div
                      className={`${styles.locationName} ${styles.skeleton} ${styles.skeletonTextLocationName}`}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.badge} ${styles.skeleton} ${styles.skeletonTextBadge}`}
                style={{
                  position: "absolute",
                }}
              />
            </div>
          ))}
      </>
    );
  } else if (results) {
    display = (
      <>
        {results.map((x) => {
          const { id, name, image, location, status } = x;
          return (
            <div key={id} className={styles.cardsContainer}>
              <Link to={`/characters/${id}`} className={styles.linkStyle}>
                <div className={styles.cards}>
                  <img
                    src={image}
                    alt=""
                    className={styles.img}
                    style={{ width: "100%", display: "block" }}
                  />
                  <div style={{ padding: "10px" }}>
                    <div className={styles.name}>{name}</div>
                    <div>
                      <div className={styles.lastLocationText}>
                        Last location
                      </div>
                      <div className={styles.locationName}>{location.name}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <div
                className={styles.badge}
                style={{
                  position: "absolute",
                  backgroundColor:
                    status === "Alive"
                      ? "green"
                      : status === "Dead"
                      ? "red"
                      : "grey",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontFamily: "Ubuntu",
                }}
              >
                {status}
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
