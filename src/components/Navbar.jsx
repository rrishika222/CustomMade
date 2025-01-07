import { Link, useNavigate } from "react-router-dom";
import authService from '../appwrite/auth';
import {useSelector} from 'react-redux'
import {logout} from '../store/authSlice'
import {useDispatch} from 'react-redux'


export default function Navbar() {
  const dispatch = useDispatch()
  const authStatus = useSelector((state) => state.auth.status)
 // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check for logged-in user on component mount
  //useEffect(() => {
   // const fetchUser = async () => {
     // const user = await authService.getCurrentUser();
      //setIsLoggedIn(!!user); // Set to true if user exists, otherwise false
    //};
    //fetchUser();
  //}, []);

  const handleLogout = async () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/SignIn"); // Navigate to SignIn page
  })
  };

  return (
    <nav className="navbar bg-customPurple p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side (Website Name) */}
        <div className="logo text-2xl font-bold text-white">RIRA</div>

        {/* Right side (Nav links) */}
        <ul className="flex space-x-4">
          <li>
            <Link
              className="inline-block border border-white rounded py-1 px-3 hover:border-purple-300 text-white hover:bg-purple-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="inline-block border border-white rounded hover:border-purple-300 text-white hover:bg-purple-300 py-1 px-3"
              to="/catelouge"
            >
              Catalogue
            </Link>
          </li>
          <li>
            <Link
              className="inline-block border border-white rounded hover:border-purple-300 text-white hover:bg-purple-300 py-1 px-3"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          {authStatus && (
            <li>
              <button
                className="inline-block border border-white rounded hover:border-purple-300 text-white hover:bg-purple-300 py-1 px-3"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
