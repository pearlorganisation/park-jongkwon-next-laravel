import Link from "next/link"

export default function Navbar(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link href="/">
            <a className="nav-link active" aria-current="page">
                <button className="btn navbar-btn">Category</button>
            </a>
            </Link>
          
        </li>
        <li className="nav-item">
        <Link href="/">
            <a className="nav-link" aria-current="page">
                <button className="btn  navbar-btn">Ranking</button>
            </a>
            </Link>
        </li>
        <li className="nav-item">
        <Link href="/">
            <a className="nav-link active" aria-current="page">
                <button className="btn  navbar-btn">Following</button>
            </a>
            </Link>
        </li>
        <li className="nav-item">
        <Link href="/">
            <a className="nav-link active" aria-current="page">
                <button className="btn  navbar-btn">Creaters</button>
            </a>
            </Link>
        </li>
        <li className="nav-item">
        <Link href="/">
            <a className="nav-link active" aria-current="page">
                <button className="btn  navbar-btn">Know How</button>
            </a>
            </Link>
        </li>
        <li className="nav-item">
        <Link href="/">
            <a className="nav-link active" aria-current="page">
                <button className="btn  navbar-btn">Beauty Services</button>
            </a>
            </Link>
        </li>
        <li className="nav-item">
        <Link href="/">
            <a className="nav-link active" aria-current="page">
                <button className="btn  navbar-btn">Conscious services</button>
            </a>
            </Link>
        </li>
        <li className="nav-item">
        <Link href="/">
            <a className="nav-link" aria-current="page">
                <button className="btn  navbar-btn">Q&N</button>
            </a>
            </Link>
        </li>
        <li className="nav-item">
        <Link href="/">
            <a className="nav-link" aria-current="page">
                <button className="btn  navbar-btn">Men</button>
            </a>
            </Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
                </div>
            
            </div>
        </div>
        </>
    )
}