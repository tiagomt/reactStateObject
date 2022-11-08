import React from "react"
import "./style.css"
import Star from "./components/Star"

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })

  function toggleFavorite() {

    setContact(prevContact => {

      return {

        // spread do objeto(pegando todas as propriedades do objeto)
        ...prevContact,
        // switch no favorito
        isFavorite: !prevContact.isFavorite

      }

    })

  }

  return (
    <main>

      <article className="card">

        <img src="./images/user.png" className="card--image" alt="userImage" />

        <div className="card--info">

          {/* apenas elementos nativos do HTML podem ter eventos como "onclick", por isso a função deve ser passada para Star */}
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />

          <h2 className="card--name">
            {`${contact.firstName} ${contact.lastName}`}
          </h2>

          <p className="card--contact">{contact.phone}</p>

          <p className="card--contact">{contact.email}</p>

        </div>

      </article>

    </main>
  )
}
