import {
  MousePointerClick,
  PanelTop,
  TextCursorInput,
  MenuSquare,
  AppWindow,
  ArrowRight,
  Tag,
  FolderKanban,
  BellRing,
  TableProperties,
  ScanLine,
  AlertTriangle,
  MessageSquareText,
  ToggleRight,
  ListOrdered,
  Activity,
  Rows
} from 'lucide-react';
import Header from '@/app/components/dashboard/header';
import Link from 'next/link';

export const componentsData = [
  {
    name: 'Button',
    icon: MousePointerClick,
    href: '/dashboard/components/button',
    description: 'Clean, interactive elements that trigger actions without unnecessary visual clutter.',
    preview: '/assets/previews/button-preview.webp',
    availableVariants: ['Primary', 'Secondary', 'Outline', 'Ghost', 'Icon Only'],
  },
  // {
  //   name: 'Card',
  //   icon: PanelTop,
  //   href: '/dashboard/components/card',
  //   description: 'Minimalist container elements that group related content using ample whitespace and subtle borders.',
  //   preview: '/assets/previews/card-preview.webp',
  //   availableVariants: ['Default', 'Glassmorphism', 'Interactive Hover', 'Stat Card'],
  // },
  // {
  //   name: 'Dropdown',
  //   icon: MenuSquare,
  //   href: '/dashboard/components/dropdown',
  //   description: 'Contextual menus that maintain a sleek profile with smooth open/close interactions.',
  //   preview: '/assets/previews/dropdown-preview.webp',
  //   availableVariants: ['Simple Text', 'With Icons', 'Command Menu', 'Checkbox Items'],
  // },
  // {
  //   name: 'Modal',
  //   icon: AppWindow,
  //   href: '/dashboard/components/modal',
  //   description: 'Focused, distraction-free overlay dialogs that require user interaction.',
  //   preview: '/assets/previews/modal-preview.webp',
  //   availableVariants: ['Standard', 'Alert Dialog', 'Slide-out Drawer'],
  // },
  // {
  //   name: 'Table',
  //   icon: TableProperties,
  //   href: '/dashboard/components/table',
  //   description: 'Highly legible data grids emphasizing typography and simple dividers over heavy styling.',
  //   preview: '/assets/previews/table-preview.webp',
  //   availableVariants: ['Simple', 'Sortable Columns', 'With Pagination', 'Selectable Rows'],
  // },
  // {
  //   name: 'Tabs',
  //   icon: FolderKanban,
  //   href: '/dashboard/components/tabs',
  //   description: 'Organize related content across different views while keeping the interface uncluttered.',
  //   preview: '/assets/previews/tabs-preview.webp',
  //   availableVariants: ['Underline', 'Subtle Pill', 'Vertical Sidebar'],
  // },
  // {
  //   name: 'Toast',
  //   icon: BellRing,
  //   href: '/dashboard/components/toast',
  //   description: 'Unobtrusive, temporary notification popups for system feedback.',
  //   preview: '/assets/previews/toast-preview.webp',
  //   availableVariants: ['Success', 'Error', 'Info', 'Actionable'],
  // },
  // {
  //   name: 'Skeleton',
  //   icon: ScanLine,
  //   href: '/dashboard/components/skeleton',
  //   description: 'Soft, pulsing placeholders that reduce cognitive load during content loading states.',
  //   preview: '/assets/previews/skeleton-preview.webp',
  //   availableVariants: ['Text Block', 'Circular Avatar', 'Card Placeholder'],
  // },
  // {
  //   name: 'Alert',
  //   icon: AlertTriangle,
  //   href: '/dashboard/components/alert',
  //   description: 'Static banners that convey important information using a restrained color palette.',
  //   preview: '/assets/previews/alert-preview.webp',
  //   availableVariants: ['Information', 'Warning', 'Destructive', 'Success'],
  // },
  // {
  //   name: 'Tooltip',
  //   icon: MessageSquareText,
  //   href: '/dashboard/components/tooltip',
  //   description: 'Brief, floating text labels that appear on hover to clarify functionality cleanly.',
  //   preview: '/assets/previews/tooltip-preview.webp',
  //   availableVariants: ['Top', 'Bottom', 'Left', 'Right', 'With Delay'],
  // },
  // {
  //   name: 'Toggle',
  //   icon: ToggleRight,
  //   href: '/dashboard/components/toggle',
  //   description: 'Simple two-state switches that provide immediate visual feedback.',
  //   preview: '/assets/previews/toggle-preview.webp',
  //   availableVariants: ['Default', 'Small', 'With Icon', 'Disabled'],
  // },
  // {
  //   name: 'Pagination',
  //   icon: ListOrdered,
  //   href: '/dashboard/components/pagination',
  //   description: 'Airy, legible page navigation controls for browsing large datasets.',
  //   preview: '/assets/previews/pagination-preview.webp',
  //   availableVariants: ['Numbered', 'Simple Prev/Next', 'Load More Button'],
  // },
  // {
  //   name: 'Progress',
  //   icon: Activity,
  //   href: '/dashboard/components/progress',
  //   description: 'Sleek, thin-line indicators showing the completion status of a task or process.',
  //   preview: '/assets/previews/progress-preview.webp',
  //   availableVariants: ['Linear Bar', 'Circular Ring', 'Indeterminate Pulse'],
  // },
  // {
  //   name: 'ToggleGroup',
  //   icon: Rows,
  //   href: '/dashboard/components/toggle-group',
  //   description: 'A connected set of streamlined toggles for selecting single or multiple related options.',
  //   preview: '/assets/previews/toggle-group-preview.webp',
  //   availableVariants: ['Single Selection', 'Multiple Selection', 'Pill Style'],
  // }
];

export default function Components() {

  return (
    <>
      <div className="min-h-screen mt-[65px] p-8 pb-30 text-slate-200 font-sans overflow-y-scroll scrollbar-custom">

        {/* Header Section */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Components <span className="text-blue-primary">Library</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Von Bryan's collection of components for building modern, responsive, and accessible UIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {componentsData.map((item) => {
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