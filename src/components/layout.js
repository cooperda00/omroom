import React, { useState, useEffect, useContext } from "react"
import { FirebaseContext } from "gatsby-plugin-firebase"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(query)
  const firebase = useContext(FirebaseContext)

  const [email, setEmail] = useState("Hello Unknown User")
  const [notesNo, setNotesNo] = useState("")

  //Set Email Message
  useEffect(() => {
    if (!firebase) {
      return
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setEmail(`Hello ${user.email}`)
      } else {
        setEmail("Hello Unknown User")
      }
    })
  }, [firebase])

  //See number of notes
  useEffect(() => {
    if (!firebase) {
      return
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .firestore()
          .collection("notes")
          .where("user", "==", user.uid)
          .onSnapshot(snapshot => {
            setNotesNo(snapshot.docs.length)
          })
      } else {
        setNotesNo(0)
      }
    })
  }, [firebase])

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        message={email}
        notesNo={notesNo}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {email}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout
