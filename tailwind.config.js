/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Complete responsive breakpoint system starting from 375px
    screens: {
      'xs': '375px',     // Extra small devices (small phones)
      'sm': '480px',     // Small devices (adjusted smaller)
      'md': '768px',     // Medium devices (tablets)
      'lg': '1024px',    // Large devices (laptops)
      'xl': '1280px',    // Extra large devices (desktops)
      '2xl': '1536px',   // 2X large devices (large desktops)
      '3xl': '1920px',   // 3X large devices (FHD monitors)
      '4xl': '2560px',   // 4X large devices (QHD/4K monitors)
      '5xl': '3440px',   // 5X large devices (ultra-wide monitors)
      '6xl': '3840px',   // 6X large devices (4K ultra-wide)
      '7xl': '5120px',   // 7X large devices (5K displays)
      // Custom utility breakpoints
      'portrait': {'raw': '(orientation: portrait)'},
      'landscape': {'raw': '(orientation: landscape)'},
      'tall': {'raw': '(min-height: 800px)'},
      'short': {'raw': '(max-height: 600px)'},
      'touch': {'raw': '(hover: none)'},
      'mouse': {'raw': '(hover: hover)'},
    },
    extend: {
      // Custom container widths for precise responsive control
      width: {
        'xs': '20rem',    // 320px
        'sm': '24rem',    // 384px
        'md': '28rem',    // 448px
        'lg': '32rem',    // 512px
        'xl': '36rem',    // 576px
        '2xl': '42rem',   // 672px
        '3xl': '48rem',   // 768px
        '4xl': '56rem',   // 896px
        '5xl': '64rem',   // 1024px
        '6xl': '72rem',   // 1152px
        '7xl': '80rem',   // 1280px
      },
      // Maximum width utilities
      maxWidth: {
        'xs': '20rem',    // 320px
        'sm': '24rem',    // 384px
        'md': '28rem',    // 448px
        'lg': '32rem',    // 512px
        'xl': '36rem',    // 576px
        '2xl': '42rem',   // 672px
        '3xl': '48rem',   // 768px
        '4xl': '56rem',   // 896px
        '5xl': '64rem',   // 1024px
        '6xl': '72rem',   // 1152px
        '7xl': '80rem',   // 1280px
      },
      // Minimum width utilities
      minWidth: {
        'xs': '20rem',    // 320px
        'sm': '24rem',    // 384px
        'md': '28rem',    // 448px
        'lg': '32rem',    // 512px
        'xl': '36rem',    // 576px
        '2xl': '42rem',   // 672px
        '3xl': '48rem',   // 768px
        '4xl': '56rem',   // 896px
        '5xl': '64rem',   // 1024px
        '6xl': '72rem',   // 1152px
        '7xl': '80rem',   // 1280px
      },
      // Enhanced spacing system
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
        '54': '13.5rem',  // 216px
        '58': '14.5rem',  // 232px
        '62': '15.5rem',  // 248px
        '66': '16.5rem',  // 264px
        '70': '17.5rem',  // 280px
        '74': '18.5rem',  // 296px
        '78': '19.5rem',  // 312px
        '82': '20.5rem',  // 328px
        '86': '21.5rem',  // 344px
        '90': '22.5rem',  // 360px
        '94': '23.5rem',  // 376px
        '98': '24.5rem',  // 392px
      },
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
