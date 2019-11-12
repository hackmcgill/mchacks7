import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const SEO = ({ description, title, lang }) => (
  <Helmet>
    <html lang={lang} />
    <title lang={lang}>{title}</title>
    <meta charSet="utf-8" />
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#ffffff"></meta>
  </Helmet>
)

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
  title: "McHacks",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
