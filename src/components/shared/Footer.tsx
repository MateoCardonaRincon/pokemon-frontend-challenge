import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer>
            <span>Powered by
                <a className="mx-2" href="https://github.com/MateoCardonaRincon"
                    target="_blank">
                    MCR
                </a>
            </span>
        </footer>
    )
}

export default Footer