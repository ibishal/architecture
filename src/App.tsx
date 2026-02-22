/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f111a] flex items-center justify-center p-8 font-sans">
      <div className="w-full max-w-5xl aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#131520]">
        {/* Subtle grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <svg viewBox="0 0 1000 600" className="w-full h-full relative z-10">
          <defs>
            {/* Gradients */}
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            
            <linearGradient id="pathGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
            </linearGradient>
            
            <linearGradient id="pathGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="pathGradDown" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" />
            </linearGradient>

            {/* Glow Filters */}
            <filter id="glowShield" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Isometric Building Symbol */}
            <g id="building">
              {/* Left Face */}
              <path d="M 0 40 L -40 20 L -40 -60 L 0 -40 Z" fill="#2a2d40" />
              {/* Right Face */}
              <path d="M 0 40 L 40 20 L 40 -60 L 0 -40 Z" fill="#1e2030" />
              {/* Top Face */}
              <path d="M 0 -40 L -40 -60 L 0 -80 L 40 -60 Z" fill="#3b3f58" />
              
              {/* Windows Left */}
              <path d="M -10 25 L -30 15 L -30 -50 L -10 -40 Z" fill="#8b5cf6" opacity="0.3" />
              <path d="M -15 20 L -25 15 L -25 -45 L -15 -35 Z" fill="#c084fc" opacity="0.6" />
              
              {/* Windows Right */}
              <path d="M 10 25 L 30 15 L 30 -50 L 10 -40 Z" fill="#3b82f6" opacity="0.3" />
              <path d="M 15 20 L 25 15 L 25 -45 L 15 -35 Z" fill="#60a5fa" opacity="0.6" />
            </g>

            {/* Isometric Ledger Symbol */}
            <g id="ledger">
              {/* Base Block */}
              <path d="M 0 30 L -60 0 L 0 -30 L 60 0 Z" fill="#10b981" opacity="0.2" />
              <path d="M -60 0 L 0 30 L 0 50 L -60 20 Z" fill="#059669" opacity="0.4" />
              <path d="M 60 0 L 0 30 L 0 50 L 60 20 Z" fill="#047857" opacity="0.6" />
              
              {/* Top Layer */}
              <path d="M 0 10 L -50 -15 L 0 -40 L 50 -15 Z" fill="#34d399" opacity="0.8" />
              <path d="M -50 -15 L 0 10 L 0 20 L -50 -5 Z" fill="#10b981" />
              <path d="M 50 -15 L 0 10 L 0 20 L 50 -5 Z" fill="#059669" />
              
              {/* Nodes/Dots on ledger */}
              <circle cx="0" cy="-15" r="4" fill="#fff" />
              <circle cx="-25" cy="-15" r="3" fill="#fff" opacity="0.7" />
              <circle cx="25" cy="-15" r="3" fill="#fff" opacity="0.7" />
              <path d="M -25 -15 L 0 -15 L 25 -15" stroke="#fff" strokeWidth="1" opacity="0.5" />
            </g>
          </defs>

          {/* Paths */}
          {/* Left Path (Buyer to Shield) */}
          <path 
            id="pathLeft"
            d="M 200 250 C 300 250, 350 250, 420 250" 
            fill="none" 
            stroke="url(#pathGradLeft)" 
            strokeWidth="4" 
            strokeDasharray="8 8"
          >
            <animate attributeName="stroke-dashoffset" from="32" to="0" dur="1s" repeatCount="indefinite" />
          </path>

          {/* Right Path (Seller to Shield) */}
          <path 
            id="pathRight"
            d="M 800 250 C 700 250, 650 250, 580 250" 
            fill="none" 
            stroke="url(#pathGradRight)" 
            strokeWidth="4" 
            strokeDasharray="8 8"
          >
            <animate attributeName="stroke-dashoffset" from="-32" to="0" dur="1s" repeatCount="indefinite" />
          </path>

          {/* Down Path (Shield to Ledger) */}
          <path 
            id="pathDown"
            d="M 500 350 L 500 450" 
            fill="none" 
            stroke="url(#pathGradDown)" 
            strokeWidth="4" 
            strokeDasharray="8 8"
          >
            <animate attributeName="stroke-dashoffset" from="32" to="0" dur="1s" repeatCount="indefinite" />
          </path>

          {/* Particles Left */}
          <circle r="4" fill="#c084fc" filter="url(#glowGreen)">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 200 250 C 300 250, 350 250, 420 250" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#e879f9" filter="url(#glowGreen)">
            <animateMotion dur="2s" begin="0.7s" repeatCount="indefinite" path="M 200 250 C 300 250, 350 250, 420 250" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="2s" begin="0.7s" repeatCount="indefinite" />
          </circle>

          {/* Particles Right */}
          <circle r="4" fill="#60a5fa" filter="url(#glowGreen)">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 800 250 C 700 250, 650 250, 580 250" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#93c5fd" filter="url(#glowGreen)">
            <animateMotion dur="2s" begin="1.1s" repeatCount="indefinite" path="M 800 250 C 700 250, 650 250, 580 250" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="2s" begin="1.1s" repeatCount="indefinite" />
          </circle>

          {/* Buyer Building */}
          <g transform="translate(150, 250)">
            <use href="#building" />
            <text x="0" y="70" fill="#c084fc" fontSize="18" fontWeight="600" textAnchor="middle" letterSpacing="2">BUYER</text>
            
            {/* Floating data bits */}
            <g opacity="0.6">
              <rect x="-20" y="-100" width="8" height="8" rx="2" fill="#c084fc">
                <animate attributeName="y" values="-100;-110;-100" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
              </rect>
              <rect x="10" y="-90" width="6" height="6" rx="1" fill="#e879f9">
                <animate attributeName="y" values="-90;-105;-90" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
              </rect>
            </g>
          </g>

          {/* Seller Building */}
          <g transform="translate(850, 250)">
            <use href="#building" />
            <text x="0" y="70" fill="#60a5fa" fontSize="18" fontWeight="600" textAnchor="middle" letterSpacing="2">SELLER</text>
            
            {/* Floating data bits */}
            <g opacity="0.6">
              <rect x="-15" y="-95" width="6" height="6" rx="1" fill="#60a5fa">
                <animate attributeName="y" values="-95;-110;-95" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.8s" repeatCount="indefinite" />
              </rect>
              <rect x="15" y="-105" width="8" height="8" rx="2" fill="#93c5fd">
                <animate attributeName="y" values="-105;-115;-105" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.2s" repeatCount="indefinite" />
              </rect>
            </g>
          </g>

          {/* Central Privacy Shield/Dome */}
          <g transform="translate(500, 250)">
            {/* Outer Dome */}
            <circle cx="0" cy="0" r="100" fill="url(#shieldGrad)" stroke="#8b5cf6" strokeWidth="2" filter="url(#glowShield)" opacity="0.8">
              <animate attributeName="r" values="98;102;98" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="4s" repeatCount="indefinite" />
            </circle>
            
            {/* Inner Ring */}
            <circle cx="0" cy="0" r="80" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.5">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="65" fill="none" stroke="#c084fc" strokeWidth="1" strokeDasharray="10 5" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="15s" repeatCount="indefinite" />
            </circle>

            {/* Gear Mechanism */}
            <g fill="#4b5563">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
              <path d="M -10 -35 L 10 -35 L 15 -25 L 25 -15 L 35 -10 L 35 10 L 25 15 L 15 25 L 10 35 L -10 35 L -15 25 L -25 15 L -35 10 L -35 -10 L -25 -15 L -15 -25 Z" />
              <circle cx="0" cy="0" r="20" fill="#1f2937" />
            </g>

            {/* Padlock */}
            <g transform="translate(0, 2)">
              <rect x="-12" y="-5" width="24" height="18" rx="3" fill="#a78bfa" />
              <path d="M -7 -5 L -7 -12 C -7 -16, 7 -16, 7 -12 L 7 -5" fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />
              <circle cx="0" cy="4" r="3" fill="#4c1d95" />
              <path d="M 0 4 L 0 9" stroke="#4c1d95" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>

          {/* Blockchain Ledger */}
          <g transform="translate(500, 480)">
            <use href="#ledger" />
            <text x="0" y="70" fill="#10b981" fontSize="16" fontWeight="600" textAnchor="middle" letterSpacing="2">SECURE LEDGER</text>
            
            {/* Glowing Checkmark */}
            <g filter="url(#glowGreen)">
              <path d="M -10 -25 L -2 -15 L 15 -35" fill="none" stroke="#34d399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="stroke-dasharray" values="0, 50; 50, 0; 50, 0" keyTimes="0; 0.3; 1" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.8; 1" dur="2s" repeatCount="indefinite" />
              </path>
            </g>
          </g>

          {/* Data Processing Nodes (Top) */}
          <g transform="translate(500, 100)">
            <text x="0" y="0" fill="#9ca3af" fontSize="14" fontWeight="500" textAnchor="middle" letterSpacing="3">ZERO-KNOWLEDGE PROOF</text>
            <path d="M -100 15 L 100 15" stroke="#4b5563" strokeWidth="1" strokeDasharray="2 4" />
            <circle cx="-100" cy="15" r="3" fill="#9ca3af" />
            <circle cx="0" cy="15" r="3" fill="#9ca3af" />
            <circle cx="100" cy="15" r="3" fill="#9ca3af" />
            
            {/* Scanning line */}
            <line x1="-100" y1="15" x2="-80" y2="15" stroke="#a78bfa" strokeWidth="2">
              <animate attributeName="x1" values="-100;80;-100" dur="4s" repeatCount="indefinite" />
              <animate attributeName="x2" values="-80;100;-80" dur="4s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>
      </div>
    </div>
  );
}
