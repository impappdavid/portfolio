import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Graphik',
					'sans-serif'
				],
				serif: [
					'Merriweather',
					'serif'
				],
				body: ['Mulish']

			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				tooltipIn: {
					'0%': { opacity: '0', transform: 'translateY(6px) scale(0.98)' },
					'60%': { opacity: '0.6', transform: 'translateY(-4px) scale(1.001)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
				tooltipOut: {
					'0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
					'100%': { opacity: '0', transform: 'translateY(4px) scale(0.985)' },
				},
				// Side-specific variants for better directionality
				tooltipInTop: {
					'0%': { opacity: '0', transform: 'translateY(6px) scale(0.98)' },
					'60%': { opacity: '1', transform: 'translateY(-1px) scale(1.001)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
				tooltipInBottom: {
					'0%': { opacity: '0', transform: 'translateY(-6px) scale(0.98)' },
					'60%': { opacity: '1', transform: 'translateY(1px) scale(1.001)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
				tooltipInLeft: {
					'0%': { opacity: '0', transform: 'translateX(6px) scale(0.98)' },
					'60%': { opacity: '1', transform: 'translateX(-1px) scale(1.001)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
				},
				tooltipInRight: {
					'0%': { opacity: '0', transform: 'translateX(-6px) scale(0.98)' },
					'60%': { opacity: '1', transform: 'translateX(1px) scale(1.001)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'tooltip-in': 'tooltipIn 0.3s cubic-bezier(.22,1,.36,1)',
				'tooltip-out': 'tooltipOut 0.3s cubic-bezier(.22,1,.36,1)',
				'tooltip-in-top': 'tooltipInTop 0.3s cubic-bezier(.22,1,.36,1)',
				'tooltip-in-bottom': 'tooltipInBottom 1s cubic-bezier(.22,1,.36,1)',
				'tooltip-in-left': 'tooltipInLeft 1s cubic-bezier(.22,1,.36,1)',
				'tooltip-in-right': 'tooltipInRight 1s cubic-bezier(.22,1,.36,1)',
			}
		}
	},

	plugins: [],
}
export default config
