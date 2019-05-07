import React from "react"
import Image from "../components/utils/Image"
import { LinearProgress, Card, CardContent } from "@material-ui/core"

import NavBar from "../components/NavBar"
import "../style/index.css"

const IndexPage = () => (
  <React.Fragment>
    <NavBar />
    <Card className="rotate-div">
      <CardContent>
        <Image className="rotate-infinite" />
      </CardContent>
      <LinearProgress color="primary" />
    </Card>
  </React.Fragment>
)

export default IndexPage
