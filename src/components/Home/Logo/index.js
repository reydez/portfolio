import './index.scss'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="65.000000pt"
        height="88.000000pt"
        viewBox="0 0 65.000000 88.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,88.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path d="M184 617 c-2 -7 -3 -120 -2 -252 l3 -240 45 0 45 0 3 103 c3 102 3 102 28 102 51 0 59 -10 123 -162 20 -47 21 -48 65 -48 25 0 48 5 51 11 11 16 -65 188 -92 209 l-24 19 30 16 c40 20 61 63 61 122 0 98 -58 132 -223 133 -78 0 -109 -4 -113 -13z m225 -13 c17 -4 46 -20 63 -35 29 -28 30 -33 26 -86 -5 -58 -3 -55 -75 -113 -10 -8 -4 -21 21 -55 30 -39 76 -139 76 -165 0 -6 -13 -10 -29 -10 -27 0 -32 6 -61 77 -18 42 -37 84 -43 94 -22 36 -94 52 -115 26 -6 -7 -12 -53 -14 -103 -3 -89 -3 -89 -30 -92 l-28 -3 0 235 0 236 89 0 c49 0 103 -3 120 -6z" />
          <path d="M266 554 c-11 -28 -6 -140 6 -152 7 -7 33 -12 59 -12 101 0 147 108 70 167 -25 19 -127 17 -135 -3z m140 -29 c40 -54 -5 -115 -82 -115 l-44 0 0 71 0 71 56 -4 c40 -3 61 -10 70 -23z" />
        </g>
      </svg>
    </div>
  )
}

export default Logo
