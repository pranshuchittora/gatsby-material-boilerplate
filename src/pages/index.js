import React from "react"
import { LinearProgress, Card, CardContent } from "@material-ui/core"

import NavBar from "../components/NavBar"
import GatsbyAstronaut from "../images/gatsby-astronaut.png"
import "../style/index.css"

const IndexPage = () => (
  <React.Fragment>
    <NavBar />
    <Card className="rotate-div">
      <CardContent>
        <img className="rotate-infinite" src={GatsbyAstronaut} />
      </CardContent>
      <LinearProgress color="primary" />
    </Card>
  </React.Fragment>
)

export default IndexPage
