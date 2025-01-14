import React from 'react'
import { Link } from 'react-router-dom'
import SelectTemplate from '../components/sub/SelectTemplate'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box
  } from '@chakra-ui/react'
import '../styles/App.css'
import '../styles/CreateDao.css'
import '../styles/Dashboard.css'
import '../styles/Modal.css'
import '../styles/Sidebar.css'
import ChangeComponent from '../components/sub/ChangeComponent'
import {sliderType} from '../types/index'

const SettingsPage = () => {
    const Sliders = (props: sliderType) =>{
        return(
            <Slider aria-label='slider-ex-4' defaultValue={props.value}>
                    <SliderTrack bg='#f5f5f5'>
                      <SliderFilledTrack bg='#C94B32' />
                    </SliderTrack>
                    <SliderThumb boxSize={5}>
                      <Box color='#f5f5f5'/>
                    </SliderThumb>
                  </Slider>
        )
    }
  return (
    <div className={"something"} style={{paddingLeft:480, paddingTop:100,paddingBottom:100,height:1600}}>
                <div className={"pageTitle"}>
                    Settings
                </div>
                <div className={"pageDescription"}>
                    Choose your template and more
                </div>
                <div>
                <div className={"subItemHeader"}>
                        <div>
                            Select a Template
                        </div>
                        <div className={"rect2"}>
                            <div className={"reqText"}>
                                Required
                            </div>
                        </div>
                    </div>
                    <div className={"fieldDesc"}>
                        Create your organisation with our pre-configured templates.
                    </div>
                    <div style={{display:"flex",position:"relative",right:120,zIndex: 9999}}>
                        <SelectTemplate blockTitle="template 1" blockDescription="description of block 1"/>
                        <SelectTemplate blockTitle="template 1" blockDescription="description of block 1"/>
                        <SelectTemplate blockTitle="template 1" blockDescription="description of block 1"/>
                    </div>
                </div>
                <div>
                <div className={"subItemHeader"}>
                        <div>
                            Voting
                        </div>
                        <div className={"rect2"}>
                            <div className={"reqText"}>
                                Required
                            </div>
                        </div>
                    </div>
                    <div className={"fieldDesc"}>
                        Choose your voting application settings.
                    </div>
                    <div style={{width:"486px"}}>
                    <div className={"pageSubItemHeader"}>
                        Support
                    </div>
                    <Sliders value={60}/>
                    </div>

                    <div style={{width:"486px"}}>
                    <div className={"pageSubItemHeader"}>
                        Minimum Approval
                    </div>
                    <Sliders value={30}/>
                    </div>
                    <div className={"pageSubItemHeader"}>
                        Vote Duration
                    </div>
                    <div style={{display:"flex"}}>
                        <ChangeComponent property="Days"/>
                        <ChangeComponent property="Hours"/>
                    </div>
                </div>
                <div>
                    <button id="nextButtonSettings" className={"nextButton"}>
                        <Link to="/token" className='link'>NEXT STEP</Link>
                    </button>
                </div>
            </div>
  )
}

export default SettingsPage