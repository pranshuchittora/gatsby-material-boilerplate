import React from "react"
import { Link } from "gatsby"

import { CircularProgress } from "@material-ui/core"
import TrumpImage from "../images/dtrump.png"
import "../style/index.css"
const IndexPage = () => (
  <React.Fragment>
    <div class="rotate-div">
      <img class="rotate-infinite" src={TrumpImage} />
      <br />
      <br />
      <CircularProgress color="primary" />
    </div>
  </React.Fragment>
)

export default IndexPage
