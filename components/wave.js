import React from 'react'

function Wave({ fill, bg }) {
    return (
        <div className={`wave bg-[#${bg}]`} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fillOpacity={"1"} fill={`#${fill}`}
                    d="M0,64L48,106.7C96,149,192,235,288,234.7C384,235,480,149,576,106.7C672,64,768,64,864,85.3C960,107,1056,149,1152,181.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
        </div>
    )
}

export default Wave