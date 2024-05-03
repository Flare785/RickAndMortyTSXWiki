const Episodes = () => {
  return (
    <div style={{
      height: "100vh", // Esto hará que el div ocupe el 100% de la altura del viewport
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Centra el contenido verticalmente
      alignItems: "center" // Centra el contenido horizontalmente
    }}>
      <h1 style={{
        color: "white",
        textAlign: "center",
        fontFamily: "Ubuntu",
        fontSize: "3rem",
        marginTop: "0", // Elimina el margen superior para un verdadero centrado vertical
      }}>
        NOT FOUND
      </h1>
    </div>
  );
}

export default Episodes;
