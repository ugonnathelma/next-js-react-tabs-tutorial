import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "../styles"

const Tabs = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href={{ pathname: "/", query: { tab: "1" } }}>
            <a>Tab 1</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: "/", query: { tab: "2" } }}>
            <a>Tab 2</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <React.Fragment>This is tab one content</React.Fragment>}
        {isTabTwo && <React.Fragment>This is tab two content</React.Fragment>}
      </TabBody>
    </TabContainer>
  )
}

export default withRouter(Tabs)
