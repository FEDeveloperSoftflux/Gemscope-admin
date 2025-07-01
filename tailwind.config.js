/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Schibsted Grotesk"', 'sans-serif'],
        'secondary': ['Lato', 'sans-serif'],
      },
      colors: {
        // Background Colors
        'bg-dark': '#0D0D0D',
        'panel-bg': '#1A1A1A',
        'card-bg': '#1E1E1E',
        'card-alt-bg': '#2A2A2A',
        
        // Text Colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-muted': '#666666',
        
        // Accent Colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',
      },
      backgroundImage: {
        // Button and Primary Gradients
        'btn-primary': 'linear-gradient(99.45deg, #6E09D3 -14.89%, #DDCBF0 21.92%, #F2F2F2 47.17%, #F0DBED 71.06%, #FF6CFB 115.33%)',
        
        // Plan Gradients
        'plan-free': 'linear-gradient(360deg, #F5DBE0 -21.35%, #C32388 104.32%)',
        'plan-pro': 'linear-gradient(180deg, #7F00CE -4.81%, #EED4FF 125.36%)',
        'plan-enterprise': 'linear-gradient(180.57deg, #0808FF -4.69%, #C9C9FF 130.44%)',
        'plan-lifetime': 'linear-gradient(182.23deg, #C4A502 34.28%, #FBFFCC 106.48%)',
        
        // Dashboard Card Gradients
        'stats-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
        'earnings-gradient': 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
        'users-gradient': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        
        // Chart Gradients
        'chart-line': 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)',
        'chart-area': 'linear-gradient(180deg, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 100%)',
      },
      fontSize: {
        'hero': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'stat-primary': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'stat-secondary': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      animation: {
        'loading': 'loading 1.5s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'elevated': '0 12px 40px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
