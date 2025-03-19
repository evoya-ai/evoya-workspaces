
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				custom: {
					darkBlue: '#2B3972',   // Dunkelblau
					orange: '#EC961E',     // Orange
					darkGray: '#444444',   // Dunkelgrau
					white: '#ffffff',      // Weiß
					gray: '#666666',       // Grau
				},
				evoya: {
					blue: '#2B3972',       // Ersetzt durch Dunkelblau
					navy: '#2B3972',       // Angepasst an Dunkelblau
					lightBlue: '#5B6CAD',  // Hellere Version von Dunkelblau
					teal: '#5BC9BF',
					green: '#228B22',
					lightGreen: '#48D45F',
					orange: '#EC961E',     // Ersetzt durch Orange
					yellow: '#FBBF24',
					gray: '#666666',       // Ersetzt durch Grau
					lightGray: '#F3F4F6',
					darkGray: '#222222'    // Dunkler für besseren Kontrast
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			textShadow: {
				sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
				DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.3)',
				lg: '0 8px 16px rgba(0, 0, 0, 0.3)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				scale: {
					'0%': {
						transform: 'scale(0.95)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.7s ease-out forwards',
				'fade-down': 'fade-down 0.7s ease-out forwards',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'scale': 'scale 0.3s ease-out forwards',
			},
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],      // Geändert zu DM Sans
				serif: ['Merriweather', 'serif'],
				manrope: ['Manrope', 'sans-serif'],   // Neu für Buttons und Überschriften
			},
			backdropBlur: {
				xs: '2px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')",
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow': {
					textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
				},
				'.text-shadow-sm': {
					textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
				},
				'.text-shadow-lg': {
					textShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
				},
				'.text-shadow-none': {
					textShadow: 'none',
				},
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
