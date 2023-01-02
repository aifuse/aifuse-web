export interface SocialMedia {
	name: string
	url: string
	icon: string
}

export const email = 'info@aifuse.com'
export const domain = 'https://aifuse.com'

export const socialMedia: SocialMedia[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/aifuse',
		icon: 'uit:github-alt'
	},
	{
		name: 'Instagram',
		url: '#',
		icon: 'mdi:instagram'
	},
	{
		name: 'Twitter',
		url: '#',
		icon: 'uit:twitter-alt'
	},
	{
		name: 'Linkedin',
		url: '#',
		icon: 'uit:linkedin-alt'
	},
	{
		name: 'Codepen',
		url: '#',
		icon: 'ph:codepen-logo'
	}
]

export default { email, socialMedia }