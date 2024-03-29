import { useAuth } from '../contexts/AuthContext'

const Logout = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      { JSON.stringify(user) }
      <button
          type="button"
          className="inline-block w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={ handleLogout }
        >
        Logout
      </button>
    </div>
  )
}

export default Logout
