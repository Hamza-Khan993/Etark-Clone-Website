import React from 'react'
import Cards from '../layout/Cards'
import '../../App.css'
import { makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'


const useStyles = makeStyles({
    about: {
        // fontSize: "16px",
        margin: "5vh 5% 0px"
    },

    content: {
        margin: "3% 20vw",
        justifyContent: "center",
        textAlign: "left"
    },

})
const About = () => {
    const classes = useStyles()

    return (
        <div className={classes.about}>
        <div className={classes.content}>
            <h1 style={{ textAlign: "center", fontSize: "32px" }}>About Us</h1>

            <div className="aboutList">


                <p>ETark is an automated complaint resolution platform for smartphone complaints. We help in resolving both technical and non-technical smartphone problems via. our service offerings. ETark was conceptualized after identifying the plight of hapless smartphone customers and the inefficiency of the service centers.
                    <br />
                    <br />
                    How ETark helps customers? </p>

                <h3 style={{ textAlign: "center" }}>Resolving technical problems :</h3>
                <p>
                    Having a technical problem with your smartphone can be disastrous because unlike any other gadget, a smartphone lets you stay connected with the world and manage all your electronic records. The current approaches that a user usually takes :
                </p>

                {/* // Card 1 */}
                <Cards
                    contentHeaders="Visit an authorized service center"
                    cardcontents={
                        <div>
                            <h4 style={{ marginTop: "2vh", textAlign: "left" }}>While an authorized service center is always recommended, but as a user, you don’t know if:</h4>
                            <ul style={{ listStyleType: "none", marginLeft: "10vh" }}>
                                <li>
                                    A. Parts are available at the service center to service your device
                                </li>
                                <li>
                                    B. Your device would be considered within warranty by the service center
                                </li>
                                <li>
                                    C. The exact problem in your device and the price to be paid to fix that
                                </li>
                            </ul>
                            <p style={{ marginTop: "2vh", textAlign: "left" }}>
                                All this demands you to visit the service center and wait in a queue with other customers which can often take hours with the possibility of parts not available or the device not considered within warranty by the service center or the quoted price of servicing out of your budget!
                            </p>
                        </div>} />
                {/* //Card 2 */}
                <Cards
                    contentHeaders="Visit an unauthorized service center"
                    cardcontents={
                        <div>
                            <h4 style={{ marginTop: "2vh", textAlign: "left" }}>Although an unauthorized service center might seem light on your pocket, this route is never recommended because :</h4>
                            <ul style={{ marginLeft: "10vh" }}>
                                <li>
                                    Due to the poor quality of servicing, they often result in frequent annual repairs for the same issue or some other problem thus making the actual cost of repair for that phone way higher than the cost of repair by an authorized service center

                                </li>
                                <li>
                                    Your personal data could be retrieved from your device even if you have removed the same from your device. So due to low accountability of unauthorized service centers, data could be stolen from your device during servicing.
                                </li>

                            </ul>
                        </div>} />
                {/* //Card 3 */}
                <Cards
                    contentHeaders="Book for a home visit repair service"
                    cardcontents={
                        <div>
                            <h4 style={{ marginTop: "2vh", textAlign: "left" }}>Home visit repair services are quite popular nowadays due to the convenience of home repair that they promise but this should be avoided due to the following reasons:</h4>
                            <ul style={{ marginLeft: "10vh" }}>
                                <li>
                                    Most of the home repair services don’t have any authorization from the device manufacture to provide servicing, thus the accountability and quality of servicing is low
                                </li>
                                <li>
                                    Many a times your device demands a part replacement which may not be available for the home visit repair agent at that point and post their inspection of the device at your location, they might take your device to their service center thus causing an additional delay in the servicing of the device
                                </li>

                            </ul>
                        </div>} />
                {/* // Card 4 */}
                <Cards
                    contentHeaders="Device Insurance companies"
                    cardcontents={
                        <div>
                            <h4 style={{ marginTop: "2vh", textAlign: "left" }}>Although device Insurance companies promise to insure your device from future damage or malfunctioning:</h4>

                            <p>
                                They often result in long waiting time to get clearance from the smartphone manufacturer to get the ensuing servicing covered which offsets the cost savings that they promise through their insurance
                            </p>
                            <p>All these approaches have their own share of flaws.</p>
                            <p>ETark firmly believes that the best way to solve any technical issue is through authorized service centers only provided the inefficiencies of the service centers are removed and the customer doesn’t have to go through any hassle. This is exactly where we step in and we ensure that both the customer and the service center are seamlessly connected!</p>
                        </div>} />

                <h3 style={{ textAlign: "center" }}>Resolving technical problems :</h3>

                <p>
                    Problems like missing, damaged or duplicate items during purchase or Payment related issues like improper bill, wrongful deductions etc are some of the examples of non- technical problems that customers face.
                </p>
                <p>
                    The ideal way to solve this is to reach out to the seller (e-commerce firm/ offline retailer) or the device manufacturer (e.g. Samsung, Apple etc.). However a customer’s voice can go unheard in a discussion with the other party. So to lend a strength to the customer’s voice, we do an instant analysis of his/ her complaint and share certain reports with him/ her which can help identify the merit of the complaint/ grievance.
                </p>

                <Cards
                    contentHeaders="Chances of winning"
                    cardcontents={
                        <div>
                            <p>
                                Chances of winning tells you how likely you are to win in a consumer court had the complaint been filed there
                            </p>
                            <p>Or Alternatively,</p>
                            <p>How likely you are to win in a negotiation with the other party (device manufacturer or seller) by quoting your winning chances in a consumer court as a reference</p>
                        </div>} />

                <Cards
                    contentHeaders="Expected compensation"
                    cardcontents={
                        <div>
                            <p>
                                Expected compensation tells you what compensation (free servicing, product/ part replacement or monetary compensation) you are likely to get from the other party had your complaint been filed in a consumer court
                            </p>
                            <p>Or Alternatively,</p>
                            <p>what compensation (free servicing, product/ part replacement) you are likely to get from the other party in a negotiation</p>
                        </div>} />

            </div>
        </div>
    </div>
    )
}

export default About
