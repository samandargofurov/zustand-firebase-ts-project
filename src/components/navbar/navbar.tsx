import useAuth from "../../hooks/useAuth";
import { useAuthStore } from "../../store/auth.store";

const Navbar = () => {
    const { logout } = useAuth();
    const { isLoading } = useAuthStore();

  return (
    <div className="container">

      <div className="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <img
            className="me-2"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <button className="btn btn-outline-primary" onClick={logout} disabled={isLoading}>
            {isLoading ? '...' : 'Logout'}
          </button>
        </nav>
      </div>

    </div>
  );
};

export default Navbar;
