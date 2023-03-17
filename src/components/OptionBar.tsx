import * as React from 'react'
import styled from '@emotion/styled'

interface ComponentProps {
  margin?: string
}

const Bar = styled.div`
  font-size: 16;
  color: black;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`

const OptionElement = styled.div<ComponentProps>`
  padding: 1rem 1rem 1rem 0rem;
  margin: ${(props) => props.margin};
`

const OptionBar = () => {
  const options = ['All applications', 'In progress', 'Achieved']

  return (
    <Bar>
      {options.map((option, i) => {
        if (i == options.length - 1) {
          return (
            <OptionElement margin="" key={i}>
              {option}
            </OptionElement>
          )
        } else {
          return <OptionElement key={i}>{option}</OptionElement>
        }
      })}
    </Bar>
  )
}
export default OptionBar
