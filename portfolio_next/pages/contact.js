import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Layout from "@/components/Layout";
import AnimatedHeading from "@/components/AnimatedHeading";
import Button from "@/components/Button";
import BoxLink from "@/components/BoxLink";
import { useState } from "react";


export default function Contact() {
    const defaultSubmitText = "Send Message";

    const [isLoading, setIsLoading] = useState(false);
    const [submitText, setSubmitText] = useState(defaultSubmitText);

    const handleSubmit = e => {
        e.preventDefault();

        const data = JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        });

        const options = {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: data
        };

        fetch("/api/contact", options)
        .then(response => response.json())
        .then(result => {
            setIsLoading(false);
            setSubmitText("Message Sent!");
            setTimeout(() => setSubmitText(defaultSubmitText), 3000);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
            setSubmitText("An unexpected error occured, please try again.");
            setTimeout(() => setSubmitText(defaultSubmitText), 3000);
        });

        setIsLoading(true);
    };

    return (
        <>
            <Head>
                <title>Contact | Sheikh Aquib Mahmood</title>
                <meta name="description" content="Contact Sheikh Aquib Mahmood" />
            </Head>
            <Layout>
                <div className="relative text-center">
                    <AnimatedHeading content="Contact"/>
                </div>
                <div className="mt-4 w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col w-full gap-y-3 lg:w-3/4">
                        <div>You can contact me via:</div>
                        <div className="w-full lg:w-fit flex flex-col lg:flex-row gap-y-2 lg:gap-x-2 lg:gap-y-0">
                            <Button textSize="base">
                                <a href="mailto:aquibmahmood1637@gmail.com" className="flex flex-row justify-center items-center gap-x-1 p-1">
                                    <FontAwesomeIcon icon={faSquareEnvelope} className="h-5"/>
                                    Email Address
                                </a>
                            </Button>

                            <Button textSize="base">
                                <a href="https://www.linkedin.com/in/sheikh-aquib-mahmood/" className="flex flex-row justify-center items-center gap-x-1 p-1">
                                    <FontAwesomeIcon icon={faLinkedin} className="h-5"/>
                                    LinkedIn
                                </a>
                            </Button>
                        </div>
                        
                        <div>Or, you can fill up the form below:</div>
                    </div>

                    <form className="flex flex-col w-full gap-y-1 lg:w-3/4 mt-4" action="/api/contact" method="post" onSubmit={handleSubmit}>
                        <label htmlFor="contactName">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="contactName"
                            placeholder="Please enter your name."
                            className="rounded-sm p-2 text-slate-950 disabled:bg-slate-500 disabled:cursor-not-allowed"
                            required
                            disabled={isLoading}
                        />

                        <label htmlFor="contactEmail">Email Address:</label>
                        <input
                            type="email"
                            name="email"
                            id="contactEmail"
                            placeholder="Please enter your email address."
                            className="rounded-sm p-2 text-slate-950 disabled:bg-slate-500 disabled:cursor-not-allowed"
                            required
                            disabled={isLoading}
                        />

                        <label htmlFor="contactSubject">Subject:</label>
                        <input
                            type="text"
                            name="subject"
                            id="contactSubject"
                            placeholder="Please enter a subject."
                            className="rounded-sm p-2 text-slate-950 disabled:bg-slate-500 disabled:cursor-not-allowed"
                            required
                            disabled={isLoading}
                        />
                        
                        <label htmlFor="contactMessage">Message:</label>
                        <textarea
                            name="message"
                            id="contactMessage"
                            rows="10"
                            placeholder="Please enter your message."
                            className="rounded-sm p-2 text-slate-950 disabled:bg-slate-500 disabled:cursor-not-allowed"
                            required
                            disabled={isLoading}
                        >
                        </textarea>

                        <div className="flex flex-col mt-2 lg:flex-row lg:self-end">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading && 
                                    <div className="relative flex flex-row gap-x-1.5 justify-center items-center">
                                        <div className="bg-gradient-to-r from-primary-pink to-primary-red motion-safe:animate-spin motion-reduce:animate-pulse h-4 w-4 rounded-sm border">
                                        </div>
                                        <div>Loading...</div>
                                    </div>
                                }
                                {!isLoading && 
                                    <>
                                        {submitText}
                                    </>
                                }
                            </Button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}