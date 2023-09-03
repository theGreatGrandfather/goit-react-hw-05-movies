import React from 'react'
import { Overlay, Window, Text } from './ErrorPage.styled'

function ErrorPage() {
  return (
    <Overlay>
      <Window>
        <Text>
          Something went wrong... Try reload the page
        </Text>
      </Window>
    </Overlay>
  )
}



export default ErrorPage
