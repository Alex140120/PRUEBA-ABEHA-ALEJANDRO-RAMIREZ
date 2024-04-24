import React, { useState } from "react";

function App() {
  const [musicData, setMusicData] = useState([
    { artist: "Adele", name: "25", sales: 1731000 },
    { artist: "Drake", name: "Views", sales: 1608000 },
    { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
    { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
    { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
    {
      artist: "Original Broadway Cast Recording",
      name: "Hamilton: An American Musical",
      sales: 820000,
    },
    { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
    { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
    { artist: "Rihanna", name: "Anti", sales: 603000 },
    { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
  ]);

  const [masVendidos, setMasVendidos] = useState([]);
  const [totalAlbumSales, setTotalAlbumSales] = useState("");
  const [longNames, setLongNames] = useState([]);
  const [objetosBorrados, setObjetosBorrados] = useState([]);
  const [nuevoAgregado, setNuevoAgregado] = useState(false);

  const [valorABuscar, setValorABuscar] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  // Ver los mas vendidos
  const handleMasVendidos = () => {
    setMasVendidos(musicData.filter((obj) => obj.sales > 1000000));
  };

  // Sumar los albumes vendidos
  const handleSumarAlbumes = () => {
    setTotalAlbumSales(
      musicData.reduce((suma, valor) => suma + valor.sales, 0)
    );
  };

  // Extraer los artistas con nombres largos
  const handleNombresLargos = () => {
    setLongNames(musicData.filter((obj) => obj.artist.length > 8));
  };

  // Borrar Artistas
  const handleBorrarArtistas = () => {
    const artistasABorrar = ["Adele", "Prince", "Justin Bieber"];
    setObjetosBorrados(
      musicData.filter((obj) => !artistasABorrar.includes(obj.artist))
    );
  };

  // Agregar Nuevo Objeto
  const handleAgregarNuevo = () => {
    let nuevoObjeto = {
      artist: "Radiohead",
      name: "Ok Computer",
      sales: 5000000,
    };
    // Agrega el nuevo al arreglo de objetos
    setMusicData([...musicData, nuevoObjeto]);
    setNuevoAgregado(true);
  };

  // Buscar en el objeto
  const handleBuscarObjetos = () => {
    setResultadosBusqueda(
      musicData.filter((obj) => obj.artist == valorABuscar)
    );
  };

  return (
    <>
      {/* ------------ 1 -------------- */}
      <div className="w-100 text-center mt-2 bg-light rounded-3 p-2">
        <button
          className="btn btn-primary p-1"
          onClick={() => handleMasVendidos()}
        >
          1. Vendidos más de 1,000,000 copias
        </button>

        <div className="mt-3">
          {masVendidos
            ? masVendidos.map((mv, index) => (
                <p className="m-0" key={index}>
                  <strong>{mv.artist}</strong> es un gran artista
                </p>
              ))
            : null}
        </div>
      </div>

      {/* ------------ 2 -------------- */}
      <div className="w-100 text-center mt-2 bg-light rounded-3 p-2">
        <button
          className="btn btn-primary p-1"
          onClick={() => handleSumarAlbumes()}
        >
          2. Total Albúmes Vendidos
        </button>

        <div className="mt-3">{totalAlbumSales}</div>
      </div>
      {/* ------------ 3 -------------- */}
      <div className="w-100 text-center mt-2 bg-light rounded-3 p-2">
        <button
          className="btn btn-primary p-1"
          onClick={() => handleNombresLargos()}
        >
          3. Nombres Largos
        </button>

        <div className="mt-3">
          {longNames
            ? longNames.map((ln, index) => (
                <p className="m-0" key={index}>
                  <strong>{ln.artist}</strong> tiene un nombre muy grande.
                </p>
              ))
            : null}
        </div>
      </div>
      {/* ------------ 5.1 -------------- */}
      <div className="w-100 text-center mt-2 bg-light rounded-3 p-2">
        <button
          className="btn btn-primary p-1"
          onClick={() => handleBorrarArtistas()}
        >
          5.1 Borrar Adele, Prince y Justin Bieber
        </button>

        <div className="mt-3">
          {objetosBorrados
            ? objetosBorrados.map((ob, index) => (
                <p className="m-0" key={index}>
                  <span className="me-2">Artista: {ob.artist} |</span>
                  <span className="me-2">Nombre: {ob.name} |</span>
                  <span className="me-2">Ventas: {ob.sales}</span>
                </p>
              ))
            : null}
        </div>
      </div>
      {/* ------------ 5.2 -------------- */}
      <div className="w-100 text-center mt-2 bg-light rounded-3 p-2">
        <button
          className="btn btn-primary p-1"
          onClick={() => handleAgregarNuevo()}
        >
          5.2 Agregar RadioHead
        </button>

        <div className="mt-3">
          {nuevoAgregado
            ? musicData.map((md, index) => (
                <p className="m-0" key={index}>
                  <span className="me-2">Artista: {md.artist} |</span>
                  <span className="me-2">Nombre: {md.name} |</span>
                  <span className="me-2">Ventas: {md.sales}</span>
                </p>
              ))
            : null}
        </div>
      </div>
      {/* ------------ 5.2 -------------- */}
      <div className="w-100 text-center mt-2 mb-2 bg-light rounded-3 p-2">
        <input
          type="text"
          className="border-0 rounded-2 p-2 me-3 outline-none"
          placeholder="Buscar"
          value={valorABuscar}
          onChange={(e) => {
            setValorABuscar(e.target.value);
          }}
        />
        <button
          className="btn btn-primary p-1"
          onClick={() => handleBuscarObjetos()}
        >
          5.3 Buscar
        </button>

        <div className="mt-3">
          {resultadosBusqueda
            ? resultadosBusqueda.map((rb, index) => (
                <p className="m-0" key={index}>
                  El álbum <b>{rb.name}</b> del artista <b>{rb.artist}</b> vendió
                  aproximadamente <b>{rb.sales}</b> copias.
                </p>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default App;
