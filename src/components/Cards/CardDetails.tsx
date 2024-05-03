import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Cards.module.css";

interface Character {
  id: string;
  name: string;
  image: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  location: {
    name: string;
  };
}

const CardDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (!id) return;

    (async function () {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data: Character = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Failed to fetch character data:", error);
      }
    })();
  }, [id]);

  if (!character) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className={styles.cardsContainer}
        style={{ width: "50%", maxWidth: "600px" }}
      >
        <div className={styles.cards}>
          <img
            src={character.image}
            alt={character.name}
            className={styles.img}
            style={{ width: "100%", display: "block" }}
          />
          <div style={{ padding: "10px" }}>
            <div className={styles.name}>{character.name}</div>
            <div>
              <div className={styles.sameLineElements}>
                <div className={styles.lastLocationText}>Last location:</div>
                <div className={styles.locationName}>
                  {character.location.name}
                </div>
              </div>
              <div className={styles.sameLineElements}>
                <div className={styles.lastLocationText}>Species:</div>
                <div className={styles.locationName}>{character.species}</div>
              </div>
              <div className={styles.sameLineElements}>
                <div className={styles.lastLocationText}>Gender:</div>
                <div className={styles.locationName}>{character.gender}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.badge}
          style={{
            position: "absolute",
            backgroundColor:
              character.status === "Alive"
                ? "green"
                : character.status === "Dead"
                ? "red"
                : "grey",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontFamily: "Ubuntu",
          }}
        >
          {character.status}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
