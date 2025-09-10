'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Work from './work';
import Preview from './preview';
import Footer from '../footer';
import { useParams } from 'next/navigation';
import { projects } from './project-data';

const kodemonoFont = Inter({ subsets: ['latin'], weight: '400' });

const containerReveal = {
  initial: { opacity: 0, y: 32, scale: 0.985, filter: 'blur(8px)' },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 420, damping: 32, mass: 0.9 },
  },
};

const heroChildren = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
};

const heroItem = {
  initial: { opacity: 0, y: 18, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardReveal = {
  initial: { opacity: 0, y: 32, scale: 0.985, filter: 'blur(8px)' },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, delay: 0.2, ease: 'easeOut' },
  },
};

const footerReveal = {
  initial: { opacity: 0, y: 28, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

export default function Content({ initialSlug }: { initialSlug?: string }) {
  const params = useParams<{ slug?: string }>();
  const slug = initialSlug ?? params?.slug ?? '';
  const project = projects[slug];

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <p className="text-lg">Project not found.</p>
        <Link href="/works" className="underline text-blue-600">
          Back to works
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <motion.div
        variants={containerReveal}
        initial="initial"
        animate="animate"
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-64 flex flex-col items-center text-center gap-16 relative ${kodemonoFont.className}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', stiffness: 480, damping: 34 }}
          className="p-2 rounded-2xl bg-zinc-100"
        />

        <motion.div
          variants={heroChildren}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 480, damping: 34 }}
            className="p-2 rounded-2xl bg-zinc-100"
          >
            <img
              src={project.assets.logo}
              alt="logo.png"
              className="w-24 h-fit invert grayscale brightness-75"
              loading="lazy"
            />
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div variants={heroItem} className="text-5xl font-semibold">
              {project.title}
            </motion.div>
            <motion.div variants={heroItem} className="text-2xl font-semibold text-zinc-500">
              {project.subtitle}
            </motion.div>
          </div>
        </motion.div>

        <Link
          href="/works"
          className="absolute top-10 right-2 p-2 bg-zinc-200/40 border border-zinc-300 rounded-full text-zinc-500 transition-all hover:bg-zinc-200/80 hover:text-black duration-200 hover:border-zinc-400/60"
        >
          <X className="w-5 h-5" />
        </Link>

        <motion.div variants={cardReveal} initial="initial" animate="animate" className="w-full">
          <Work project={project} />
        </motion.div>

        <motion.div variants={cardReveal} initial="initial" animate="animate" className="w-full">
          <Preview project={project} />
        </motion.div>

        <motion.div variants={footerReveal} initial="initial" animate="animate" className="w-full">
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
}
