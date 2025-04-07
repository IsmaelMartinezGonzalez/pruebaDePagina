export default function Home() {
  return (
    <div className="h-full  w-full">
      <nav className="flex items-center bg-black max-width h-20">
      <div className="w-20 size-20">
        <img src="/letra.png" alt="" className="size-20"/>
      </div>
      <div className="flex flex-auto justify-end text-white">
        <p className="px-5">Inicio</p>
        <p className="px-5">Eventos</p>
        <p className="px-5">Manuales</p>
        <p className="px-5">Tienda Europa</p>
        <p className="px-5">Tienda America</p>
      </div>
      </nav>
      
      {/*Contenedor de la parte de las imagenes y eso*/}
      <div className="flex w-full h-full">

        {/*Primer contendor*/}
        <div className="flex w-1/5 bg-red-500 text-white h-full justify-items-center max-height flex-col divide-y text-center">
            <p>Filtrar eventos</p>
            <button>Alfabeticamente</button>
            <button>Por fecha</button>
        </div>

        {/*Segundo contendor*/}
        <div>
        <div className="bg-white w-60 h-50"> 
          <p>hola</p>
          {/*imagen*/}
          <div className="flex">
            <img src="/imgprueba1.jpg" alt="" className="w-50 h-30"/>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
