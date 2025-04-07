export default function Home() {
  return (
    <div className="">
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

      <div className="flex bg-red-500 w-1/5 text-white">
        <p>Filtrar eventos</p>
        <div className="flex justify-items-center">
          <button>Alfabeticamente</button>
          <button>Por fecha</button>
        </div>
      </div>
    </div>
  );
}
