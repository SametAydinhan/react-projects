import React from 'react'

import { RengarButton } from 'button-sa-ui'
import styles from 'button-sa-ui/dist/index.css'

const App = () => {
  return <>
  <RengarButton type="primary" text="Primary Example 😄 " />
  <br /><br />
  <RengarButton type="default" text="Default Example 😄 " />
  <br /><br />
  <RengarButton type="dashed" text="Dashed Example 😄 " />
  <br /><br />
  <RengarButton type="text" text="Text Example 😄 " />
  <br /><br />
  <RengarButton type="link" text="Link Example 😄 " />

  </>
  
}

export default App

