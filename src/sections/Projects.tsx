"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  GitFork,
  ArrowUpRight,
  Github,
  ExternalLink,
  Code2,
  FolderGit2,
  X,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Eye,
  Cpu,
} from "lucide-react";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage?: string | null;
  language: string | null;
  topics?: string[];
  updated_at?: string;
  created_at?: string;
  default_branch?: string;
  languages_url?: string;
}

interface ProjectsProps {
  repos: Repo[];
}

interface ProjectMetadata {
  detailedDescription: string;
  technologies: string[];
  features: string[];
  category?: string;
  highlights?: string[];
}

/**
 * Factual metadata grounded in Lohith Sai G's actual GitHub repositories.
 * Preserves dynamic GitHub API data while providing rich modal details.
 */
const factualRepoMetadata: Record<string, ProjectMetadata> = {
  "txt-to-image-ai-": {
    category: "AI Web Application",
    detailedDescription:
      "A modern AI-powered text-to-image generator built with Next.js and Tailwind CSS, utilizing Google Gemini 2.0 Flash for high-quality image generation and Gemini 2.5 Flash for intelligent prompt enhancement. Designed with instant image previews, direct download capabilities, and a responsive interface.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini API",
      "React",
    ],
    features: [
      "High-quality text-to-image synthesis powered by Google Gemini 2.0 Flash",
      "Optional AI prompt enhancement using Gemini 2.5 Flash",
      "Instant image preview canvas with one-click image download",
      "Responsive modern UI built with Next.js and Tailwind CSS",
    ],
    highlights: [
      "Integrated Google Gemini 2.0 Flash for ultra-fast generative image synthesis",
      "Prompt refinement pipeline powered by Gemini 2.5 Flash reasoning",
      "Client-side canvas preview and download with zero server storage overhead",
    ],
  },
  "TTD-Booking-Assistant": {
    category: "Browser Extension",
    detailedDescription:
      "A specialized Chrome extension engineered in TypeScript for managing TTD pilgrim profiles, family/group lists, rapid form autofill, booking-form detection, seva eligibility checks, and booking cooldown tracking.",
    technologies: [
      "TypeScript",
      "Chrome Extension API",
      "HTML5",
      "CSS3",
      "DOM Automation",
    ],
    features: [
      "Pilgrim profile and group management for rapid booking workflows",
      "Automatic booking-form detection and intelligent field autofill",
      "Seva eligibility verification and cooldown period tracking",
      "Local storage profile persistence with quick-select controls",
    ],
    highlights: [
      "Chrome Extension Manifest V3 with secure isolated content scripts",
      "Dynamic DOM mutation observers for instant booking form detection and autofill",
      "Local storage profile persistence with automated quota and cooldown checks",
    ],
  },
  "Resolve-AI": {
    category: "AI Assistant Application",
    detailedDescription:
      "An AI assistant application built with Kotlin and modern web integration to help users resolve queries, automate workflows, and interact with intelligent conversational models.",
    technologies: ["Kotlin", "AI Integration", "REST APIs"],
    features: [
      "Interactive AI assistant interface for rapid query resolution",
      "Streamlined conversational workflow and prompt handling",
      "Cross-platform ready architecture with live web deployment",
    ],
  },
  "Resolve-AI-A-universal-app-": {
    category: "Universal Kotlin Application",
    detailedDescription:
      "Universal application implementation of Resolve AI written in Kotlin, structured for multi-device assistant workflows and responsive task handling.",
    technologies: ["Kotlin", "Multiplatform Architecture", "REST APIs"],
    features: [
      "Universal app structure built with Kotlin",
      "Modular assistant task execution and API communication",
    ],
  },
  AlgoMaster: {
    category: "Algorithm & DSA Platform",
    detailedDescription:
      "An interactive TypeScript application designed for mastering data structures and algorithms through structured problem exploration, code walkthroughs, and visual execution feedback.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Algorithms"],
    features: [
      "Structured algorithm and data structure practice modules",
      "Clean interactive interface built with TypeScript",
      "Step-by-step complexity and execution insights",
    ],
  },
  "offline-communication-system": {
    category: "LAN & Offline Networking",
    detailedDescription:
      "A Dart/Flutter offline communication system enabling devices on a local network to discover peers, exchange messages, and communicate reliably without requiring active internet connectivity.",
    technologies: ["Dart", "Flutter", "LAN Networking", "Sockets"],
    features: [
      "Zero-internet peer-to-peer communication over local area networks (LAN)",
      "Cross-platform interface built with Dart and Flutter",
      "Low-latency local message routing and connection management",
    ],
    highlights: [
      "Zero-internet peer discovery and packet serialization over local Wi-Fi / LAN",
      "Custom socket protocol implementation designed for cross-device resilience",
      "Zero external server or cloud dependency for complete privacy",
    ],
  },
  "teampilot-ai": {
    category: "AI Team Collaboration Platform",
    detailedDescription:
      "An AI-assisted team productivity and collaboration web application built with TypeScript, helping engineering and product teams organize tasks, coordinate workflows, and track deliverables.",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    features: [
      "AI-augmented workspace for team task and project coordination",
      "Interactive dashboard with real-time status tracking",
      "Responsive layout deployed on Vercel",
    ],
    highlights: [
      "AI-driven task decomposition and team deliverable coordination",
      "Interactive dashboard views with real-time status tracking",
      "Deployed on Vercel with comprehensive TypeScript type coverage",
    ],
  },
  "Portfolio-2.O": {
    category: "Developer Portfolio",
    detailedDescription:
      "Personal full-stack developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features dynamic GitHub repository auto-fetching, animated technology GIF showcases, smooth section navigation, and a responsive glassmorphism UI.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub REST API",
    ],
    features: [
      "Dynamic GitHub repository integration with automatic revalidation",
      "Interactive technology & skill showcase with animated GIFs",
      "Single-page smooth anchor navigation and responsive glassmorphism UI",
      "Project details modal and direct CV download integration",
    ],
    highlights: [
      "Next.js App Router single-page scrolling architecture",
      "Light glassmorphism design system with responsive Framer Motion animations",
      "Automated GitHub API integration and accessible interactive project showcase",
    ],
  },
  VisualExplain: {
    category: "AI Education & Vision App",
    detailedDescription:
      "An AI-powered educational web application built in TypeScript that helps students understand complex textbook images, scientific diagrams, and visual concepts using multimodal vision and reasoning models.",
    technologies: [
      "TypeScript",
      "React",
      "Vision AI Models",
      "Tailwind CSS",
    ],
    features: [
      "Multimodal image and textbook diagram analysis for students",
      "Step-by-step conceptual explanations generated from uploaded visuals",
      "Clean, distraction-free learning interface",
    ],
  },
  "ai-chat-chrome-extension": {
    category: "Multi-Model AI Extension",
    detailedDescription:
      "A Chrome browser extension built with TypeScript that integrates multiple AI models tailored for distinct browsing tasks, summarization, coding assistance, and contextual Q&A.",
    technologies: ["TypeScript", "Chrome Extension API", "AI APIs", "React"],
    features: [
      "Multi-model AI selection tailored to different task types",
      "In-browser side panel and popup chat workflow",
      "Contextual page assistance without leaving the active tab",
    ],
  },
  "Aurora_En-able": {
    category: "Accessibility & Assistive Tech",
    detailedDescription:
      "A TypeScript web application focused on accessibility and assistive digital workflows, designed with clean interfaces and inclusive interaction patterns.",
    technologies: ["TypeScript", "React", "CSS3", "Accessibility"],
    features: [
      "Accessible, user-friendly interface components",
      "Type-safe frontend architecture built in TypeScript",
    ],
  },
  "Offline-Lan-Call": {
    category: "LAN Voice & Communication",
    detailedDescription:
      "A Dart-based local area network (LAN) voice calling and communication application that enables real-time audio communication between devices connected to the same local network without internet access.",
    technologies: ["Dart", "Flutter", "LAN Sockets", "Real-Time Audio"],
    features: [
      "Real-time voice calling over local Wi-Fi / LAN networks",
      "Operates completely offline without external signaling servers",
      "Peer discovery and direct socket audio streaming",
    ],
  },
  AlgoViz: {
    category: "Algorithm Visualizer",
    detailedDescription:
      "An interactive algorithm visualization web app built with TypeScript and deployed on Vercel, allowing users to visualize sorting, searching, and graph algorithms step by step in real time.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Data Structures"],
    features: [
      "Real-time visual animations for sorting and pathfinding algorithms",
      "Adjustable playback speed, array sizes, and step controls",
      "Interactive educational UI deployed on Vercel",
    ],
  },
  "Eco-finds": {
    category: "Full-Stack E-Commerce Platform",
    detailedDescription:
      "A full-stack sustainable marketplace application built with Next.js, TypeScript, and Firebase for browsing, purchasing, and managing eco-friendly products. Includes user authentication, product listings with image uploads, shopping cart, checkout flow, and purchase history.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase Auth",
      "Cloud Firestore",
      "Tailwind CSS",
    ],
    features: [
      "Complete user authentication and profile management via Firebase",
      "Product catalog browsing, creation, and image management",
      "Interactive shopping cart, checkout flow, and order history tracking",
      "Responsive full-stack architecture deployed on Vercel",
    ],
  },
  "CineCritic-Movie-Reviews-Web-App": {
    category: "Full-Stack Media & Review Platform",
    detailedDescription:
      "CineCritic is a mobile-responsive movie review platform built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Firebase. It enables admin authentication to publish and manage movie reviews while letting readers browse, filter, and explore reviews in an interactive UI.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Role-based admin dashboard for publishing and editing movie reviews",
      "Interactive user browsing with category filtering and search",
      "Smooth page and card transitions powered by Framer Motion",
      "Real-time cloud persistence using Firebase",
    ],
  },
  "weather-wave-dashboard": {
    category: "Real-Time Weather Dashboard",
    detailedDescription:
      "A sleek, animated weather dashboard built with React, JavaScript, Tailwind CSS, and Framer Motion. Provides real-time weather metrics, 7-day forecasts, and global city search with live autocomplete suggestions powered by the OpenWeather API.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "OpenWeather REST API",
    ],
    features: [
      "Real-time temperature, humidity, wind speed, and atmospheric conditions",
      "7-day extended forecast with dynamic weather iconography",
      "City search with live autocomplete suggestions via OpenWeather API",
      "Responsive animated dashboard cards",
    ],
  },
  "GlowDrop-offline-file-sharing-": {
    category: "LAN Offline File Sharing",
    detailedDescription:
      "A local area network (LAN) offline file-sharing application written in JavaScript, designed for fast peer-to-peer file transfers across devices on the same Wi-Fi or local network without cloud uploads.",
    technologies: ["JavaScript", "Node.js", "LAN Networking", "WebSockets"],
    features: [
      "Direct device-to-device file transfer over local networks",
      "No internet connection or external cloud storage required",
      "Fast local throughput with simple browser-based pairing",
    ],
  },
  "Shareblast-A-offline-messaging-app-": {
    category: "LAN Offline Messaging App",
    detailedDescription:
      "An offline-first LAN messaging application built with JavaScript that enables instant text and media messaging across devices connected to the same local network.",
    technologies: ["JavaScript", "Node.js", "LAN Sockets", "Express"],
    features: [
      "Instant messaging across LAN-connected computers and mobile devices",
      "Zero internet dependency for secure local communication",
      "Lightweight backend socket server for real-time broadcast",
    ],
  },
  "lohith-portfolio": {
    category: "Developer Portfolio (v1)",
    detailedDescription:
      "Earlier personal developer portfolio of Lohith Sai G built using React, Vite, and Tailwind CSS, featuring project showcases, skills overview, and responsive animations.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    features: [
      "Responsive multi-section layout built with React and Vite",
      "Showcases LAN networking and full-stack web projects",
    ],
  },
  "Full-stack-assignment-Aerohyhyre-": {
    category: "Full-Stack Web Application",
    detailedDescription:
      "Full-stack engineering assignment built with JavaScript demonstrating end-to-end frontend and backend API integration, state management, and responsive UI implementation.",
    technologies: ["JavaScript", "Node.js", "Express", "REST APIs"],
    features: [
      "End-to-end client-server communication via RESTful endpoints",
      "Clean modular codebase and responsive frontend views",
    ],
  },
  AeroHyreAssignment: {
    category: "Full-Stack Web Application",
    detailedDescription:
      "Full-stack web application repository developed in JavaScript featuring structured API endpoints, data handling, and interactive user flows.",
    technologies: ["JavaScript", "REST APIs", "HTML5", "CSS3"],
    features: [
      "Structured frontend and backend integration",
      "Interactive data presentation and form workflows",
    ],
  },
};

const cardGradients = [
  "from-indigo-100/90 via-purple-50/80 to-white",
  "from-blue-100/90 via-indigo-50/80 to-white",
  "from-violet-100/90 via-fuchsia-50/70 to-white",
];

const formatRepoTitle = (name: string) => {
  return name
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const getCleanLiveUrl = (homepage?: string | null) => {
  if (!homepage || typeof homepage !== "string") return null;
  const trimmed = homepage.trim();
  if (trimmed.length === 0) return null;
  if (trimmed.includes("github.com/Lohithsai06")) return null;
  if (trimmed === "#" || trimmed === "none") return null;
  return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
};

const formatUpdatedDate = (isoString?: string) => {
  if (!isoString) return null;
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return null;
    return d.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  } catch {
    return null;
  }
};

interface ExtractedReadmeData {
  overview?: string;
  features: string[];
  technologies: string[];
}

function parseReadmeForHighlights(rawMarkdown: string): ExtractedReadmeData {
  const result: ExtractedReadmeData = {
    features: [],
    technologies: [],
  };

  if (!rawMarkdown || typeof rawMarkdown !== "string") return result;

  const lines = rawMarkdown.split(/\r?\n/);
  let inFeaturesSection = false;
  let inTechSection = false;
  let candidateOverview = "";

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();
    if (!line) continue;

    // Detect section headers
    const headerMatch = line.match(/^#{1,4}\s+(.*)$/i);
    if (headerMatch) {
      const headingText = headerMatch[1].toLowerCase();
      inFeaturesSection = /feature|highlight|capability|what it does/i.test(headingText);
      inTechSection = /tech|stack|built with|built using|tools|requirement/i.test(headingText);
      continue;
    }

    // Skip badges, images, html tags, horizontal rules, code block markers
    if (
      line.startsWith("[![") ||
      line.startsWith("![") ||
      line.startsWith("<") ||
      line.startsWith("---") ||
      line.startsWith("```")
    ) {
      continue;
    }

    // Clean inline formatting
    const cleanedLine = line
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_`~]/g, "")
      .replace(/<[^>]*>/g, "")
      .trim();

    // Collect feature bullet points
    if (inFeaturesSection && /^[-*•]\s+/.test(line)) {
      const item = cleanedLine.replace(/^[-*•]\s+/, "").trim();
      if (item.length > 6 && item.length < 180 && result.features.length < 5) {
        result.features.push(item);
      }
    }

    // Collect tech stack items if in tech section
    if (inTechSection && /^[-*•]\s+/.test(line)) {
      const techItem = cleanedLine.replace(/^[-*•]\s+/, "").split(/[:,-]/)[0].trim();
      if (techItem.length > 1 && techItem.length < 30 && result.technologies.length < 8) {
        result.technologies.push(techItem);
      }
    }

    // Collect candidate overview paragraph
    if (
      !candidateOverview &&
      !inFeaturesSection &&
      !inTechSection &&
      !/^[-*•#0-9]/.test(line) &&
      cleanedLine.length > 40 &&
      cleanedLine.length < 380
    ) {
      candidateOverview = cleanedLine;
    }
  }

  if (candidateOverview) {
    result.overview = candidateOverview;
  }

  return result;
}

const Projects = ({ repos: initialRepos }: ProjectsProps) => {
  const [repos, setRepos] = useState<Repo[]>(initialRepos || []);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [repoLanguages, setRepoLanguages] = useState<string[]>([]);
  const [extractedReadme, setExtractedReadme] = useState<ExtractedReadmeData | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalDialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (initialRepos && initialRepos.length > 0) {
      setRepos(initialRepos);
      return;
    }

    let isMounted = true;
    const fetchFallback = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.github.com/users/Lohithsai06/repos?type=public&sort=updated&direction=desc"
        );
        if (res.ok) {
          const data = await res.json();
          if (isMounted && Array.isArray(data)) {
            setRepos(data);
          }
        }
      } catch (err) {
        console.error("Client fallback fetch error:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchFallback();
    return () => {
      isMounted = false;
    };
  }, [initialRepos]);

  const handleOpenModal = useCallback((repo: Repo) => {
    if (typeof document !== "undefined") {
      lastFocusedElementRef.current = document.activeElement as HTMLElement;
    }
    setSelectedRepo(repo);
    setRepoLanguages([]);
    setExtractedReadme(null);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedRepo(null);
    if (lastFocusedElementRef.current) {
      setTimeout(() => {
        lastFocusedElementRef.current?.focus();
      }, 50);
    }
  }, []);

  // Lock background scroll, handle Escape & focus trap when modal is open
  useEffect(() => {
    if (!selectedRepo) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleCloseModal();
        return;
      }

      if (e.key === "Tab" && modalDialogRef.current) {
        const focusable = modalDialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedRepo, handleCloseModal]);

  // Fetch live repository languages and README details when modal opens
  useEffect(() => {
    if (!selectedRepo) return;

    let isMounted = true;
    const controller = new AbortController();

    const fetchExtraRepoDetails = async () => {
      try {
        const langUrl =
          selectedRepo.languages_url ||
          `https://api.github.com/repos/Lohithsai06/${selectedRepo.name}/languages`;
        const langRes = await fetch(langUrl, { signal: controller.signal });
        if (langRes.ok) {
          const langData = await langRes.json();
          if (isMounted && langData && typeof langData === "object") {
            setRepoLanguages(Object.keys(langData));
          }
        }
      } catch {
        // Silently ignore abort or rate limit errors
      }

      try {
        const readmeRes = await fetch(
          `https://api.github.com/repos/Lohithsai06/${selectedRepo.name}/readme`,
          {
            headers: { Accept: "application/vnd.github.v3.raw" },
            signal: controller.signal,
          }
        );
        if (readmeRes.ok) {
          const rawText = await readmeRes.text();
          if (isMounted && rawText) {
            const parsed = parseReadmeForHighlights(rawText);
            setExtractedReadme(parsed);
          }
        }
      } catch {
        // Silently ignore missing README or aborts
      }
    };

    fetchExtraRepoDetails();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [selectedRepo]);

  const displayedRepos = showAll ? repos : repos.slice(0, 6);

  // Compute merged modal details for currently selected repo
  const activeMeta: ProjectMetadata | null = selectedRepo
    ? (() => {
        const meta = factualRepoMetadata[selectedRepo.name];
        if (meta) {
          return {
            category:
              meta.category ||
              (selectedRepo.language
                ? `${selectedRepo.language} Application`
                : "Featured Project"),
            detailedDescription: meta.detailedDescription,
            technologies: meta.technologies,
            features: meta.features,
            highlights: meta.highlights,
          };
        }

        // Dynamic fallback using repo info and parsed README
        const repoLang = selectedRepo.language;
        const category = repoLang
          ? `${repoLang} Application`
          : "Software Engineering Project";
        const detailedDescription =
          selectedRepo.description ||
          extractedReadme?.overview ||
          `Open-source ${
            repoLang || "software"
          } repository developed and maintained by Lohith Sai G on GitHub.`;

        const features =
          extractedReadme?.features && extractedReadme.features.length > 0
            ? extractedReadme.features
            : [
                `Public open-source repository version-controlled on GitHub`,
                `Built with ${
                  repoLang || "modern development standards"
                } following clean engineering practices`,
                `Full source code and commit history available for inspection`,
              ];

        const technologies = Array.from(
          new Set([
            ...(repoLang ? [repoLang] : []),
            ...(extractedReadme?.technologies || []),
            ...(selectedRepo.topics || []),
            "Git",
            "GitHub",
          ])
        );

        return {
          category,
          detailedDescription,
          technologies,
          features,
        };
      })()
    : null;

  const mergedTechnologies = selectedRepo && activeMeta
    ? Array.from(
        new Set([
          ...(selectedRepo.language ? [selectedRepo.language] : []),
          ...repoLanguages,
          ...activeMeta.technologies,
          ...(selectedRepo.topics || []),
        ])
      )
    : [];

  const activeLiveUrl = selectedRepo
    ? getCleanLiveUrl(selectedRepo.homepage)
    : null;

  return (
    <section
      id="projects"
      className="w-full px-3 sm:px-6 py-2.5 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-[1140px] mx-auto glass-panel rounded-[32px] p-5 sm:p-10 lg:p-12">
        {/* Header Row matching FEATURED PROJECTS / Selected Work */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-indigo-500 mb-1.5">
              FEATURED PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Selected Work
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {repos.length > 6 && (
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="glass-pill hover:bg-white text-slate-700 rounded-full px-4 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer"
              >
                {showAll ? "Show Featured (6)" : `Show All (${repos.length})`}
              </button>
            )}
            <a
              href="https://github.com/Lohithsai06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 glass-pill hover:bg-white text-slate-800 rounded-full px-4 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
            </a>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((skeleton) => (
              <div
                key={skeleton}
                className="glass-card rounded-[24px] p-3.5 h-72 animate-pulse flex flex-col justify-between"
              >
                <div className="h-44 rounded-[18px] bg-slate-200/60" />
                <div className="p-2 space-y-2">
                  <div className="h-4 w-2/3 bg-slate-200/70 rounded" />
                  <div className="h-3 w-1/2 bg-slate-200/50 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : displayedRepos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedRepos.map((repo, index) => {
              const gradientClass = cardGradients[index % cardGradients.length];
              const liveUrl = getCleanLiveUrl(repo.homepage);
              const meta = factualRepoMetadata[repo.name];
              const summaryText =
                repo.description ||
                meta?.detailedDescription ||
                "Open-source development repository crafted by Lohith Sai G.";

              return (
                <motion.article
                  key={repo.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for project ${formatRepoTitle(repo.name)}`}
                  onClick={() => handleOpenModal(repo)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpenModal(repo);
                    }
                  }}
                  className="glass-card rounded-[24px] p-3.5 flex flex-col justify-between hover:bg-white/95 transition-all duration-300 hover:-translate-y-1 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400/80 text-left"
                >
                  <div>
                    {/* Visual Preview Header inspired by reference project thumbnails */}
                    <div
                      className={`relative h-44 rounded-[18px] bg-gradient-to-br ${gradientClass} border border-white/90 p-3.5 sm:p-4 overflow-hidden flex flex-col justify-between shadow-inner`}
                    >
                      {/* Top bar inside thumbnail */}
                      <div className="flex items-center justify-between gap-2 relative z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-indigo-600 border border-white shadow-sm">
                          <Code2 className="w-3 h-3 shrink-0" />
                          <span className="truncate max-w-[110px]">
                            {repo.language || meta?.technologies?.[0] || "Full-Stack"}
                          </span>
                        </span>

                        <div className="flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-slate-600 border border-white shadow-sm shrink-0">
                          <span className="inline-flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
                            {repo.stargazers_count}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="inline-flex items-center gap-1">
                            <GitFork className="w-3 h-3 text-indigo-500" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>

                      {/* Mockup Window Illustration inside Thumbnail */}
                      <div className="relative z-10 mt-3 rounded-xl bg-white/85 backdrop-blur-md border border-white/95 p-3 shadow-[0_8px_20px_rgba(79,70,229,0.08)] group-hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-300" />
                            <span className="w-2 h-2 rounded-full bg-amber-300" />
                            <span className="w-2 h-2 rounded-full bg-emerald-300" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 truncate max-w-[130px]">
                            Lohithsai06/{repo.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 shrink-0">
                            <FolderGit2 className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-slate-800 truncate">
                              {formatRepoTitle(repo.name)}
                            </p>
                            <div className="mt-1 flex items-center gap-1.5">
                              <span className="h-1.5 w-12 rounded-full bg-indigo-200/80" />
                              <span className="h-1.5 w-8 rounded-full bg-purple-200/80" />
                              <span className="h-1.5 w-6 rounded-full bg-blue-200/80" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Title & Description */}
                    <div className="pt-4 px-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                            {formatRepoTitle(repo.name)}
                          </h3>
                          <p className="text-xs font-medium text-indigo-500/90 mt-0.5 truncate">
                            {meta?.category ||
                              (repo.language
                                ? `${repo.language} Application`
                                : "Software Repository")}
                          </p>
                        </div>

                        {/* Action Buttons (stopPropagation so links don't trigger modal) */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          {liveUrl && (
                            <a
                              href={liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              title="Open Live Demo"
                              aria-label={`Open live demo for ${repo.name}`}
                              className="w-8 h-8 rounded-full bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white border border-indigo-100 flex items-center justify-center transition-colors shadow-sm"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title="View GitHub Repository"
                            aria-label={`View ${repo.name} on GitHub`}
                            className="w-8 h-8 rounded-full bg-white hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200/80 flex items-center justify-center transition-colors shadow-sm"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <p className="mt-2.5 text-xs sm:text-[13px] text-slate-500 line-clamp-2 leading-relaxed">
                        {summaryText}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Footer inside Card */}
                  <div className="mt-4 pt-3 mx-2 border-t border-slate-200/50 flex items-center justify-between gap-2 text-xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(repo);
                      }}
                      className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    <div className="flex items-center gap-3">
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="text-sm text-slate-600">
              No public repositories found or unable to reach GitHub API at the
              moment.
            </p>
            <a
              href="https://github.com/Lohithsai06"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-5 py-2.5 text-xs font-semibold"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
            </a>
          </div>
        )}
      </div>

      {/* Accessible Glassmorphism Project Details Modal */}
      <AnimatePresence>
        {selectedRepo && activeMeta && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-md"
          >
            <motion.div
              ref={modalDialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-description"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-[28px] bg-white/95 backdrop-blur-2xl border border-white shadow-[0_25px_70px_-15px_rgba(79,70,229,0.28)] overflow-hidden"
            >
              {/* Modal Header Banner */}
              <div className="relative bg-gradient-to-br from-indigo-100/90 via-purple-50/80 to-white px-5 py-5 sm:px-7 sm:py-6 border-b border-slate-200/70 shrink-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-indigo-600 border border-indigo-100 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        {activeMeta.category || "Featured Project"}
                      </span>
                      {selectedRepo.language && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                          <Code2 className="w-3 h-3 text-indigo-500" />
                          {selectedRepo.language}
                        </span>
                      )}
                    </div>

                    <h3
                      id="project-modal-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight break-words"
                    >
                      {formatRepoTitle(selectedRepo.name)}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5 truncate">
                      github.com/Lohithsai06/{selectedRepo.name}
                    </p>
                  </div>

                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={handleCloseModal}
                    aria-label="Close project details modal"
                    className="w-9 h-9 rounded-full bg-white/90 hover:bg-slate-900 text-slate-600 hover:text-white border border-slate-200/80 shadow-sm flex items-center justify-center transition-colors shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Repository Stats Strip */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1 border border-white shadow-sm">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    <strong>{selectedRepo.stargazers_count}</strong> Stars
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1 border border-white shadow-sm">
                    <GitFork className="w-3.5 h-3.5 text-indigo-500" />
                    <strong>{selectedRepo.forks_count}</strong> Forks
                  </span>
                  {selectedRepo.updated_at && formatUpdatedDate(selectedRepo.updated_at) && (
                    <span className="inline-flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1 border border-white shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-purple-500" />
                      Updated {formatUpdatedDate(selectedRepo.updated_at)}
                    </span>
                  )}
                </div>
              </div>

              {/* Scrollable Modal Body */}
              <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-left">
                {/* Project Overview */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Project Overview
                  </h4>
                  <p
                    id="project-modal-description"
                    className="text-xs sm:text-sm text-slate-700 leading-relaxed"
                  >
                    {activeMeta.detailedDescription}
                  </p>
                </div>

                {/* Key Features */}
                {activeMeta.features && activeMeta.features.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Key Features &amp; Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {activeMeta.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Architecture & Highlights (if available) */}
                {activeMeta.highlights && activeMeta.highlights.length > 0 && (
                  <div className="rounded-2xl bg-indigo-50/60 border border-indigo-100/70 p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Architecture &amp; System Highlights</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {activeMeta.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs sm:text-[13px] text-slate-700 flex items-start gap-2"
                        >
                          <span className="text-indigo-500 font-bold">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies & Languages Used */}
                {mergedTechnologies.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Technologies &amp; Languages</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {mergedTechnologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-indigo-50/90 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Action Buttons */}
              <div className="px-5 py-4 sm:px-7 bg-slate-50/80 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={selectedRepo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {activeLiveUrl && (
                    <a
                      href={activeLiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="glass-pill hover:bg-white text-slate-700 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
