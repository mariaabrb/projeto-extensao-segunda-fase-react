import logo from "@assets/logo.png"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAuth } from "@security/contexts/AuthContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserAuthModal } from "../modal/UserAuthModal"
import "./header.css"

type HeaderProps = {
  title: string
  className?: string
}

export function Header({ title, className }: HeaderProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const navigate = useNavigate()
  const { isAuthenticated, logout } = useAuth()

  const handleUserButtonClick = () => {
    if (isAuthenticated) {
      setIsAuthModalOpen(true)
    } else {
      setIsAuthModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsAuthModalOpen(false)
  }

  const handleLogin = () => {
    navigate("/login")
    setIsAuthModalOpen(false)
  }

  const handleRegister = () => {
    navigate("/mentors/create")
    setIsAuthModalOpen(false)
  }

  const handleLogout = () => {
    logout()
    navigate("/public")
    setIsAuthModalOpen(false)
  }

  const handleDashboard = () => {
    navigate("/dashboard")
    setIsAuthModalOpen(false)
  }

  return (
    <>
      <header className={`topbar ${className}`}>
        <img
          src={logo}
          alt="logo.png"
        />
        <h1>{title}</h1>
        <button
          className="user-modal"
          onClick={handleUserButtonClick}
        >
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            className="header-icon"
          />
        </button>
      </header>

      {isAuthModalOpen && (
        <UserAuthModal
          onClose={handleCloseModal}
          onLogin={handleLogin}
          onRegister={handleRegister}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
        />
      )}
    </>
  )
}
