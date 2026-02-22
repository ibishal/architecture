/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import SystemOverview from './components/animations/SystemOverview';
import KYCOnboarding from './components/animations/KYCOnboarding';
import DepositToEscrow from './components/animations/DepositToEscrow';
import OrderSubmission from './components/animations/OrderSubmission';
import OrderMatching from './components/animations/OrderMatching';
import ZKProofGeneration from './components/animations/ZKProofGeneration';
import OnChainVerification from './components/animations/OnChainVerification';
import AtomicSettlement from './components/animations/AtomicSettlement';
import FullFlowAnimation from './components/animations/FullFlowAnimation';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-gray-900 font-sans selection:bg-gray-200">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
            <span className="font-semibold text-lg tracking-tight">Acme Corp</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="hover:text-gray-900 transition-colors">API</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Doc</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Log In</button>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Get a Demo</button>
            <button className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
              Get started <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-500 tracking-wide shadow-sm">
            Now tracking 8 AI models including GPT-4o & Claude
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight leading-[1.1]">
            Own the <span className="italic text-gray-600">private</span> <br /> search experience
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Understand how zero-knowledge proofs and atomic settlements secure your trades. Track visibility, sentiment, and execution across the protocol.
          </p>
          <div className="flex items-center justify-center gap-4 mb-20">
            <button className="bg-[#2a2d3e] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1f212e] transition-colors flex items-center gap-2 shadow-lg">
              Get Started <span className="text-gray-400">›</span>
            </button>
            <button className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors shadow-sm">
              View Demo
            </button>
          </div>

          {/* Hero Animation */}
          <div className="w-full max-w-5xl mx-auto aspect-video relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-200 bg-white">
            <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
            <div className="relative z-10 w-full h-full">
              <SystemOverview />
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="border-y border-gray-200 bg-[#fafafa] py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-40 grayscale">
            <div className="text-2xl font-serif font-bold tracking-tight">rebase</div>
            <div className="text-3xl font-serif italic">Ford</div>
            <div className="text-xl font-sans font-bold tracking-widest">LEXICON</div>
            <div className="text-2xl font-sans font-medium tracking-tight">_zapier</div>
            <div className="text-2xl font-serif">Ogilvy</div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-32 px-6 max-w-7xl mx-auto bg-grid-pattern-light">
          <div className="mb-20 text-center">
            <div className="inline-block mb-4 px-3 py-1 rounded-sm border border-gray-200 bg-white text-xs font-medium text-gray-500 tracking-wide">
              Command Center
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 tracking-tight">
              Eight steps to <span className="italic text-gray-600">secure trading</span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <button className="bg-[#2a2d3e] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#1f212e] transition-colors flex items-center gap-2 text-sm shadow-md">
                Get Started <span className="text-gray-400">›</span>
              </button>
              <button className="bg-white border border-gray-200 text-gray-900 px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors text-sm shadow-sm">
                View Demo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <StepCard step="1" title="KYC Onboarding" description="Institutional verification and whitelist registry." Animation={KYCOnboarding} />
            <StepCard step="2" title="Deposit to Escrow" description="Secure token transfer to settlement escrow." Animation={DepositToEscrow} />
            <StepCard step="3" title="Order Submission" description="Hidden commitment creation via Poseidon Hash." Animation={OrderSubmission} />
            <StepCard step="4" title="Order Matching" description="Dark pool matching engine processing encrypted orders." Animation={OrderMatching} />
            <StepCard step="5" title="ZK Proof Generation" description="Groth16 proof generation from private inputs." Animation={ZKProofGeneration} />
            <StepCard step="6" title="On-Chain Verification" description="X-Ray Protocol verification on Stellar." Animation={OnChainVerification} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StepCard step="7" title="Atomic Settlement" description="Simultaneous cross-transfer of assets and payments." Animation={AtomicSettlement} />
            <div className="group border border-gray-200 rounded-xl bg-white overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center p-12 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to deploy?</h3>
              <p className="text-gray-500 mb-6 max-w-sm">Integrate our privacy-preserving architecture into your trading infrastructure today.</p>
              <button className="text-sm font-medium bg-gray-900 text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition-colors">
                Read the Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Full Flow Section */}
        <section className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-200">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
              The Complete <span className="italic text-gray-600">Lifecycle</span>
            </h2>
            <p className="text-lg text-gray-500">
              End-to-end privacy-preserving trade execution flow.
            </p>
          </div>
          <div className="relative bg-white border border-gray-200 rounded-2xl p-2 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            <div className="relative z-10 w-full h-[800px] bg-gray-50/50 rounded-xl border border-gray-100 p-8 overflow-hidden">
              <FullFlowAnimation />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StepCard({ step, title, description, Animation }: { step: string, title: string, description: string, Animation: React.FC }) {
  return (
    <div className="group border border-gray-200 rounded-xl bg-white overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="p-6 border-b border-gray-100 flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 text-[10px] font-bold text-gray-500">
            {step}
          </span>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
      <div className="aspect-video relative bg-gray-50/30 border-t border-gray-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative z-10 w-full h-full p-6">
          <Animation />
        </div>
      </div>
    </div>
  );
}
