import React from 'react'
import {Qualities, SubQualities, H5} from "../styles/styled"
const Cualidades = () => {
    return (
        <div>
            <Qualities>
                <SubQualities>
                    <img src="https://res.cloudinary.com/paolavbm/image/upload/v1646506970/reto1%20spring3/icon-access-anywhere_uic9lz.svg" />
                    <H5> Access your files, anywhere</H5>
                    <p>The ability to use a smartphone, tablet, or computer to access your account means your
                        files follow you everywhere.
                    </p>
                </SubQualities>

                <SubQualities>
                    <img src="https://res.cloudinary.com/paolavbm/image/upload/v1646506968/reto1%20spring3/icon-security_fofcjb.svg" />
                    <H5>Security you can trust</H5>
                    <p>
                        2-factor authentication and user-controlled encryption are just a couple of the security
                        features we allow to help secure your files.
                    </p>
                </SubQualities>
            </Qualities>

            <Qualities >
                <SubQualities>
                    <img src="https://res.cloudinary.com/paolavbm/image/upload/v1646506968/reto1%20spring3/icon-collaboration_uu79wj.svg" />
                    <H5>  Real-time collaboration</H5>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration.
                        No email attachments required.
                    </p>
                </SubQualities>

                <SubQualities>
                    <img src="https://res.cloudinary.com/paolavbm/image/upload/v1646506970/reto1%20spring3/icon-any-file_dzliju.svg" />
                    <H5>Store any type of filet</H5>
                    <p>
                        Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                        file types to be securely stored and shared.
                    </p>
                </SubQualities>
            </Qualities>


        </div>
    )
}

export default Cualidades