
import React from 'react'
import PropTypes from 'prop-types'

export const LoadingQuote = ({loadingMessage = 'Loading...'}) => {
  return (
    <>
      <div>{loadingMessage}</div>
    </>
  )
}

LoadingQuote.propTypes = {
    loadingMessage: PropTypes.string,
}
