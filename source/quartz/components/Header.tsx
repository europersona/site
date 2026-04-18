import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  const links = [
    { name: "Home", url: "/" },
    { name: "Chi sono", url: "/chi-sono" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Blog", url: "/blog" },
    { name: "Contatti", url: "/contatti" },
  ]

  return (
    <header>
      <div className="topbar">
        <div className="logo">Il mio sito</div>

        <nav>
          {links.map(link => (
            <a key={link.url} href={link.url}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mantiene il comportamento originale Quartz */}
      {children.length > 0 && <div className="header-content">{children}</div>}
    </header>
  )
}

Header.css = `
header {
  margin-bottom: 2rem;
}

/* barra sopra */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
}

/* logo / titolo */
.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

/* menu */
nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  position: relative;
}

/* effetto elegante hover */
nav a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: currentColor;
  transition: width 0.2s ease;
}

nav a:hover::after {
  width: 100%;
}

/* contenuto sotto (titolo pagina ecc.) */
.header-content {
  margin-top: 1rem;
}
`

export default (() => Header) satisfies QuartzComponentConstructor


