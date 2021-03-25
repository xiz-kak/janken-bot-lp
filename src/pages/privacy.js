import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPage = () => (
    <Layout>
        <SEO title="Privacy Policy"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Privacy Policy</h1>
                </div>

                <p>Effective date: March 1, 2021</p>
                <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data. By using the service, you agree to the collection and use of information in accordance with this policy.</p>

                <h3>Information Collection And Use</h3>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you. These include:</p>
                <ul>
                    <li>- Channel Name and Slack ID</li>
                    <li>- Slack Team Name and Slack ID</li>
                    <li>- Member Name and Slack ID</li>
                </ul>

                <h3>Usage Data</h3>
                <p>We also collect how you use the service. This may include your hands and result of the game, tendency of your hands selection, the time spent on the game and teammates whome you played with.</p>
                <p>You can access these data by visiting the channel or thread you played but cannot modify your hands and the game result. If you need to delete these data, please contact us at <a href="mailto:slashjanken@gmail.com">slashjanken@gmail.com</a>.</p>

                <h3>Disclosure Of Data</h3>
                <p>We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                    <li>- To comply with a legal obligation</li>
                    <li>- To protect and defend the rights or property of us</li>
                    <li>- To prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>- To protect the personal safety of users of the Service or the public</li>
                    <li>- To protect against legal liability</li>
                </ul>

                <h3>Security Of Data</h3>
                <p>Your personal and usage data is protected and encrypted both at rest and in transit though secure connections. We implement a variety of security measures to maintain the safety of your information. The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                <h3>Retention Of Data</h3>
                <p>We use usage data of people who use our service to execute internal research to improve our service. If you stop using the service, your past game history can be accessed via channels or threads. We remove your personal and usage data after your administrator removes and/or stops using our service and sufficient time has passed to warrant data removal. Or you may directly contact us at <a href="mailto:slashjanken@gmail.com">slashjanken@gmail.com</a> to request data deletion.</p>

                <h3>Changes To This Privacy Policy</h3>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </div>
        </div>
    </Layout>
)

export default PrivacyPage
