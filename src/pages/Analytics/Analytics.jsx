import React from 'react';
import {
  Music,
  LayoutDashboard,
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
  DollarSign,
  FileText,
  PieChart,
  BarChart,
  Activity,
  Star,
  ArrowRight,
  MoreHorizontal,
  MapPin,
  Search,
  Bell,
  Moon,
  UserPlus,
  Wallet,
  Award,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const Analytics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const [hoveredData, setHoveredData] = React.useState(null);

  const enrollmentData = [
    { label: 'Jan', strings: 35, piano: 25 },
    { label: 'Feb', strings: 42, piano: 28 },
    { label: 'Mar', strings: 38, piano: 35 },
    { label: 'Apr', strings: 55, piano: 42 },
    { label: 'May', strings: 65, piano: 48 },
    { label: 'Jun', strings: 72, piano: 55 },
    { label: 'Jul', strings: 68, piano: 52 },
    { label: 'Aug', strings: 85, piano: 65 },
    { label: 'Sep', strings: 95, piano: 72 },
    { label: 'Oct', strings: 92, piano: 78 },
    { label: 'Nov', strings: 105, piano: 85 },
    { label: 'Dec', strings: 115, piano: 92 }
  ];

  const getChartPoints = (key) => {
    const maxVal = 130; // Fixed max scale
    const width = 1000;
    const height = 200;

    return enrollmentData.map((d, i) => {
      const x = (i / (enrollmentData.length - 1)) * width;
      const y = height - (d[key] / maxVal) * 160 - 20; // Scale to fit nicely
      return { x, y, ...d };
    });
  };

  const generateChartPath = (points, isArea = false) => {
    const width = 1000;
    const height = 200;
    let path = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
    if (isArea) {
      path += ` L ${width},${height} L 0,${height} Z`;
    }
    return path;
  };

  const stringsPoints = getChartPoints('strings');
  const pianoPoints = getChartPoints('piano');

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Reports & Insights</h2>
          <p className="text-slate-500 dark:text-slate-400">Detailed performance overview for Montreal Campuses</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white dark:bg-slate-800 p-1 rounded-lg border border-primary/10 shadow-sm">
            <button className="px-4 py-1.5 text-sm font-medium bg-primary text-white rounded shadow-sm">Last 12 Months</button>
            <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-primary transition-colors">Q3 2023</button>
            <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-primary transition-colors">Custom</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-primary/10 rounded-lg hover:bg-primary/5 transition-all shadow-sm">
            <FileText className="text-primary" size={20} />
            <span className="font-medium">Export</span>
          </button>
        </div>
      </header>

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Active Enrollments */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card p-6 rounded-xl relative overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all card-glow">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <UserPlus className="text-primary" size={48} />
            </div>
            <p className="text-slate-500 font-medium text-sm">Active Enrollments</p>
            <div className="flex items-end gap-3 mt-2">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">1,284</h3>
              <span className="text-green-500 text-sm font-bold flex items-center mb-1">
                <TrendingUp size={16} className="mr-1" /> 12%
              </span>
            </div>
            <div className="mt-4 h-12 w-full flex items-end gap-1">
              <div className="flex-1 bg-primary/20 rounded-t-sm h-1/2"></div>
              <div className="flex-1 bg-primary/20 rounded-t-sm h-3/4"></div>
              <div className="flex-1 bg-primary/30 rounded-t-sm h-2/3"></div>
              <div className="flex-1 bg-primary/40 rounded-t-sm h-full"></div>
              <div className="flex-1 bg-primary rounded-t-sm h-4/5"></div>
            </div>
          </motion.div>

          {/* Monthly Revenue */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card p-6 rounded-xl relative overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all card-glow">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <Wallet className="text-primary" size={48} />
            </div>
            <p className="text-slate-500 font-medium text-sm">Monthly Revenue (MRR)</p>
            <div className="flex items-end gap-3 mt-2">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">$84.2k</h3>
              <span className="text-green-500 text-sm font-bold flex items-center mb-1">
                <TrendingUp size={16} className="mr-1" /> 8.4%
              </span>
            </div>
            <div className="mt-4 h-12 w-full flex items-center">
              <div className="w-full bg-primary/10 h-1.5 rounded-full">
                <div className="bg-primary h-full w-[84%] rounded-full relative">
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-white border-2 border-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Retention Rate */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card p-6 rounded-xl relative overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all card-glow">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <Star className="text-primary" size={48} />
            </div>
            <p className="text-slate-500 font-medium text-sm">Retention Rate</p>
            <div className="flex items-end gap-3 mt-2">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">96.2%</h3>
              <span className="text-slate-400 text-sm font-medium mb-1">vs 94.8% last year</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>90%</span>
              <span>95%</span>
              <span className="text-primary">100%</span>
            </div>
          </motion.div>

          {/* Trial Conversion */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card p-6 rounded-xl relative overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all card-glow">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <CheckCircle className="text-primary" size={48} />
            </div>
            <p className="text-slate-500 font-medium text-sm">Trial Conversion</p>
            <div className="flex items-end gap-3 mt-2">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">42.5%</h3>
              <span className="text-red-500 text-sm font-bold flex items-center mb-1">
                <TrendingDown size={16} className="mr-1" /> 2%
              </span>
            </div>
            <div className="mt-4 h-12 w-full flex items-end gap-1">
              <div className="flex-1 bg-slate-200 rounded-t-sm h-full"></div>
              <div className="flex-1 bg-slate-200 rounded-t-sm h-4/5"></div>
              <div className="flex-1 bg-slate-200 rounded-t-sm h-3/4"></div>
              <div className="flex-1 bg-slate-200 rounded-t-sm h-1/2"></div>
              <div className="flex-1 bg-slate-400 rounded-t-sm h-1/3"></div>
            </div>
          </motion.div>
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enrollment Growth Chart */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-white dark:bg-slate-900 glass-card rounded-xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm card-glow">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Enrollment Growth</h4>
                <p className="text-sm text-slate-500">Student registration trends by instrument</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Strings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary/30"></span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Piano</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 w-full" onMouseLeave={() => setHoveredData(null)}>
              {/* Dynamic Line Chart SVG */}
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
                <defs>
                  <linearGradient id="gradientLine" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(239, 96, 52, 0.4)" stopOpacity="1"></stop>
                    <stop offset="100%" stopColor="rgba(239, 96, 52, 0)" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>

                {/* Area (Strings) */}
                <path d={generateChartPath(stringsPoints, true)} fill="url(#gradientLine)"></path>

                {/* Line (Strings) */}
                <path d={generateChartPath(stringsPoints)} fill="none" stroke="#ef6034" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>

                {/* Secondary Line (Piano) */}
                <path d={generateChartPath(pianoPoints)} fill="none" stroke="rgba(239, 96, 52, 0.3)" strokeDasharray="5,5" strokeWidth="2"></path>

                {/* Interactive Dots */}
                {stringsPoints.map((point, i) => (
                  <g key={i} onMouseEnter={() => setHoveredData(point)}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      className="fill-primary stroke-white stroke-2 cursor-pointer transition-all hover:r-8 hover:stroke-4 opacity-0 hover:opacity-100"
                    />
                    {/* Invisible Hit Area */}
                    <circle cx={point.x} cy={point.y} r="20" fill="transparent" className="cursor-pointer" />
                  </g>
                ))}
              </svg>

              {/* Tooltip */}
              {hoveredData && (
                <div
                  className="absolute bg-slate-900 text-white text-xs rounded-lg p-3 shadow-xl transform -translate-x-1/2 -translate-y-full pointer-events-none z-10"
                  style={{ left: `${(enrollmentData.findIndex(d => d.label === hoveredData.label) / (enrollmentData.length - 1)) * 100}%`, top: `${hoveredData.y - 10}px` }} // Approximate positioning
                >
                  <p className="font-bold mb-1">{hoveredData.label}</p>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Strings: {hoveredData.strings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                    <span>Piano: {hoveredData.piano}</span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-slate-900 transform -translate-x-1/2 rotate-45"></div>
                </div>
              )}

              {/* X Axis Labels */}
              <div className="flex justify-between mt-4 text-xs font-medium text-slate-400">
                {enrollmentData.filter((_, i) => i % 2 === 0).map((d, i) => (
                  <span key={i}>{d.label}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Popular Programs */}
          <motion.div variants={itemVariants} className="glass-card rounded-xl p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm card-glow">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Popular Programs</h4>
            <div className="space-y-6">
              {[
                { name: "Jazz Piano", slots: "88/100", pc: "88%", color: "bg-primary" },
                { name: "Classical Violin", slots: "64/80", pc: "80%", color: "bg-primary" },
                { name: "Vocal Training", slots: "45/50", pc: "90%", color: "bg-primary" },
                { name: "Cello Studio", slots: "22/30", pc: "73%", color: "bg-primary" },
                { name: "Digital Composition", slots: "12/40", pc: "30%", color: "bg-primary/40" },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">{item.name}</span>
                    <span className="text-slate-500">{item.slots} slots</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: item.pc }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-lg border border-primary/20 text-primary font-bold text-sm hover:bg-primary/5 transition-all">View Full Catalog</button>
          </motion.div>

          {/* Heatmap Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-white dark:bg-slate-900 glass-card rounded-xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm card-glow">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Peak Booking Hours</h4>
                <p className="text-sm text-slate-500">Studio utilization across the week</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400">LOW</span>
                <div className="flex gap-0.5">
                  <div className="w-4 h-4 rounded bg-primary/5"></div>
                  <div className="w-4 h-4 rounded bg-primary/20"></div>
                  <div className="w-4 h-4 rounded bg-primary/50"></div>
                  <div className="w-4 h-4 rounded bg-primary"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400">HIGH</span>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-2">
              <div className="h-8"></div>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-[10px] font-bold text-slate-400 text-center uppercase">{day}</div>
              ))}
              {/* Row 9AM */}
              <div className="text-[10px] font-bold text-slate-400 flex items-center">09:00</div>
              <div className="h-8 bg-primary/5 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/5 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/5 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/20 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/5 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/50 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/20 rounded hover:scale-110 transition-transform"></div>
              {/* Row 12PM */}
              <div className="text-[10px] font-bold text-slate-400 flex items-center">12:00</div>
              <div className="h-8 bg-primary/20 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/20 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/50 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/50 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/20 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/50 rounded hover:scale-110 transition-transform"></div>
              {/* Row 3PM */}
              <div className="text-[10px] font-bold text-slate-400 flex items-center">15:00</div>
              <div className="h-8 bg-primary/50 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/50 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/50 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              {/* Row 6PM */}
              <div className="text-[10px] font-bold text-slate-400 flex items-center">18:00</div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/50 rounded hover:scale-110 transition-transform"></div>
              <div className="h-8 bg-primary/20 rounded hover:scale-110 transition-transform"></div>
            </div>
          </motion.div>

          {/* Revenue Bar Chart (Bento Small) */}
          <motion.div variants={itemVariants} className="glass-card rounded-xl p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm card-glow">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Revenue Streams</h4>
            <p className="text-sm text-slate-500 mb-8">Quarterly distribution</p>
            <div className="h-48 flex items-end justify-between gap-2 px-2">
              {[
                { t: '60%', b: '25%', m: '15%' },
                { t: '55%', b: '30%', m: '15%' },
                { t: '70%', b: '20%', m: '10%' },
                { t: '65%', b: '22%', m: '13%' }
              ].map((h, i) => (
                <div key={i} className="flex-1 space-y-1 group cursor-pointer hover:scale-105 transition-transform flex flex-col justify-end h-full">
                  <div className="w-full bg-primary rounded-t-sm group-hover:bg-primary/90 transition-colors" style={{ height: h.t }} title="Tuition"></div>
                  <div className="w-full bg-primary/50 group-hover:bg-primary/60 transition-colors" style={{ height: h.b }} title="Materials"></div>
                  <div className="w-full bg-primary/20 rounded-b-sm group-hover:bg-primary/30 transition-colors" style={{ height: h.m }} title="Merchandise"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 text-center uppercase">
              <span className="flex-1">Q1</span>
              <span className="flex-1">Q2</span>
              <span className="flex-1">Q3</span>
              <span className="flex-1">Q4</span>
            </div>
            <div className="mt-8 flex gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Tuition</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Merch</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Geographic Data & Additional Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <motion.div variants={itemVariants} className="lg:col-span-3 bg-white dark:bg-slate-900 glass-card rounded-xl p-8 overflow-hidden relative min-h-[400px] border border-slate-100 dark:border-slate-800 shadow-sm card-glow">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img alt="Montreal Map" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbJ_gwWY6kKpYZCTkoGgSMLEuZ9bPksQCFbHyu8XdWw3Gsk3InwXMBDirPnsHMkfDDP0f2puB19GhIqedBQ56BVp5p3qVOp3w06wfJXSSt9vvxW44razh9GOmJ58nxf-lbtY4KMH9zm0P0m-aVak6xT-M_PXRHHHxq0cizse8Q_M1DSCvvZhi7RbSrW12EKDwmlVwRt_KyKt_Lv2zIwPpFSKpyr-jsrzRR-6C6uxYjZnyuHRbsxQYR4VGfSiT0sKnJa-zNGZQUx21w" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 h-full">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Neighborhood Reach</h4>
                <p className="text-slate-500 mb-8 max-w-sm">Student concentration mapping across Montreal campuses.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/80 dark:bg-slate-800/80 p-3 rounded-lg border border-primary/10 shadow-sm w-fit backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Le Plateau-Mont-Royal</span>
                    <span className="text-primary font-bold">428 students</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/80 dark:bg-slate-800/80 p-3 rounded-lg border border-primary/10 shadow-sm w-fit backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Westmount</span>
                    <span className="text-primary font-bold">312 students</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/80 dark:bg-slate-800/80 p-3 rounded-lg border border-primary/10 shadow-sm w-fit backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Mile End</span>
                    <span className="text-primary font-bold">194 students</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary p-8 rounded-xl text-white shadow-xl shadow-primary/20 flex flex-col justify-center max-w-xs ml-auto">
                <MapPin size={48} className="mb-4" />
                <h5 className="text-xl font-bold mb-2">New Campus Opening</h5>
                <p className="text-white/80 text-sm mb-6">Predictive analytics suggest Saint-Henri as the next high-potential location based on current inquiries.</p>
                <button className="bg-white text-primary font-bold py-2.5 rounded-lg text-sm hover:bg-slate-50 transition-colors">See Expansion Data</button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card rounded-xl p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden relative card-glow">
            <div className="absolute -right-8 -bottom-8 opacity-5">
              <Award size={160} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Staff Performance</h4>
              <div className="flex items-center gap-4 mb-6">
                <img alt="Teacher Profile" className="w-12 h-12 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC52XPxn0ZCE6h5ZOKP7m1MV0_lyiAY2WdLkeA10UWVIXTiOAbVZmuDP3FT7901hrHQLPeS-XVz7eyTNiOyRMiQp1fB54mSOfkI9Aul_WlkORVmRtMgLnlcaA2M_oM7U6xuPqdMslYy5ge1pGLpklfqODSOdm10BElGrWQPdnjDPLIXK6eOJNzxkR1AU7Sx-HFgrX3v1OgRsprLVy9edsVdw1hreLYGFbrU2PRe0WZl5dQtBnWBZS7SA4GF7n4EhtT2-v4qNB9BKJE-" />
                <div>
                  <p className="font-bold text-slate-800 dark:text-white leading-tight">Prof. Jean-Luc</p>
                  <p className="text-xs text-slate-500">Lead Violinist</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 italic">"Maintaining 98% student retention for 3 consecutive quarters."</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400">
                <span>Course Rating</span>
                <span className="text-primary">4.9/5.0</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400">
                <span>Attendance</span>
                <span className="text-primary">99.2%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;