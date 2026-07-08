import React from 'react';
import { motion } from 'motion/react';
import { Slide } from '../types';
import { 
  ChefHat, Flame, Crown, Sparkles, Calendar, CookingPot, 
  MapPin, Users, ArrowUpRight, CheckCircle2, Check, Phone, 
  Globe, Mail, Compass, Utensils, Zap, ShieldCheck 
} from 'lucide-react';

interface SlideRendererProps {
  key?: any;
  slide: Slide;
  orthodonticsClinicUrl: string;
  patientInteractionUrl: string;
  dentistPortraitUrl: string;
}

export default function SlideRenderer({ 
  slide, 
  orthodonticsClinicUrl, 
  patientInteractionUrl, 
  dentistPortraitUrl 
}: SlideRendererProps) {
  
  // Transition configurations
  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  // Helper to split bullet text on colon (":") for bold titles
  const formatBullet = (bullet: string) => {
    const parts = bullet.split(':');
    if (parts.length > 1) {
      return (
        <span className="flex flex-col gap-1">
          <strong className="text-bbq-red font-sans font-bold text-sm tracking-tight block">
            {parts[0]}
          </strong>
          <span className="text-stone-600 text-xs leading-relaxed">
            {parts.slice(1).join(':').trim()}
          </span>
        </span>
      );
    }
    return <span className="text-stone-600 text-xs leading-relaxed">{bullet}</span>;
  };

  // Switch layouts dynamically
  const renderSlideContent = () => {
    switch (slide.layoutType) {
      case 'title':
        return (
          <div className="relative w-full h-full min-h-[340px] xs:min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden flex flex-col justify-between p-4 xs:p-6 sm:p-8 md:p-12 text-white shadow-xl border border-stone-850 bg-black">
            {/* Background Image with elegant overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={orthodonticsClinicUrl} 
                alt="BBQ Charcoal Grill Background" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.25]"
              />
              {/* Dark black shade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/85"></div>
              {/* Crimson Red and Gold ambient glow spots */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-bbq-red/15 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-bbq-gold/5 rounded-full blur-3xl"></div>
            </div>

            {/* "Established Prestige" badge in top right corner */}
            <div className="absolute top-3 right-3 xs:top-4 xs:right-4 sm:top-6 sm:right-6 z-10">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="bg-bbq-red text-white border border-bbq-gold/30 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full font-display font-bold text-[8px] sm:text-[10px] tracking-widest uppercase flex items-center gap-1 sm:gap-1.5 shadow-xl shadow-black/30"
              >
                <Flame size={10} className="text-bbq-gold animate-pulse sm:w-3 sm:h-3" />
                <span>Signature Excellence</span>
              </motion.div>
            </div>

            {/* Metadata (Top Left) */}
            <div className="z-10 flex items-center gap-1.5 sm:gap-2 bg-stone-900/60 backdrop-blur-sm border border-stone-800/80 px-2.5 py-1 rounded-full w-fit">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-bbq-red animate-pulse"></span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-stone-300 font-semibold uppercase">Strategic Partnership Proposal</span>
            </div>

            {/* Titles & Subtitles (Centered content with bottom alignment) */}
            <div className="z-10 mt-auto flex flex-col gap-2.5 sm:gap-4 max-w-2xl pt-16 xs:pt-12">
              <div className="bg-bbq-red/20 border border-bbq-red/30 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md text-bbq-orange text-[10px] sm:text-xs font-semibold w-fit font-mono tracking-wider uppercase">
                The Digital Feast Initiative
              </div>
              
              <h1 className="font-display font-black text-2xl xs:text-3xl md:text-5xl leading-tight text-white tracking-tight drop-shadow-md">
                {slide.title}
              </h1>
              
              {slide.subtitle && (
                <p className="font-sans text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                  {slide.subtitle}
                </p>
              )}
            </div>

            {/* Presentation Details Footer (Bottom) */}
            <div className="z-10 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[11px] sm:text-xs text-stone-400">
              <div className="flex flex-col gap-0.5">
                <span className="font-display font-bold text-white tracking-wide text-xs">{slide.content[0]}</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-stone-400">{slide.content[1]} | {slide.content[2]}</span>
              </div>
              <div className="bg-stone-900/80 border border-stone-800 backdrop-blur px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-bbq-gold text-[9px] sm:text-[10px] font-mono">
                Slide 1 of 7
              </div>
            </div>
          </div>
        );

      case 'summary':
        return (
          <div className="w-full flex flex-col h-full min-h-[340px] xs:min-h-[380px] sm:min-h-[460px] justify-between p-4 xs:p-6 sm:p-8 md:p-12 bg-white border border-stone-200 rounded-2xl shadow-md relative overflow-hidden text-stone-900">
            {/* Subtle glow effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-bbq-red/5 rounded-full blur-2xl"></div>
            
            <div className="z-10">
              {/* Header */}
              <div className="flex flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-stone-200 gap-3">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-bbq-red bg-bbq-red/5 border border-bbq-red/15 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded uppercase tracking-wider">
                    {slide.subtitle}
                  </span>
                  <h2 className="font-display font-black text-lg xs:text-xl sm:text-2xl md:text-3xl text-stone-900 tracking-tight mt-1 sm:mt-1.5">{slide.title}</h2>
                </div>
                <div className="bg-bbq-red/5 border border-bbq-red/15 text-bbq-red p-2 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0">
                  <ChefHat size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
              </div>

              {/* Vision Blocks */}
              <motion.div 
                variants={containerVariants} 
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-6"
              >
                {slide.content.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="bg-stone-50 p-4 sm:p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between min-h-[140px] sm:min-h-[180px] hover:border-bbq-red/40 transition-all group"
                  >
                    <div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-sans font-bold text-xs bg-bbq-red/5 text-bbq-red border border-bbq-red/10 group-hover:bg-bbq-red group-hover:text-white group-hover:border-bbq-red/30 transition-all">
                        0{idx + 1}
                      </div>
                      <div className="mt-2.5">
                        {formatBullet(item)}
                      </div>
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-stone-400 group-hover:text-bbq-red transition flex items-center gap-1 mt-3 sm:mt-4 uppercase">
                      Strategic Focus <ArrowUpRight size={10} />
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Slide Footer */}
            <div className="z-10 flex justify-between items-center text-stone-500 text-[9px] sm:text-[10px] mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-stone-200 font-mono">
              <span>Prepared for BBQ Tonight Management</span>
              <span>Slide 2 of 7</span>
            </div>
          </div>
        );

      case 'bullets':
        return (
          <div className="w-full flex flex-col h-full min-h-[340px] xs:min-h-[380px] sm:min-h-[460px] justify-between p-4 xs:p-6 sm:p-8 md:p-12 bg-white border border-stone-200 rounded-2xl shadow-md relative overflow-hidden text-stone-900">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bbq-gold/5 rounded-full blur-2xl"></div>

            <div className="z-10">
              {/* Header */}
              <div className="flex flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-stone-200 gap-3">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-bbq-red bg-bbq-red/5 border border-bbq-red/15 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded uppercase tracking-wider">
                    {slide.subtitle}
                  </span>
                  <h2 className="font-display font-black text-lg xs:text-xl sm:text-2xl md:text-3xl text-stone-900 tracking-tight mt-1 sm:mt-1.5">{slide.title}</h2>
                </div>
                <div className="bg-bbq-red/5 border border-bbq-red/15 text-bbq-red p-2 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0">
                  <Flame size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
              </div>

              {/* Requirement Cards */}
              <motion.div 
                variants={containerVariants} 
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4"
              >
                {slide.content.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="p-3 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl shadow-sm hover:border-bbq-red/40 transition-all flex gap-3 sm:gap-3.5 group"
                  >
                    <div className="bg-white text-bbq-red p-2 rounded-lg h-fit border border-stone-200 shrink-0">
                      {idx === 0 && <Users size={14} className="sm:w-4 sm:h-4" />}
                      {idx === 1 && <Calendar size={14} className="sm:w-4 sm:h-4" />}
                      {idx === 2 && <Crown size={14} className="sm:w-4 sm:h-4" />}
                      {idx === 3 && <Flame size={14} className="sm:w-4 sm:h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      {formatBullet(item)}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Slide Footer */}
            <div className="z-10 flex justify-between items-center text-stone-500 text-[9px] sm:text-[10px] mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-stone-200 font-mono">
              <span>Verified Experience Blueprint</span>
              <span>Slide 3 of 7</span>
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="w-full flex flex-col h-full min-h-[340px] xs:min-h-[380px] sm:min-h-[460px] justify-between p-4 xs:p-6 sm:p-8 md:p-12 bg-white border border-stone-200 rounded-2xl shadow-md relative overflow-hidden text-stone-900">
            <div className="z-10">
              {/* Header */}
              <div className="flex flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-stone-200 gap-3">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-bbq-red bg-bbq-red/5 border border-bbq-red/15 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded uppercase tracking-wider">
                    {slide.subtitle}
                  </span>
                  <h2 className="font-display font-black text-lg xs:text-xl sm:text-2xl md:text-3xl text-stone-900 tracking-tight mt-1 sm:mt-1.5">{slide.title}</h2>
                </div>
                <div className="bg-stone-50 border border-stone-200 text-stone-700 p-2 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0">
                  <Utensils size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
              </div>

              {/* Split Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-3 sm:mt-4">
                {/* Left Side: Proposed Website Pages */}
                <div className="bg-bbq-red/5 border border-bbq-red/10 rounded-xl p-4 sm:p-5">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-bbq-red mb-2.5 sm:mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-bbq-red rounded-full animate-ping"></span>
                    Proposed Online Guest Portal Pages
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {slide.content[0].replace('Website Pages: ', '').split(', ').map((page, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-1.5 bg-white border border-stone-200 p-2 rounded shadow-sm text-stone-700 min-w-0">
                        <Check size={11} className="text-bbq-red shrink-0" />
                        <span className="truncate">{page}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Interactive Modules */}
                <div className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-4 sm:p-5">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-amber-800 mb-2.5 sm:mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-bbq-gold rounded-full"></span>
                    Interactive Integration Modules
                  </h4>
                  <div className="flex flex-col gap-2 text-xs">
                    {slide.content[1].replace('Interactive Modules: ', '').split(', ').map((mod, mIdx) => (
                      <div key={mIdx} className="flex flex-row items-center justify-between gap-2 bg-white border border-stone-200 p-2.5 rounded shadow-sm text-stone-700">
                        <span className="font-semibold truncate">{mod}</span>
                        <span className="text-[8px] font-mono font-bold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                          Ready
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Footer */}
            <div className="z-10 flex justify-between items-center text-stone-500 text-[9px] sm:text-[10px] mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-stone-200 font-mono">
              <span>Proposed Digital Architecture</span>
              <span>Slide 4 of 7</span>
            </div>
          </div>
        );

      case 'two-column':
        const guestFeatures = slide.content.slice(1, 5);
        const adminFeatures = slide.content.slice(6);

        return (
          <div className="w-full flex flex-col h-full min-h-[340px] xs:min-h-[380px] sm:min-h-[460px] justify-between p-4 xs:p-6 sm:p-8 md:p-12 bg-white border border-stone-200 rounded-2xl shadow-md relative overflow-hidden text-stone-900">
            <div className="z-10">
              {/* Header */}
              <div className="flex flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-stone-200 gap-3">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-amber-850 bg-amber-500/5 border border-amber-500/15 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded uppercase tracking-wider">
                    {slide.subtitle}
                  </span>
                  <h2 className="font-display font-black text-lg xs:text-xl sm:text-2xl md:text-3xl text-stone-900 tracking-tight mt-1 sm:mt-1.5">{slide.title}</h2>
                </div>
                <div className="bg-stone-50 border border-stone-200 text-stone-700 p-2 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0">
                  <CookingPot size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-3 sm:mt-4">
                {/* Column 1: Guest Experience */}
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-bbq-red flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-bbq-red shrink-0" /> {slide.content[0]}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {guestFeatures.map((feat, idx) => (
                      <div key={idx} className="flex gap-2 text-xs bg-stone-50 border border-stone-200 p-2 sm:p-2.5 rounded-lg text-stone-700">
                        <span className="text-bbq-red font-bold shrink-0">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Admin Control */}
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-amber-850 flex items-center gap-1.5">
                    <CookingPot size={13} className="text-amber-700 animate-pulse shrink-0" /> {slide.content[5]}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {adminFeatures.map((feat, idx) => (
                      <div key={idx} className="flex gap-2 text-xs bg-stone-50 border border-stone-200 p-2 sm:p-2.5 rounded-lg text-stone-700">
                        <span className="text-amber-600 font-bold shrink-0">⚙</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Footer */}
            <div className="z-10 flex justify-between items-center text-stone-500 text-[9px] sm:text-[10px] mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-stone-200 font-mono">
              <span>Operational Capabilities Breakdown</span>
              <span>Slide 5 of 7</span>
            </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="w-full flex flex-col h-full min-h-[340px] xs:min-h-[380px] sm:min-h-[460px] justify-between p-4 xs:p-6 sm:p-8 md:p-12 bg-white border border-stone-200 rounded-2xl shadow-md relative overflow-hidden text-stone-900">
            <div className="z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Text Area (8 cols) */}
              <div className="md:col-span-8 flex flex-col gap-3 sm:gap-4">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-bbq-red bg-bbq-red/5 border border-bbq-red/15 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded uppercase tracking-wider w-fit">
                  {slide.subtitle}
                </span>
                
                <h2 className="font-display font-black text-lg xs:text-xl sm:text-2xl md:text-4xl text-stone-900 tracking-tight leading-none">
                  {slide.title}
                </h2>

                <p className="text-xs text-stone-600 leading-relaxed font-medium">
                  {slide.content[0]}
                </p>

                {/* Main CTA Block */}
                <div className="bg-bbq-red/5 border border-bbq-red/10 p-3 sm:p-4 rounded-xl mt-1 flex items-center gap-2.5 sm:gap-3">
                  <Flame size={18} className="text-bbq-red shrink-0 animate-pulse" />
                  <p className="text-xs font-display font-bold text-stone-900 leading-normal">
                    "{slide.content[1].replace("Call to Action: ", "")}"
                  </p>
                </div>

                {/* Interactive Contact cards */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-2.5 sm:gap-3 mt-1">
                  <a href={`https://${slide.content[2].replace('Website: ', '')}`} target="_blank" rel="noreferrer" className="flex items-center border border-stone-200 hover:border-bbq-gold bg-stone-50 hover:bg-stone-100 p-2.5 sm:p-3 rounded-lg text-stone-750 transition shadow-sm min-w-0 overflow-hidden">
                    <div className="text-left min-w-0 flex-1">
                      <span className="block text-[8px] text-stone-500 font-mono uppercase leading-none mb-1">Visit Live Preview</span>
                      <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap block">{slide.content[2].replace('Website: ', '')}</span>
                    </div>
                  </a>
                  <a href={`mailto:${slide.content[3].replace('Contact Email: ', '')}`} className="flex items-center border border-stone-200 hover:border-bbq-red bg-stone-50 hover:bg-stone-100 p-2.5 sm:p-3 rounded-lg text-stone-750 transition shadow-sm min-w-0 overflow-hidden">
                    <div className="text-left min-w-0 flex-1">
                      <span className="block text-[8px] text-stone-500 font-mono uppercase leading-none mb-1">Direct Outreach</span>
                      <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap block">{slide.content[3].replace('Contact Email: ', '')}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Image Area with Badge overlay (4 cols) */}
              <div className="md:col-span-4 relative h-44 sm:h-64 lg:h-72 bg-stone-50 rounded-2xl overflow-hidden shadow-md border border-stone-200 flex items-center justify-center">
                <img 
                  src={patientInteractionUrl} 
                  alt="BBQ Tonight Luxury Dining Ambiance" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.95]"
                />
                
                {/* Large trust badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-bbq-red border-2 border-bbq-gold text-white p-2.5 rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '4s' }}>
                  <Flame size={20} className="text-bbq-gold sm:w-6 sm:h-6" />
                </div>
              </div>

            </div>

            {/* Slide Footer */}
            <div className="z-10 flex justify-between items-center text-stone-500 text-[9px] sm:text-[10px] mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-stone-200 font-mono">
              <span>BBQ Tonight Partner Pitch</span>
              <span>Slide 7 of 7</span>
            </div>
          </div>
        );

      default: // Grid bento slides (including Slide 6 Advantage)
        return (
          <div className="w-full flex flex-col h-full min-h-[340px] xs:min-h-[380px] sm:min-h-[460px] justify-between p-4 xs:p-6 sm:p-8 md:p-12 bg-white border border-stone-200 rounded-2xl shadow-md relative overflow-hidden text-stone-900">
            <div className="z-10">
              {/* Header */}
              <div className="flex flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-stone-200 gap-3">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-amber-850 bg-amber-500/5 border border-amber-500/15 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded uppercase tracking-wider">
                    {slide.subtitle}
                  </span>
                  <h2 className="font-display font-black text-lg xs:text-xl sm:text-2xl md:text-3xl text-stone-900 tracking-tight mt-1 sm:mt-1.5">{slide.title}</h2>
                </div>
                <div className="bg-bbq-red/5 border border-bbq-red/15 text-bbq-red p-2 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0">
                  <Crown size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
              </div>

              {/* Bento Grid */}
              <motion.div 
                variants={containerVariants} 
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 mt-3 sm:mt-4"
              >
                {slide.content.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="p-3.5 sm:p-4 rounded-xl border border-stone-200 bg-stone-50 hover:border-bbq-red/40 transition-all shadow-sm flex flex-col justify-between group min-h-[110px] sm:min-h-0"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                        <div className="text-amber-700 bg-amber-500/10 border border-amber-500/20 p-1.5 rounded-lg shrink-0">
                          {idx === 0 && <Crown size={14} className="sm:w-4 sm:h-4" />}
                          {idx === 1 && <Zap size={14} className="sm:w-4 sm:h-4" />}
                          {idx === 2 && <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />}
                          {idx === 3 && <MapPin size={14} className="sm:w-4 sm:h-4" />}
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold text-stone-400 group-hover:text-bbq-red transition-colors">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="min-w-0">
                        {formatBullet(item)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Slide Footer */}
            <div className="z-10 flex justify-between items-center text-stone-500 text-[9px] sm:text-[10px] mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-stone-200 font-mono">
              <span>Strategic Partnership Merits</span>
              <span>Slide 6 of 7</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      key={slide.id}
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      {renderSlideContent()}
    </motion.div>
  );
}
