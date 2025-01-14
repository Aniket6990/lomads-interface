import React, { useState } from 'react'
import '../styles/App.css'
import '../styles/CreateDao.css'
import '../styles/Dashboard.css'
import '../styles/Modal.css'
import '../styles/Sidebar.css'
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from 'react-router-dom'
import { factoryCall } from 'connection/DaoFactoryCall'
import { ethers } from 'ethers'
import { ABI } from 'abis/DaoFactory'
import { useAppDispatch } from 'state/hooks'
import { updateTitle, updatePurpose, updateExplain, updateSupply, updateHolder } from 'state/proposal/reducer'
import { useAppSelector } from 'state/hooks'



const TokenPage = () => {
    const dispatch = useAppDispatch()
    const { provider } = useWeb3React();
    const navigate = useNavigate();

    const title = useAppSelector((state) => state.proposal.title)
    const purpose = useAppSelector((state) => state.proposal.purpose)
    const explain = useAppSelector((state) => state.proposal.explain)
    const supply = useAppSelector((state) => state.proposal.supply)
    const shortDesc = useAppSelector((state) => state.proposal.shortDesc)
    const holder = useAppSelector((state) => state.proposal.holder)

    const [file, setFile] = useState<string>("");
    const [deployed, setDeployed] = useState<string>("");
    function handleUpload(event: any) {
        setFile(event.target.files[0]);

        // Add code here to upload file to server
        // ...
    }

    const handleClick = () => {
        navigate("/golive");
    }
    return (
        <div className={"something"} style={{ paddingLeft: 480, paddingTop: 100, paddingBottom: 100 }}>
            <div className={"pageTitle"}>
                Token
            </div>
            <div className={"pageDescription"}>
                Mint ERC20 tokens to create new communities and distribute ownership. Learn more
            </div>
            <div className={"titleBar"}>
                <div className={"tokentitleTile"} style={{ width: 750 }}>
                    <div>
                        <div className={"tileItemHeader"}>
                            <div>
                                Name
                            </div>
                            <div className={"rect2"}>
                                <div className={"reqText"}>
                                    Required
                                </div>
                            </div>
                        </div>
                        <div className={"tokenpageDescription"}>
                            A Short but descriptive name for your project token. This name will be used in block explorers and token wallets.
                        </div>
                        <input className={"inputField"} type="title" name="title" value={title} style={{ height: 40, width: 340 }}
                            autoFocus placeholder="Name your Token Name" onChange={(e) => { dispatch(updateTitle(e.target.value)) }} />
                    </div>
                    {/* second */}
                    <div style={{ marginLeft: "20px" }}>
                        <div className={"tileItemHeader"}>
                            <div>
                                Symbol
                            </div>
                            <div className={"rect2"}>
                                <div className={"reqText"}>
                                    Required
                                </div>
                            </div>
                        </div>
                        <div className={"tokenpageDescription"}>
                            A one owrd symbol signifying your project token. This symbol will be used in block explorers and token wallets.
                        </div>
                        <input className={"inputField"} type="title" name="title" value={purpose} style={{ height: 40, width: 240 }}
                            placeholder="Enter your Token Symbol" onChange={(e) => { dispatch(updatePurpose(e.target.value)) }} />
                    </div>
                </div>

            </div>
            <div className='pageItemHeader'>
                Description
                <div className={"fieldDesc"}>
                    Briefly describe your token for use on Mirror and social sharing.
                </div>
            </div>
            <textarea className={"textField"} name="longDesc" value={explain} style={{ height: 150 }}
                placeholder="Explain in detail" onChange={(e) => { dispatch(updateExplain(e.target.value)) }} />
            <div>
                <div className={"subItemHeader"}>
                    <div>
                        Supply
                    </div>
                    <div className={"rect2"}>
                        <div className={"reqText"}>
                            Required
                        </div>
                    </div>
                </div>
                <div className={"fieldDesc"}>
                    Define the initial token supply.
                </div>
            </div>
            <input className={"inputField"} type="number" name="supply" value={supply} style={{ height: 50 }}
                autoFocus placeholder="100,000,000" onChange={(e) => { dispatch(updateSupply(e.target.value)) }} />
            <div>
                <div className={"subItemHeader"}>
                    <div>
                        Holder
                    </div>
                    <div className={"rect2"}>
                        <div className={"reqText"}>
                            Required
                        </div>
                    </div>
                </div>
                <div className={"fieldDesc"}>
                    Enter the address that controls the token. This should probably be a multi-sig. Make sure to enter the Ethereum address, not the ENS name.
                </div>
            </div>
            <input className={"inputField"} type="holder" name="holder" value={holder} style={{ height: 50 }}
                autoFocus placeholder="0x3429…" onChange={(e) => { dispatch(updateHolder(e.target.value)) }} />
            <div className={"pageItemHeader"}>
                Icon image
                <div className={"fieldDesc"}>
                    Brand your token by uploading an icon image.
                </div>
                <div id="upload-box">
                    <div id="upload-file">
                        <button>
                            <input type="file" style={{ opacity: "0", position: "relative", zIndex: 2 }} onChange={handleUpload} />
                        </button>
                    </div>
                    {/* <p>Filename: {file.name}</p>
                        <p>File type: {file.type}</p>
                        <p>File size: {file.size} bytes</p>
                        {file && <ImageThumb image={file} />} */}
                </div>
            </div>
            <div>Deployed:{deployed}</div>
            <div>
                <button id="nextButtonToken" className={"nextButton"} onClick={handleClick}>
                    NEXT STEP
                </button>
            </div>
        </div>
    )
}

export default TokenPage