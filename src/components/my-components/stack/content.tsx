"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search } from "lucide-react"
import Link from "next/link"

// Define the stack data as a JSON-type constant with categories
const stackData = {
    frontend: [
        {
            name: "React",
            svg: `<path fill="currentColor" d="M11.103 10.438a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654m8.005 1.938q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5q-.279.286-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659q.089-.262.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63M4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.5 20.5 0 0 0-.422 2.678A21 21 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452m3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178m0 3.94a7.2 7.2 0 0 1-2.64.094a1.77 1.77 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.5 20.5 0 0 0 2.107 1.7a21 21 0 0 0 .426 2.712q-.25.063-.505.114m7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a19 19 0 0 1 1.739-.635a18 18 0 0 1 .306 1.811M9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.5 20.5 0 0 0-2.526.97a20 20 0 0 0-2.52-.981q.087-.3.188-.596m-.4 1.424a18 18 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823m-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18 18 0 0 1-1.744.665a19 19 0 0 1-.322-1.853m5.456 3.146a7.2 7.2 0 0 1-1.238 2.333a1.77 1.77 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20 20 0 0 0 2.53-1.01a21 21 0 0 0 2.547.979q-.072.249-.155.494m.362-1.324a19 19 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18 18 0 0 1-.295 1.838m.447-4.743q0 .911-.057 1.82q-.741.502-1.554.972q-.81.467-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24 24 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831m.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20 20 0 0 0-2.144-1.688a20 20 0 0 0-.405-2.649q.31-.076.608-.135m-.13 3.885a18 18 0 0 1 1.462 1.188a18 18 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208m3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20 20 0 0 0 .387-2.682a20 20 0 0 0 2.137-1.715q.177.183.336.364a7.2 7.2 0 0 1 1.403 2.238a1.77 1.77 0 0 1 .054 1.403" />`,
            description: "A JavaScript library for building user interfaces with components.",
            link: "https://react.dev/",
        },
        {
            name: "Svelte",
            svg: `<path fill="currentColor" d="M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.27 6.27 0 0 1 1.072 4.74a5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.88 5.88 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.27 6.27 0 0 1-1.07-4.741a5.9 5.9 0 0 1 .88-2.198a6.2 6.2 0 0 1-.611-3.977a5.88 5.88 0 0 1 2.658-3.94zM8.049 20.25c.782.29 1.633.332 2.44.123c.369-.099.72-.253 1.042-.458l5.128-3.267a3.54 3.54 0 0 0 1.598-2.37a3.77 3.77 0 0 0-.645-2.85a4.07 4.07 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.1 1.1 0 0 1-.314.138a1.227 1.227 0 0 1-1.5-.899a1.1 1.1 0 0 1-.01-.45a1.07 1.07 0 0 1 .48-.713l5.129-3.268a1.1 1.1 0 0 1 .314-.138a1.23 1.23 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19l.191.058a6.6 6.6 0 0 1 2.005 1.003l.263.192l.096-.295q.078-.235.123-.478a3.77 3.77 0 0 0-.644-2.85a4.07 4.07 0 0 0-4.371-1.621a3.7 3.7 0 0 0-1.042.458L7.34 7.357a3.54 3.54 0 0 0-1.6 2.37a3.77 3.77 0 0 0 .645 2.85a4.07 4.07 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248q.148-.093.315-.137a1.23 1.23 0 0 1 1.5.899c.034.147.037.3.011.449a1.07 1.07 0 0 1-.482.713l-5.127 3.269a1.1 1.1 0 0 1-.314.137a1.23 1.23 0 0 1-1.317-.488a1.15 1.15 0 0 1-.207-.762l.017-.19l-.19-.058a6.6 6.6 0 0 1-2.005-1.003l-.263-.192l-.096.295a4 4 0 0 0-.123.478a3.77 3.77 0 0 0 .644 2.85a4.07 4.07 0 0 0 1.93 1.498"/>`,
            description: "A JavaScript framework that compiles your code into efficient JavaScript at build time.",
            link: "https://svelte.dev/",
        },
        {
            name: "TypeScript",
            svg: `<path fill="currentColor" d="M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3m-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.7 1.7 0 0 1-.67.74a3 3 0 0 1-1 .39a6 6 0 0 1-1.2.12a7 7 0 0 1-1.23-.11a4.5 4.5 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.4 3.4 0 0 0 1 .54a3.1 3.1 0 0 0 1.13.2a2.6 2.6 0 0 0 .6-.06a1.5 1.5 0 0 0 .42-.17a.75.75 0 0 0 .25-.25a.69.69 0 0 0-.06-.74a1.2 1.2 0 0 0-.35-.33a3 3 0 0 0-.53-.3l-.67-.28a3.6 3.6 0 0 1-1.37-1a2 2 0 0 1-.46-1.33a2.16 2.16 0 0 1 .24-1.06a2.1 2.1 0 0 1 .66-.71a2.9 2.9 0 0 1 1-.42a5 5 0 0 1 1.19-.13a7 7 0 0 1 1.09.07a4.5 4.5 0 0 1 .88.23v1.65a2.4 2.4 0 0 0-.42-.24a4 4 0 0 0-.49-.17a3 3 0 0 0-.49-.1a2.5 2.5 0 0 0-.46 0a2.3 2.3 0 0 0-.56.06a1.5 1.5 0 0 0-.43.16a.8.8 0 0 0-.26.25a.63.63 0 0 0-.09.33a.6.6 0 0 0 .1.35a1.2 1.2 0 0 0 .3.29a2.2 2.2 0 0 0 .46.28l.63.28a7 7 0 0 1 .84.42a2.7 2.7 0 0 1 .64.49a1.8 1.8 0 0 1 .42.63a2.5 2.5 0 0 1 .14.85a2.7 2.7 0 0 1-.25 1.08z"/>`,
            description: "JavaScript with types to catch errors before running the code.",
            link: "https://www.typescriptlang.org/",
        },
        {
            name: "JavaScript",
            svg: `<path fill="currentColor" fill-rule="evenodd" d="M0 0h24v24H0zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306c2.142 0 3.737-1.112 3.737-3.143c0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37c0-.547.42-.966 1.08-.966c.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806c-2.014 0-3.303 1.288-3.303 2.98c0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497c0 .646-.597 1.113-1.531 1.113m-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06c1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416" clip-rule="evenodd" />`,
            description: "A programming language for building websites and web apps.",
            link: "https://www.javascript.com/",
        },
        {
            name: "Tailwind CSS",
            svg: `<path fill="currentColor" fill-rule="evenodd" d="M7 9.969q1-4.063 5-4.063c4 0 4.5 3.047 6.5 3.555q2 .508 3.5-1.524Q21 12 17 12c-4 0-4.5-3.047-6.5-3.555Q8.5 7.938 7 9.97m-5 6.094Q3 12 7 12c4 0 4.5 3.047 6.5 3.555q2 .507 3.5-1.524q-1 4.063-5 4.063c-4 0-4.5-3.047-6.5-3.555q-2-.508-3.5 1.524" clip-rule="evenodd"/>`,
            description: "A utility-based CSS framework for styling directly in HTML.",
            link: "https://tailwindcss.com/",
        },
        {
            name: "shadcn/ui",
            svg: `<path fill="currentColor" d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"/>`,
            description: "A set of pre-made UI components built with TailwindCSS and React.",
            link: "https://ui.shadcn.com/",
        },
    ],
    backend: [
        {
            name: "Nest.js",
            svg: `<path fill="currentColor" d="M14.131.047c-.173 0-.334.037-.483.087c.316.21.49.49.576.806c.007.043.019.074.025.117a1 1 0 0 1 .013.112c.024.545-.143.614-.26.936c-.18.415-.13.861.086 1.22a.7.7 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293c.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18c-.006.05-.006.112-.012.161c-.013.05-.025.1-.044.149q-.019.075-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2 2 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1c-.13.099-.278.173-.415.266c-.043.03-.087.056-.124.093a1 1 0 0 0-.118.099c-.043.037-.074.074-.111.118c-.031.037-.068.08-.093.124a2 2 0 0 0-.087.13c-.025.05-.043.093-.068.142c-.019.05-.037.093-.05.143a2 2 0 0 0-.043.155c-.006.025-.006.056-.012.08c-.007.025-.007.05-.013.075c0 .05-.006.105-.006.155q-.002.055.006.111q0 .074.019.155q.01.075.03.15c.02.049.032.098.05.148c.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093q-.56-.111-1.128-.167c-.013 0-.019-.006-.031-.006A11 11 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a13 13 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012c-.063.031-.118.056-.174.087a3 3 0 0 0-.236.118c-.043.018-.086.043-.124.062l-.055.03q-.085.048-.162.094a2 2 0 0 0-.148.093c-.044.03-.087.055-.124.086c-.006.007-.013.007-.019.013c-.037.025-.08.056-.118.087l-.012.012l-.093.074c-.012.007-.025.019-.037.025c-.031.025-.062.056-.093.08c-.006.013-.019.02-.025.025c-.037.038-.074.069-.111.106c-.007 0-.007.006-.013.012a2 2 0 0 0-.111.106c-.007.006-.007.012-.013.012a2 2 0 0 0-.093.1c-.012.012-.03.024-.043.036a1 1 0 0 1-.106.112c-.006.012-.018.019-.024.03c-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304q-.168.15-.347.273a3.8 3.8 0 0 1-.762.421c-.13.056-.267.106-.403.149c-.26.056-.527.161-.756.18c-.05 0-.105.012-.155.018l-.155.037l-.149.056q-.075.03-.148.068c-.044.031-.093.056-.137.087a1 1 0 0 0-.124.106c-.043.03-.087.074-.124.111c-.037.043-.074.08-.105.124c-.031.05-.068.093-.093.143a1 1 0 0 0-.087.142c-.025.056-.05.106-.068.161q-.028.077-.056.161c-.012.05-.025.1-.03.15c0 .005-.007.012-.007.018c-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.66.66 0 0 0 .074.31v.006q.03.056.069.112q.035.056.08.111c.031.031.068.069.106.1a1 1 0 0 0 .117.099c.149.13.186.173.378.272c.031.019.062.031.1.05c.006 0 .012.006.018.006c0 .013 0 .019.006.031a1.3 1.3 0 0 0 .08.298c.02.037.032.074.05.111q.01.02.02.031c.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118s.074.068.118.105c0 0 .006.006.012.006q.055.048.112.087a1 1 0 0 0 .136.08c.043.025.093.05.142.069a1 1 0 0 0 .124.043c.007.006.013.006.025.012c.025.007.056.013.08.019c-.018.335-.024.65.026.762c.055.124.328-.254.6-.688c-.036.428-.061.93 0 1.079c.069.155.44-.329.763-.862c4.395-1.016 8.405 2.02 8.826 6.31c-.08-.67-.905-1.041-1.283-.948c-.186.458-.502 1.047-1.01 1.413c.043-.41.025-.83-.062-1.24a4 4 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67c-.025-.018-.031-.055-.05-.08q-.029-.065-.05-.13a.5.5 0 0 1-.037-.13q-.008-.064-.006-.137v-.093a1 1 0 0 1 .031-.13q.017-.064.044-.13c.024-.043.043-.087.074-.13c.105-.298.105-.54-.087-.682a1 1 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a1 1 0 0 0-.13-.031a.5.5 0 0 0-.13-.019a1 1 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.5.5 0 0 0-.137.019q-.064.008-.13.024a1 1 0 0 0-.13.044c-.043.018-.08.037-.124.056c-.037.018-.074.043-.118.062c-1.444.942-.582 3.148.403 3.787c-.372.068-.75.148-.855.229l-.013.012q.4.24.837.416c.397.13.818.247 1.004.297v.006a6 6 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006q.016.085.025.162v.024q.01.085.012.162q.01.102.012.204v.1c0 .03.007.067.007.098c0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124q.002.036-.006.08c0 .044-.006.087-.006.137q-.007.027-.006.055l-.02.143q.001.028-.005.056c-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a2 2 0 0 1-.043.168v.018q-.03.091-.05.174q-.008.01-.006.012l-.056.186c-.024.062-.043.118-.068.18s-.043.124-.068.18c-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173l-.019.043c-.006.006-.006.013-.012.019a5.9 5.9 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106c-.012.012-.03.018-.043.03a3 3 0 0 1-.136.094l.018.037h.007l.26-.037h.006q.241-.039.483-.087c.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024c.037-.013.074-.02.111-.031c.62-.15 1.221-.354 1.798-.595a9.9 9.9 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.9 9.9 0 0 0 5.857-4.68a9.9 9.9 0 0 1-1.667 3.986a9.8 9.8 0 0 0 1.655-1.376a9.8 9.8 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987c4.474-6.241.371-12.712-1.346-14.416c-.006-.013-.012-.019-.012-.031c-.006.006-.006.006-.006.012c0-.006 0-.006-.007-.012q-.002.11-.012.223a8 8 0 0 1-.062.415c-.03.136-.068.273-.105.41c-.044.13-.093.266-.15.396a5 5 0 0 1-.185.378a5 5 0 0 1-.477.688c-.093.111-.192.21-.292.31a4 4 0 0 1-.18.155l-.142.124a4 4 0 0 1-.347.241a4 4 0 0 1-.366.211q-.195.091-.39.174a4.4 4.4 0 0 1-.818.223c-.143.025-.285.037-.422.05a5 5 0 0 1-.297.012a5 5 0 0 1-.422-.025a3 3 0 0 1-.421-.062a3 3 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.5 4.5 0 0 0 .818-.223c.136-.05.266-.112.39-.174c.13-.062.248-.13.372-.204q.178-.119.347-.248q.168-.13.316-.279c.105-.093.198-.198.291-.304q.14-.167.26-.334c.013-.019.026-.044.038-.062q.095-.15.18-.298a4.3 4.3 0 0 0 .334-.775c.044-.13.075-.266.106-.403c.025-.142.05-.278.062-.415c.012-.142.025-.285.025-.421c0-.1-.007-.199-.013-.298a7 7 0 0 0-.05-.415a5 5 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397s-.111-.26-.173-.384q-.102-.187-.211-.366a7 7 0 0 0-.248-.34q-.138-.16-.285-.317a4 4 0 0 0-.161-.155q-.422-.327-.862-.607a1 1 0 0 0-.124-.062a2.4 2.4 0 0 0-.589-.26Z"/>`,
            description: "A server-side framework for building APIs with Node.js and TypeScript.",
            link: "https://nestjs.com/",
        },
        {
            name: "Express.js",
            svg: `<path fill="currentColor" d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957a6.27 6.27 0 0 1-7.306-.933a6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"/>`,
            description: "Learning...",
            link: "https://expressjs.com/",
        },
        {
            name: "MySQL",
            svg: `<path fill="currentColor" fill-rule="evenodd" d="M20.422 17.337c-1.088-.03-1.932.081-2.64.379c-.203.082-.53.082-.557.338c.11.108.122.284.218.433c.163.27.449.635.707.824l.87.622c.531.325 1.13.514 1.647.838c.299.19.598.433.898.636c.152.108.244.284.435.352v-.041c-.095-.122-.123-.297-.217-.433l-.409-.392a6.4 6.4 0 0 0-1.415-1.365c-.435-.298-1.387-.703-1.564-1.203l-.027-.03c.299-.03.653-.136.939-.217c.463-.121.884-.095 1.36-.216l.653-.19v-.12c-.245-.244-.422-.569-.68-.798a18 18 0 0 0-2.245-1.663c-.422-.27-.966-.447-1.415-.676c-.164-.081-.435-.122-.53-.257c-.246-.297-.381-.69-.558-1.041l-1.116-2.353c-.245-.527-.395-1.054-.694-1.54c-1.4-2.3-2.925-3.692-5.265-5.058c-.503-.284-1.101-.406-1.738-.554l-1.02-.055c-.218-.094-.436-.351-.626-.473c-.775-.487-2.775-1.541-3.347-.151c-.368.878.544 1.743.854 2.19c.231.31.53.662.694 1.014c.091.23.122.473.217.716c.218.595.422 1.258.708 1.812c.152.284.312.582.503.839c.109.151.3.216.34.46c-.19.27-.204.675-.313 1.014c-.49 1.528-.3 3.42.395 4.545c.218.338.731 1.082 1.428.798c.613-.244.476-1.014.653-1.69c.041-.162.014-.27.095-.379v.03l.558 1.123c.422.662 1.157 1.352 1.769 1.812c.326.243.584.662.992.81v-.04h-.026c-.082-.121-.205-.176-.314-.27a6.6 6.6 0 0 1-.707-.812a17.4 17.4 0 0 1-1.523-2.46c-.218-.42-.409-.879-.585-1.298c-.083-.162-.083-.406-.218-.487c-.205.297-.503.555-.654.92c-.258.58-.285 1.297-.38 2.041c-.055.014-.03 0-.055.03c-.435-.107-.585-.554-.748-.932c-.408-.96-.476-2.501-.123-3.61c.096-.284.504-1.177.341-1.447c-.082-.257-.354-.405-.504-.608a5.5 5.5 0 0 1-.49-.865c-.325-.758-.489-1.596-.843-2.353c-.163-.352-.449-.717-.68-1.041c-.259-.365-.544-.622-.748-1.055c-.068-.151-.163-.392-.054-.554c.026-.108.081-.152.19-.176c.176-.151.68.04.857.121c.503.203.925.392 1.347.676c.19.135.394.392.64.46h.285c.436.095.925.03 1.333.152c.72.23 1.374.567 1.96.933a12 12 0 0 1 4.244 4.624c.163.311.23.595.38.92c.287.662.64 1.338.926 1.987c.286.636.558 1.285.966 1.812c.204.284 1.02.433 1.387.582c.272.12.694.23.94.378c.461.284.924.609 1.359.92c.217.162.898.5.939.77zM6.548 5.588a2.2 2.2 0 0 0-.557.068v.03h.027c.109.216.3.365.435.555l.313.649l.027-.03c.19-.136.286-.352.286-.676c-.082-.095-.095-.19-.163-.284c-.082-.135-.259-.203-.368-.311" clip-rule="evenodd"/>`,
            description: "A relational database used to store and manage structured data.",
            link: "https://www.mysql.com/",
        }
    ],
    devops: [
        {
            name: "Vercel",
            svg: `<path fill="currentColor" d="M23 21.648H1L12 2.352z"/>`,
            description: "A platform to host and deploy web apps.",
            link: "https://vercel.com/",
        },
        {
            name: "Docker",
            svg: `<path fill="currentColor" d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16"/>`,
            description: "Lerning...",
            link: "https://www.docker.com/",
        },
        
    ],
    development: [
        {
            name: "Git",
            svg: `<path fill="currentColor" d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82"/>`,
            description: "A tool that tracks changes in code and lets you work with versions.",
            link: "https://git-scm.com/",
        },
        {
            name: "GitHub",
            svg: `<path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"/>`,
            description: "A website to store and share code using Git.",
            link: "https://github.com/",
        },
        {
            name: "Postman",
            svg: `<path fill="currentColor" d="M19.914 5.888C16.54 1.518 10.26.71 5.888 4.086C1.518 7.46.71 13.74 4.086 18.112c3.375 4.37 9.655 5.178 14.026 1.802l.002-.002c4.369-3.376 5.175-9.654 1.8-14.024m-2.559 2.495l-.78-.768l-.169-.168l.047-.047l1.184-1.118c.212.257.328.58.328.915c-.001.39-.157.765-.434 1.041q-.083.08-.176.145M6.698 16.738l.139.13l.725.725l-1.614-.105zM16.49 5.73c.325.002.641.11.9.308l-1.3 1.308a.14.14 0 0 0-.043.059l-.001.005l-.002.006a.13.13 0 0 0 .045.139l.984.983a1.46 1.46 0 0 1-1.616-.308a1.47 1.47 0 0 1-.315-1.594a1.46 1.46 0 0 1 1.348-.906m-.909 3.266a.46.46 0 0 1-.158.334l-3.895 3.389l-.013.011l-.142-.142l-.062-.062l-.03-.03l-.087-.087l-.033-.033l-.067-.067l3.687-3.654a.46.46 0 0 1 .585-.06a.5.5 0 0 1 .074.06l.037.038q.048.072.083.15q.023.075.021.153m-4.498 3.74l.007.019l.034.033l.146.143l-.054.007l-.809.099l.1-.1l.391-.39zm3.93-4.499a.76.76 0 0 0-.44.218l-3.675 3.658l-.72-.72c1.905-1.898 3.07-2.888 3.795-3.213a.9.9 0 0 1 1.04.057m-5.048 3.368l.015.015l.595.595l-1.552.332zm-2.033 4.858a.23.23 0 0 0-.125.266l.166.725a.05.05 0 0 1 0 .059a.05.05 0 0 1-.066 0l-.984-.992l3.03-3.075l1.569-.243l.576.576a20.5 20.5 0 0 1-4.166 2.684m4.441-2.9l-.608-.608l3.829-3.358c-.272 1.08-1.716 2.544-3.221 3.966m5.275-6.55a.125.125 0 0 0-.159-.05a.117.117 0 0 0-.05.158a.36.36 0 0 1-.041.376a.1.1 0 0 0-.031.079q0 .046.03.079a.1.1 0 0 0 .067 0a.11.11 0 0 0 .109-.033a.57.57 0 0 0 .075-.609"/>`,
            description: "A tool to test APIs by sending requests and checking responses.",
            link: "https://www.postman.com/",
        },
        {
            name: "Cursor",
            svg: `<path fill="#444" d="M3.75 9v14h24.5V9L16 2"/><path fill="#939393" d="M16 16V2L3.75 9l24.5 14L16 30L3.75 23"/><path fill="#e3e3e3" d="M28.25 9H16v21"/><path fill="#fff" d="M3.75 9h24.5L16 16"/>`,
            description: "A code editor built with AI features.",
            link: "https://www.cursor.com/",
        },
        {
            name: "V0",
            svg: `<path fill="currentColor" d="M14.066 6.028v2.22h5.729q.075-.001.148.005l-5.853 5.752a2 2 0 0 1-.024-.309V8.247h-2.353v5.45c0 2.322 1.935 4.222 4.258 4.222h5.675v-2.22h-5.675q-.03 0-.059-.003l5.729-5.629q.006.082.006.166v5.465H24v-5.465a4.204 4.204 0 0 0-4.205-4.205zM0 8.245l8.28 9.266c.839.94 2.396.346 2.396-.914V8.245H8.19v5.44l-4.86-5.44Z"/>`,
            description: "A tool to turn design prompts into React code using AI.",
            link: "https://v0.dev/",
        },
    ],
    inspiration: [
        {
            name: "Figma",
            svg: `<path fill="currentColor" fill-rule="evenodd" d="M8.667 1.25a4.083 4.083 0 0 0-2.36 7.417A4.08 4.08 0 0 0 4.584 12c0 1.376.681 2.594 1.725 3.333a4.083 4.083 0 1 0 6.442 3.333v-3.504a4.083 4.083 0 1 0 4.942-6.496a4.083 4.083 0 0 0-2.36-7.417zm2.583 13.333H8.667a2.583 2.583 0 1 1 0-5.166h2.583zM8.667 7.917h2.583V2.75H8.667a2.583 2.583 0 1 0 0 5.167m9.25-2.584a2.583 2.583 0 0 1-2.58 2.584H12.75V2.75h2.584a2.583 2.583 0 0 1 2.583 2.583m-5.167 6.664a2.583 2.583 0 0 1 2.58-2.58h.006a2.583 2.583 0 1 1-2.586 2.586zm-4.083 4.086a2.583 2.583 0 1 0 2.583 2.584v-2.584z" clip-rule="evenodd"/>`,
            description: "A tool for designing websites and apps in the browser.",
            link: "https://www.figma.com/",
        },
        {
            name: "Dribbble",
            svg: `<path fill="currentColor" d="M2 12a10 10 0 1 1 10 10A10.01 10.01 0 0 1 2 12m11.395 1.125a11.02 11.02 0 0 0-6.48 5.41l.113.09a8.26 8.26 0 0 0 4.106 1.598a8.4 8.4 0 0 0 3.633-.349c.135 0 .18-.101.158-.247a30 30 0 0 0-1.058-4.984c-.146-.506-.315-.99-.472-1.518M12.27 10.48a25.1 25.1 0 0 1-8.616 1.125a8.3 8.3 0 0 0 2.07 5.883a12.75 12.75 0 0 1 7.086-5.759zm-8.358-.56c2.57.153 5.146-.14 7.616-.866a20 20 0 0 0-3.206-4.387a.146.146 0 0 0-.214 0a8.2 8.2 0 0 0-3.16 2.925a8 8 0 0 0-1.013 2.362zm16.356 2.97a35 35 0 0 0-5.107 0c.259 1.012.562 2.002.787 3.003s.383 2.036.574 3.06a8.4 8.4 0 0 0 3.768-6.03zm-2.947-7.3a8.31 8.31 0 0 0-7.368-1.654a20.8 20.8 0 0 1 3.273 4.5a10.5 10.5 0 0 0 4.095-2.847m-3.375 4.308c.214.528.416 1.034.641 1.54c0 0 .113.068.169.068c.45 0 .9-.079 1.35-.09h4.173a8.06 8.06 0 0 0-1.946-4.78a10.27 10.27 0 0 1-4.376 3.262z"/>`,
            description: "A site where designers share and find design work.",
            link: "https://dribbble.com/",
        },
    ]
}

function StackContent() {
    const [searchTerm, setSearchTerm] = useState("")
    
    // Filter the stack data based on the search term
    const filteredStack = {
        frontend: stackData.frontend.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        backend: stackData.backend.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        devops: stackData.devops.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        development: stackData.development.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        inspiration: stackData.inspiration.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
    
    // Check if any category has items after filtering
    const hasItems = Object.values(filteredStack).some(category => category.length > 0)
    
    return (
        <div className="w-full flex flex-col gap-8 py-24">
            <div className="w-full rounded-2xl flex flex-col gap-4">
                <div className="p-8 flex flex-col gap-8">
                    <div className="animate-[downblur_2s_ease-in-out]">
                        <div className="text-5xl font-body font-bold">My Tech Stack</div>
                    </div>
                    
                    {/* Search input */}
                    <div className="relative animate-[downblur_2.5s_ease-in-out]">
                        <Input 
                            type="text" 
                            placeholder="Search technologies..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-zinc-800/50 border-zinc-800 text-white font-body h-8 text-lg placeholder:text-md rounded-lg"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    </div>
                    
                    {/* Stack categories */}
                    {hasItems ? (
                        <div className="flex flex-col gap-6">
                            {/* Frontend */}
                            {filteredStack.frontend.length > 0 && (
                                <div className="border rounded-xl overflow-hidden animate-[downblur_3s_ease-in-out]">
                                    <div className="bg-zinc-800/50 p-4 px-6 border-b">
                                        <div className="text-lg font-body font-bold text-zinc-300">Frontend Development</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            {filteredStack.frontend.map((stack, index) => (
                                                <Link href={stack.link} target="__blank" key={index} className="group p-2 flex gap-2 hover:bg-zinc-800/20 border border-transparent hover:border-zinc-800 rounded-lg transition-all duration-500 cursor-pointer group">
                                                    <div className="w-12 h-12 bg-zinc-800/50 rounded-md flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: stack.svg }} />
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <div className="text-white text-md font-body font-semibold flex gap-1 items-center">
                                                            {stack.name}
                                                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-400" />
                                                        </div>
                                                        <div className="text-xs font-body text-zinc-400 max-w-80 ">
                                                            {stack.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {/* Backend */}
                            {filteredStack.backend.length > 0 && (
                                <div className="border rounded-xl overflow-hidden animate-[downblur_3.5s_ease-in-out]">
                                    <div className="bg-zinc-800/50 p-4 px-6 border-b">
                                        <div className="text-lg font-body font-bold text-zinc-300">Backend Development</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            {filteredStack.backend.map((stack, index) => (
                                                <Link href={stack.link} key={index} className="p-2 flex gap-2 hover:bg-zinc-800/20 border border-transparent hover:border-zinc-800 rounded-lg transition-all duration-500 cursor-pointer group">
                                                    <div className="w-12 h-12 bg-zinc-800/50 rounded-md flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: stack.svg }} />
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <div className="text-white text-md font-body font-semibold flex gap-1 items-center">
                                                            {stack.name}
                                                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-400" />
                                                        </div>
                                                        <div className="text-xs font-body text-zinc-400 max-w-80 ">
                                                            {stack.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {/* DevOps & Cloud */}
                            {filteredStack.devops.length > 0 && (
                                <div className="border rounded-xl overflow-hidden animate-[downblur_4s_ease-in-out]">
                                    <div className="bg-zinc-800/50 p-4 px-6 border-b">
                                        <div className="text-lg font-body font-bold text-zinc-300">DevOps & Cloud</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            {filteredStack.devops.map((stack, index) => (
                                                <Link href={stack.link} key={index} className="group p-2 flex gap-2 hover:bg-zinc-800/20 border border-transparent hover:border-zinc-800 rounded-lg transition-all duration-500 cursor-pointer group">
                                                    <div className="w-12 h-12 bg-zinc-800/50 rounded-md flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: stack.svg }} />
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <div className="text-white text-md font-body font-semibold flex gap-1 items-center">
                                                            {stack.name}
                                                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-400" />
                                                        </div>
                                                        <div className="text-xs font-body text-zinc-400 max-w-80">
                                                            {stack.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {/* Design */}
                            {filteredStack.development.length > 0 && (
                                <div className="border rounded-xl overflow-hidden animate-[downblur_4.5s_ease-in-out]">
                                    <div className="bg-zinc-800/50 p-4 px-6 border-b">
                                        <div className="text-lg font-body font-bold text-zinc-300">Development Tools</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            {filteredStack.development.map((stack, index) => (
                                                <Link href={stack.link} key={index} className="group p-2 flex gap-2 hover:bg-zinc-800/20 border border-transparent hover:border-zinc-800 rounded-lg transition-all duration-500 cursor-pointer group">
                                                    <div className="w-12 h-12 bg-zinc-800/50 rounded-md flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: stack.svg }} />
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <div className="text-white text-md font-body font-semibold flex gap-1 items-center">
                                                            {stack.name}
                                                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-400" />
                                                        </div>
                                                        <div className="text-xs font-body text-zinc-400 max-w-80">
                                                            {stack.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {/* Inspiration */}
                            {filteredStack.inspiration.length > 0 && (
                                <div className="border rounded-xl overflow-hidden animate-[downblur_5s_ease-in-out]">
                                    <div className="bg-zinc-800/50 p-4 px-6 border-b">
                                        <div className="text-lg font-body font-bold text-zinc-300">Design</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            {filteredStack.inspiration.map((stack, index) => (
                                                <Link href={stack.link} key={index} className="group p-2 flex gap-2 hover:bg-zinc-800/20 border border-transparent hover:border-zinc-800 rounded-lg transition-all duration-500 cursor-pointer group">
                                                    <div className="w-12 h-12 bg-zinc-800/50 rounded-md flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: stack.svg }} />
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <div className="text-white text-md font-body font-semibold flex gap-1 items-center">
                                                            {stack.name}
                                                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-400" />
                                                        </div>
                                                        <div className="text-xs font-body text-zinc-400 max-w-80">
                                                            {stack.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-zinc-400">
                            No technologies found matching "{searchTerm}"
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default StackContent