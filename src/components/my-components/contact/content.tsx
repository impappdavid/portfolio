'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Mail, MessageSquare, Replace, User } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

function ContactContent() {
    const [state, handleSubmit] = useForm("xeogqokj");
    const { toast } = useToast();

    React.useEffect(() => {
        if (state.succeeded) {
            toast({
                title: "Message Sent",
                description: "Your message has been sent successfully. We'll get back to you soon!",
                duration: 5000,
                className: "bg-zinc-800 border-zinc-700",
                action: (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                ),
            });
        }
    }, [state.succeeded, toast]);

    return (
        <>
            <div className="flex flex-col items-start w-full py-24 gap-12 min-h-screen">
                <div className="flex flex-col gap-4 animate-[downblur_2s_ease-in-out]">
                    <div className="font-body text-5xl font-bold text-start">Contact</div>
                    <div className="text-zinc-400 font-body">
                        I'm always looking to collaborate on interesting projects with great people. Need a supportive hand? I have two!
                    </div>
                    <div className="w-full p-6 border bg-zinc-900/20 flex flex-col gap-6 rounded-2xl">
                        <div className="flex flex-col">
                            <div className="font-body text-lg font-semibold">Send a message</div>
                            <div className="font-body text-sm text-zinc-400">Fill out the form below and we'll get back to you as soon as possible.</div>
                        </div>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full'>
                            <div className="grid md:grid-cols-2 gap-4">

                                <div className="relative w-full flex items-center">
                                    <div className="absolute -inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <User className="h-4 w-4 text-zinc-500" />
                                    </div>
                                    <Input
                                        required
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        className="pl-10 h-12 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60 transition-all duration-500"

                                    />
                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                    />
                                </div>

                                <div className="relative w-full flex items-center">
                                    <div className="absolute -inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Mail className="h-4 w-4 text-zinc-500" />
                                    </div>
                                    <Input
                                        required
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your email"
                                        className="pl-10 h-12 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60 transition-all duration-500"

                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>

                            </div>

                            <div className="relative">
                                <div className="absolute top-3 left-0 flex items-center pl-3 pointer-events-none">
                                    <MessageSquare className="h-4 w-4 text-zinc-500" />
                                </div>
                                <Textarea
                                    placeholder="Write a message"
                                    className=" sm:text-sm text-base pl-10 min-h-44 max-h-64 rounded-xl bg-zinc-800/20 border-zinc-800/20 hover:border-zinc-800 hover:bg-zinc-800/60 transition-all duration-500"
                                    id="message"
                                    name="message"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={state.submitting}
                                className="rounded-xl h-11 bg-sky-500/80 hover:bg-sky-500/60 transition-all duration-300 text-black cursor-pointer">Send message</Button>


                        </form>
                    </div>
                </div >
            </div >

        </>
    )
}
export default ContactContent