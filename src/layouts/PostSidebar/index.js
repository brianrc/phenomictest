import React, { PropTypes } from "react"

import Page from "../Page"

import styles from "./index.css"
import Button from "../../components/Button"
import { Link } from "phenomic"

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <Page
      { ...props }
      header={
        <div>
          <header className={ styles.header }>
            {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            }
          </header>
        </div>
      }
    >
      <Link to="https://google.com">
        <Button>Press me</Button>
      </Link>
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
