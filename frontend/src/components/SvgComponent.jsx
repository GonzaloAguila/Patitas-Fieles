import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path
        fill="#7d84b2"
        d="M0 32l30 16c30 16 90 48 150 85.3C240 171 300 213 360 208s120-59 180-64 120 37 180 37.3c60-.3 120-42.3 180-37.3s120 59 180 96 120 59 180 37.3c60-21.3 120-85.3 150-117.3l30-32V0H0z"
      />
    </svg>
  )
}

export default SvgComponent