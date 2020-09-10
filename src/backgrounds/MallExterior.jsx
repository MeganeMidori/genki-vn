import React from 'react'
import { Background } from 'react-renai'

const MallExterior = ({time}) => {
  return (<Background url={`images/mallExterior/${time || 'afternoon'}.png`} contain/>)
}

export default MallExterior;