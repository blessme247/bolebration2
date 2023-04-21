import React from 'react'
import { Link } from 'react-router-dom'
import twitterIcon from "../../assets/Icons/twitter.svg"

const TweetsWrapper = ({name, username, AVI, tweet, linkUrl}) => {
  return (
    
    <Link className="tweetWrapper" target="_blank" to={linkUrl}>
            <div className="top">
                
                <div className="imageWrapper">

                <img src={AVI} alt="" />
                </div>
                <div className="nameGroup">
                    <div className="name">{name}</div>
                    <div className="username">{username}</div>

                </div>
                <div className="logoWrapper">
                <img src={twitterIcon} alt="twitter logo" />
                </div>
            </div>

            <div className="tweet">
                {tweet}
            </div>
        </Link>
  )
}

export default TweetsWrapper