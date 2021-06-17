import React, { Fragment, useContext , useEffect } from 'react'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContext'
import Spinner from '../layout/Spinner'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts, filtered , getContacts , loading } = contactContext

  useEffect(() => {
    getContacts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [])

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a Contact...</h4>
  }

  return (
    <Fragment>
     {contacts !== null && !loading ? (<>{filtered !== null ? (
      filtered.length !== 0 ? (
        filtered.map((contact) => (
          <ContactItem key={contact._id} contact={contact} />
        ))
      ) : 
        <h4>No Matching Found...Try Something Different...</h4>
      
    ) : (
      contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))
    )}</>
      ) : <Spinner />}
    
    </Fragment>
  )
}

export default Contacts
