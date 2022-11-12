import { useEffect } from 'react'
import { NavigationType, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Dashboard() {
  const navigate = useNavigate()

  const { user } = useSelector((store) => store.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return <div>Dashboard</div>
}

export default Dashboard
