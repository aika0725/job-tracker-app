import * as React from 'react'
import styled from '@emotion/styled'

const Header = styled.header({
  fontSize: 36,
  color: 'black',
  textAlign: 'center',
})

const HeaderElement = styled.div({
  padding: '2rem 0px 1rem',
})

export default function AppHeader() {
  const appTitle = () => {
    return <HeaderElement>Job Application Tracker</HeaderElement>
  }

  return <Header>{appTitle()}</Header>
}
