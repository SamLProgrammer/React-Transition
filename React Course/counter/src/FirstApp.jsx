import PropTypes from 'prop-types'

export const FirstApp = ({ title, subTitle }) => {
    return (
        <>
            <h1>First App</h1>
            <h2>Hey {title}</h2>
            <h3>You are: {subTitle}</h3>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}