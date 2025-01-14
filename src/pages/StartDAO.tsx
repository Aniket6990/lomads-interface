import React from 'react'
import {StepBlock} from '../components/sub/StepBlock';
import {StepBlockOptional} from '../components/sub/StepBlockOptional';
import '../styles/App.css'
import '../styles/CreateDao.css'
import '../styles/Dashboard.css'
import '../styles/Modal.css'
import '../styles/Sidebar.css'

const StartDAO = () => {
  return (
                <div className={"createDaoLogin"}>
                    <div>
                    <div className={"welcomeText2"} style={{paddingTop:100}}>
                        Start Your DAO
                    </div>
                    <div className={"welcomeText1"}>
                        Rally support, fund your project, and reward your backers by launching a crowdfund. All it takes is a name and a funding goal.
                    </div>
                        <StepBlock blockTitle={"Creation guide"} blockDescription={"Read all the tips on how to succesfully create and run a DAO."}/>
                        <StepBlock blockTitle={"Basics"} onClickGoToStep="/sidepage"  blockDescription={"Name your project, upload an image, and set the details."}/>
                        <StepBlock blockTitle={"Templates & Configurations"} onClickGoToStep="/settings" blockDescription={"Choose your template and set the ... for your DAO."}/>
                        <StepBlockOptional blockTitle={"Create your Token"} blockDescription={"Name your token, upload image and set the details."}/>
                        <StepBlock blockTitle={"Go live!"} onClickGoToStep="/golive" blockDescription={"Take your DAO public by completing the final checklist, cross-checking the values, and ensuring there aren’t any mis-spellings."}/>
                    </div>
                </div>
  )
}

export default StartDAO