import {
  MonitorPlay,
  Mail,
  UserCircle,
  AlignLeft,
  Zap,
  Navigation,
  PanelLeft,
  PanelTop,
  LayoutGrid,
  PanelBottom,
  Grip,
  SearchX,
  ServerCrash,
  File,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/components/dashboard/header';

const layoutsData = [
  {
    name: 'Hero',
    icon: MonitorPlay,
    href: '/dashboard/layouts/hero',
    description: 'High-impact top sections designed to capture attention with bold typography and glowing accents.',
    preview: '/assets/previews/hero-preview.webp',
    availableVariants: ['Centered Text', 'Split Screen', 'Video Background', 'Animated Gradient'],
  },
  {
    name: 'Contact',
    icon: Mail,
    href: '/dashboard/layouts/contact',
    description: 'Clean, highly legible form layouts focused on conversion and seamless user input.',
    preview: '/assets/previews/contact-preview.webp',
    availableVariants: ['Simple Form', 'With Map', 'Side-by-Side Details', 'Minimalist Glass'],
  },
  {
    name: 'About',
    icon: UserCircle,
    href: '/dashboard/layouts/about',
    description: 'Structured sections to introduce teams or missions with ample whitespace and crisp imagery.',
    preview: '/assets/previews/about-preview.webp',
    availableVariants: ['Team Grid', 'Timeline', 'Story Split', 'Statistics Focus'],
  },
  // {
  //   name: 'Content',
  //   icon: AlignLeft,
  //   href: '/dashboard/layouts/content',
  //   description: 'Optimized reading environments with perfect line-lengths, subtle typography hierarchy, and dark mode support.',
  //   preview: '/assets/previews/content-preview.webp',
  //   availableVariants: ['Blog Post', 'Documentation', 'Two Column', 'Image Heavy'],
  // },
  // {
  //   name: 'CTA',
  //   icon: Zap,
  //   href: '/dashboard/layouts/cta',
  //   description: 'Call-to-Action blocks featuring prominent buttons and magnetic hover states to drive engagement.',
  //   preview: '/assets/previews/cta-preview.webp',
  //   availableVariants: ['Centered Floating', 'Full Width', 'Newsletter Signup', 'Two Option Split'],
  // },
  {
    name: 'Navigation',
    icon: Navigation,
    href: '/dashboard/layouts/navbar',
    description: 'Responsive top-level navigation systems featuring backdrop blurs and sticky positioning.',
    preview: '/assets/previews/navbar-preview.webp',
    availableVariants: ['Simple Links', 'With Search', 'Floating Pill', 'Glassmorphism'],
  },
  // {
  //   name: 'Sidebar',
  //   icon: PanelLeft,
  //   href: '/dashboard/layouts/sidebar',
  //   description: 'Collapsible, vertical navigation structures perfect for complex dashboards and web apps.',
  //   preview: '/assets/previews/sidebar-preview.webp',
  //   availableVariants: ['Collapsible Mini', 'Full Width', 'With Icons Only', 'Dark Integrated'],
  // },
  // {
  //   name: 'Topbar',
  //   icon: PanelTop,
  //   href: '/dashboard/layouts/topbar',
  //   description: 'Utility-focused headers for app layouts, holding profile controls, breadcrumbs, and global search.',
  //   preview: '/assets/previews/topbar-preview.webp',
  //   availableVariants: ['Standard Utility', 'With Breadcrumbs', 'Minimalist User', 'Action Heavy'],
  // },
  // {
  //   name: 'Mega Menu',
  //   icon: LayoutGrid,
  //   href: '/dashboard/layouts/mega-menu',
  //   description: 'Expansive dropdown panels to organize large site architectures into readable, structured grids.',
  //   preview: '/assets/previews/mega-menu-preview.webp',
  //   availableVariants: ['Multi-Column', 'With Featured Image', 'Icon Grid', 'List Style'],
  // },
  {
    name: 'Footer',
    icon: PanelBottom,
    href: '/dashboard/layouts/footer',
    description: 'Comprehensive bottom navigation providing structured links, social icons, and legal information.',
    preview: '/assets/previews/footer-preview.webp',
    availableVariants: ['Simple Copyright', 'Multi-Column Grid', 'Newsletter Integrated', 'Large Typography'],
  },
  // {
  //   name: 'Bento',
  //   icon: Grip,
  //   href: '/dashboard/layouts/bento',
  //   description: 'Dynamic, card-based grid layouts that create highly engaging, Apple-style content presentations.',
  //   preview: '/assets/previews/bento-preview.webp',
  //   availableVariants: ['3x3 Grid', 'Asymmetrical', 'Feature Highlight', 'Profile Overview'],
  // },
  // {
  //   name: '404',
  //   icon: SearchX,
  //   href: '/dashboard/layouts/404',
  //   description: 'Engaging "Page Not Found" screens that guide users back to safety with style.',
  //   preview: '/assets/previews/404-preview.webp',
  //   availableVariants: ['Playful Animated', 'Minimalist Text', 'Search Integrated', 'Return Home Focus'],
  // },
  // {
  //   name: '500',
  //   icon: ServerCrash,
  //   href: '/dashboard/layouts/500',
  //   description: 'Graceful error states that communicate server issues while maintaining brand consistency.',
  //   preview: '/assets/previews/500-preview.webp',
  //   availableVariants: ['Technical Details', 'Simple Apology', 'Support Redirect', 'Branded Illustration'],
  // },
  // {
  //   name: 'Blank',
  //   icon: File,
  //   href: '/dashboard/layouts/blank',
  //   description: 'A pure, unstyled canvas for starting completely from scratch without overriding defaults.',
  //   preview: '/assets/previews/blank-preview.webp',
  //   availableVariants: ['Empty Container', 'Centered Wrapper', 'Full Viewport'],
  // }
];

export default function Layouts() {
  return (
    <>
      <Header />
      <div className="min-h-screen p-8 pb-30 text-slate-200 font-sans overflow-y-scroll scrollbar-custom">

        {/* Header Section */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Layouts <span className="text-blue-primary">Library</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Von Bryan's collection of layouts for building modern, responsive, and accessible UIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {layoutsData.map((item) => {
            const Icon = item.icon;

            return (
              <Link href={item.href} key={item.name} className="group block relative rounded-2xl outline-none">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-primary/0 via-blue-primary/50 to-blue-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-[#141E30] rounded-2xl border border-white/5 p-6 overflow-hidden flex flex-col transition-all duration-300">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-primary rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center shadow-inner group-hover:border-blue-primary/30 group-hover:text-blue-primary transition-colors duration-300">
                      <Icon size={24} className="text-slate-300 group-hover:text-blue-primary transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Variants */}
                  {/* <div className="mt-4 flex items-center flex-wrap gap-2">
                    {item.availableVariants.map((variant) => (
                      <span key={variant} className="px-2 py-1 text-xs font-medium text-blue-primary bg-blue-primary/10 rounded-full">
                        {variant}
                      </span>
                    ))}
                  </div> */}

                  {/* Footer Action */}
                  <div className="mt-6 flex items-center text-sm font-medium text-blue-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore {item.name.toLowerCase()}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
