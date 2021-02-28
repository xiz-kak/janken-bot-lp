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
                <p>We may also collect information about how the service is accessed and used ("Usage Data"). This Usage Data may include information such as your browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

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
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                <h3>Changes To This Privacy Policy</h3>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </div>
        </div>
    </Layout>
)

export default PrivacyPage
