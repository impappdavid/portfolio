import { Project } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"
import {
  Github, ExternalLink, CheckCircle, AlertCircle,
  Layout, ShoppingCart, Database, Shield, Zap,
  Users, Settings, BarChart, Code, Palette,
  Smartphone, Globe, Lock, Cpu, Box,
  Package, Truck, CreditCard, Search,
  Filter, Heart, Star, Bell, MessageSquare, Images,
  Store,
  Gavel,
  ChartLine,
  CircleFadingArrowUp,
  Merge, KeyRound, Fingerprint, BadgePlus, MousePointerClick, Film, TicketPlus, Tickets,
} from "lucide-react"

interface SpecificContentProps {
  project: Project
}

function SpecificContent({ project }: SpecificContentProps) {
  // Map of feature titles to Lucide icons
  const getFeatureIcon = (title: string) => {
    const iconMap: Record<string, any> = {


      // NFT related
      "NFT": Images,
      "NFT types": Star,
      "Rarity based": Star,
      "Marketplace": Store,
      "Auction": Gavel,
      "Investment": ChartLine,
      "Upgrade": CircleFadingArrowUp,
      "Merge": Merge,
      "Authentication": KeyRound,
      "2FA": Fingerprint,
      "Create shifts": BadgePlus,
      "Select shifts": MousePointerClick,
      "Screenings": Film,
      "Booking": TicketPlus,
      "Tickets": Tickets,
      // Default icon for unknown features
      "default": Code
    };

    // Try to find a matching icon by checking if the title contains any of the keys
    for (const [key, icon] of Object.entries(iconMap)) {
      if (title.toLowerCase().includes(key.toLowerCase())) {
        return icon;
      }
    }

    // Return default icon if no match found
    return iconMap.default;
  };

  return (
    <>
      <div className="flex flex-col items-start w-full py-24 gap-8">
        <div className="flex flex-col gap-6 animate-[downblur_1.5s_ease-in-out] w-full">
          <Link href="../projects" className="text-sm text-zinc-400 font-body flex gap-2 items-center hover:text-white transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 16l-4-4m0 0l4-4m-4 4h12" />
            </svg>
            All projects
          </Link>
          <div className="font-body text-5xl font-bold text-start">{project.title}</div>
          <div className="text-zinc-400 font-body text-sm md:text-[16px]">
            {project.description}
          </div>
          <div className="flex flex-col">
            <div className="font-body text-sm text-zinc-400">
              {project.date}
            </div>
            <div className="w-full aspect-video relative rounded-xl overflow-hidden mt-3 flex flex-col gap-2 border">
              {project.isVideo ? (
                <video width="100%" loop autoPlay muted playsInline preload="auto" style={{ display: 'block' }}>
                  <source src={project.image} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain aspect-video"
                />
              )}
            </div>
          </div>
          {project.demoOrSource ? (

            <div className="p-6 bg-zinc-800/30 border rounded-xl flex flex-col gap-4 sm:grid md:grid-cols-2">
              <div className="flex flex-col">
                <div className="font-body font-semibold">Demo & Code</div>
                <div className="text-xs font-body text-zinc-400">Would you like to take a quick demo or view the source code?</div>
              </div>
              <div className="flex gap-4 justify-end px-4">
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" className="w-full font-bold py-1.5 px-4 text-sm rounded-lg justify-center bg-zinc-800 text-white font-body hover:opacity-70 hover:bg-zinc-800 border flex items-center gap-2  border-zinc-700 transition-all duration-500">
                    <div className="w-2 h-2 bg-emerald-600 animate-pulse rounded-full"></div>
                    Demo
                  </Link>
                )}
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank" className="w-full font-body font semibold py-1.5 px-4 text-sm rounded-lg flex justify-center gap-2 items-center bg-zinc-900 border border-zinc-800 text-white hover:opacity-70 hover:bg-zinc-900 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                    </svg>
                    Source
                  </Link>
                )}

              </div>
            </div>

          ) : (
            <div className=""></div>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-2 animate-[downblur_2s_ease-in-out]">
          <h2 className="text-2xl font-semibold font-body mb-4 flex items-center gap-2">
            <span>Stack</span>
          </h2>
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 text-xs bg-zinc-800/30 border font-body font-semibold rounded-md text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </div>


        {/* Features Section */}
        <div className="w-full mt-8 animate-[downblur_2.5s_ease-in-out]">
          <h2 className="text-2xl font-semibold font-body mb-4 flex items-center gap-2">
            <span>Features</span>
          </h2>
          <div className="prose prose-invert max-w-none flex flex-col gap-2">
            <div className="whitespace-pre-wrap font-body text-zinc-300  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
              {project.features && project.features.length > 0 ? (
                project.features.map((feature: any, index: number) => {
                  const featureTitle = typeof feature === 'string' ? feature : feature.title || 'Feature';
                  const FeatureIcon = getFeatureIcon(featureTitle);

                  return (
                    <div key={index} className="p-3 bg-zinc-800/30 aspect-square border flex flex-col items-center justify-center font-body rounded-lg gap-2 hover:scale-105 cursor-pointer transition-all duration-500 group">

                      <div className="w-12 h-12 bg-zinc-700/40 border border-zinc-600/30 flex items-center justify-center rounded-lg">
                        <FeatureIcon size={18} className="text-zinc-400 group-hover:text-white transition-all duration-500" />
                      </div>
                      <div className="text-sm">
                        {featureTitle}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-md text-zinc-400">No features listed</div>
              )}
            </div>
          </div>
        </div>




        <div className="whitespace-pre-wrap font-body text-zinc-300 flex flex-col gap-2 text-sm animate-[downblur_3s_ease-in-out]">
          <h2 className="text-2xl font-semibold font-body mb-2 flex items-center gap-2">
            <span>Challanges</span>
          </h2>
          {project.challenges && project.challenges.length > 0 ? (
            project.challenges.map((challange, index) => (
              <div className="text-md text-zinc-400">
                {challange}
              </div>
            ))
          ) : (
            <div className="text-md text-zinc-400">No challenges listed</div>
          )}
        </div>
      </div>
    </>
  )
}

export default SpecificContent