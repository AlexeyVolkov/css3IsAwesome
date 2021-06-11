import { Link, useLocation } from 'react-router-dom'
import { useUser } from '../../utils/github-fetch'
import './Header.scss'

const GithubMenu = () => {
  const { data: user, isLoading, error } = useUser()
  if (isLoading) return <samp>Loading footer...</samp>
  if (error) return <samp>Cannot load footer: {error.message}</samp>

  return (
    <ul className='nav col-md-3 justify-content-end'>
      {user.email && (
        <li>
          <a
            href={`mailto:${user.email}`}
            className='btn btn-outline-primary me-2'
          >
            Email me
          </a>
        </li>
      )}
      {user.html_url && (
        <li>
          <a href={user.html_url} className='btn btn-outline-primary me-2'>
            My GitHub
          </a>
        </li>
      )}
    </ul>
  )
}

const LocalNavLink = ({ to, children, className, ...props }) => {
  const location = useLocation()
  const activeClassName =
    to === location.pathname ? 'link-secondary' : 'link-dark'
  return (
    <Link to={to} className={[activeClassName, className].join(' ')} {...props}>
      {children}
    </Link>
  )
}

const Header = () => (
  <div className='container'>
    <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
      <Link
        to='/'
        className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'
      >
        <h4 className='fs-4 border text-nowrap p-1 w-10rem'>CSS3 is Awesome</h4>
      </Link>
      <ol className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
        <li>
          <LocalNavLink to='/' className='nav-link px-2'>
            Rocket
          </LocalNavLink>
        </li>
        <li>
          <LocalNavLink to='/raintv' className='nav-link px-2'>
            Дождь
          </LocalNavLink>
        </li>
        <li>
          <LocalNavLink to='/box' className='nav-link px-2'>
            Box
          </LocalNavLink>
        </li>
        <li>
          <LocalNavLink to='/bicycle' className='nav-link px-2'>
            Bicycle (WIP)
          </LocalNavLink>
        </li>
      </ol>
      <GithubMenu />
    </header>
  </div>
)

export default Header
