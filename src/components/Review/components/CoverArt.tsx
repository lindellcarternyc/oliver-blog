import * as React from 'react'

import { StyledCoverArt } from './styled-components'

interface CoverArtProps {
  src: string
  alt: string
}

const CoverArt: React.SFC<CoverArtProps> = ({ src, alt }) => {
  return <StyledCoverArt src={src} alt={alt} />
}

export default CoverArt
