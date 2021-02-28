import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Contact</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-7"}>
                        <p>If you have questions about how to use /janken, have any feedback or are experiencing technical difficulties, please contact us.</p>
                    </div>

                    <div className={"col-5"}>
                        <div className={"contact-items"}>
                            <h2>slashjanken@gmail.com</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
