import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JankenToSlcakImage from "../../static/images/janken_to_slack.png";
import thumbnailHowItWorks from "../../static/images/00_how_it_works.gif";
import thumbnailHowToStart from "../../static/images/01_how_to_start.png";
import thumbnailHowToJoin from "../../static/images/02_how_to_join.png";

const IndexPage = () => (
    <Layout>
        <SEO title="Play Janken with your teammates" />

        <div className={"page-header"}>
            <img alt={"Janken to Slack"} src={JankenToSlcakImage}/>
            <h2><code>/janken</code></h2>
            <p>Play Janken (Rock paper scissors) with your teammates.</p>
            <a href="https://janken-bot-9415c.df.r.appspot.com/slack/redirect_install"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"How it works"} src={thumbnailHowItWorks}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>How It Works</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>How To Start</h2>
                                <p>Type `<code>/janken</code>` in the message field and send it.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"How to start"} src={thumbnailHowToStart}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"How to join"} src={thumbnailHowToJoin}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>How To Join</h2>
                                <p>Open the thread and pick your hand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"bg-color"}>
            <div className={"container"}>
                <div className={"integration-guid"}>
                    <div className={"title"}>
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className={"content"}>
                        <h4>What is Janken?</h4>
                        <p>Janken is the Japanese equivalent of the <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors">Rock paper scissors</a>.</p>

                        <h4>How does a Janken game end?</h4>
                        <p>Each Janken game ends when a single player survives or the game goes by 10 rounds.</p>

                        <h4>What happens if draw rounds continue 10 times?</h4>
                        <p>All survivors are winners!! You can restart another game with those winners until only one player survives.</p>

                        <h4>How many people can join a Janken game?</h4>
                        <p>Maximum 10 people can join.</p>

                        <h4>Can I join in the middle of a Janken game?</h4>
                        <p>No. Players need to join the game at the first round of the game.</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
