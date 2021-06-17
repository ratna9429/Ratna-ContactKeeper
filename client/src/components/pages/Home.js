import React, { useContext, useEffect } from 'react'
import ContactFilter from '../contacts/ContactFilter'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'
import authContext from '../../context/auth/authContext'

const Home = () => {
  const AuthContext = useContext(authContext)

  const { loadUser } = AuthContext

  useEffect(
    () => {
      loadUser()
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  )
}

export default Home
