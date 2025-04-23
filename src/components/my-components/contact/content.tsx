'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

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
                    <div className="w-full p-6 border bg-zinc-800/30 flex flex-col gap-6 rounded-2xl">
                        <div className="flex flex-col">
                            <div className="font-body text-lg font-semibold">Send a message</div>
                            <div className="font-body text-sm text-zinc-400">Fill out the form below and we'll get back to you as soon as possible.</div>
                        </div>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full'>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="username" className='font-body text-sm'>
                                        Username
                                    </label>
                                    <Input
                                        id="username"
                                        type="text"
                                        name="username"
                                        className='h-8 font-body bg-zinc-900/60'
                                    />

                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className='font-body text-sm'>
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className='h-8 font-body bg-zinc-900/60'
                                    />

                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className='font-body text-sm'>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className='bg-zinc-900/60 border rounded-lg font-body outline-none p-2 text-sm min-h-44'
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <Button type="submit" disabled={state.submitting} className="mt-2 w-full py-1.5 px-4 text-sm rounded-lg bg-zinc-800 text-white font-body hover:opacity-70 hover:bg-zinc-800 border flex items-center gap-1  border-zinc-700 transition-all duration-500">
                                Send message
                            </Button>

                        </form>
                    </div>
                </div >
            </div >

        </>
    )
}
export default ContactContent