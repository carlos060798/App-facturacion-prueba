import { Link } from "react-router-dom";

function Navbar() {
    return ( <>
       <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">FACTURATE</Link>
        </div>
        <div>
          <Link to="/" className="mx-2">Clientes</Link>
          <Link to="/facturas" className="mx-2">Facturas</Link>
        </div>
      </div>
    </nav>
    </> );
}

export default Navbar;