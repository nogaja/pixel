import React from 'react'
import background from '../assets/img/geresh.png'
import kady from '../assets/img/avatar-kady.jpg'
import aiysha from '../assets/img/avatar-aiysha.jpg'
import arthur from '../assets/img/avatar-arthur.jpg'
export function Results() {
    return (
        <div className="results-container">
            <div className="main-container">
                <h1>Delivering real results for top companies. </h1>
                <h1>Some of our <span className="light">success stories.</span></h1>
                <div className="review-container flex">
                    <div style={{ backgroundImage: `url(${background})` }} className="review">
                        <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features
                            helping us launch the platform eight months faster than planned.”
                        </p>
                        <p className="reviewer">
                            Kady Baker
                        </p>
                        <p className="reviwer-pos">Product Manager at Bookmark</p>
                        <img src={kady}></img>
                    </div>
                    <div style={{ backgroundImage: `url(${background})` }} className="review">
                        <p> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
                        </p>
                        <p className="reviewer">
                            Aiysha Reese
                        </p>
                        <p className="reviwer-pos">Founder of Manage</p>
                        <img src={aiysha}></img>
                    </div>
                    <div style={{ backgroundImage: `url(${background})` }} className="review">
                        <p> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
                        </p>
                        <p className="reviewer">
                            Arthur Clarke
                        </p>
                        <p className="reviwer-pos">Co-founder of MyPhysio</p>
                        <img src={arthur}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
