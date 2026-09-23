"use client";

import { useState } from 'react';
import { Button } from './Button';

export function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to submit the form');
      }
      
      setStatus('success');
      e.target.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again later.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-success/10 border border-success/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
        </p>
        <Button onClick={() => setStatus('idle')} variant="secondary">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-text-primary">
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white"
            placeholder="John Doe"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-text-primary">
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="projectType" className="block text-sm font-medium text-text-primary">
            Project Type <span className="text-accent">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white appearance-none"
          >
            <option value="" disabled selected>Select an option</option>
            <option value="fullstack">Full-Stack Application</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend / API Development</option>
            <option value="database">Database Architecture</option>
            <option value="freelance">Freelance Contract</option>
            <option value="employment">Full-time Employment</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="budget" className="block text-sm font-medium text-text-primary">
            Budget Range <span className="text-text-secondary font-normal">(Optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white appearance-none"
          >
            <option value="" disabled selected>Select a range</option>
            <option value="<1k">Less than $1,000</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value=">10k">More than $10,000</option>
            <option value="hourly">Hourly Rate</option>
            <option value="salary">Salary (Employment)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-text-primary">
          Project Details <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white resize-y"
          placeholder="Tell me about your project, goals, and any specific technical requirements..."
        ></textarea>
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {errorMessage}
        </div>
      )}

      <Button 
        type="submit" 
        className="w-full md:w-auto"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
