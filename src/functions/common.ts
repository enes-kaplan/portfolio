export const scrollIntoView = (id: string) => {
	const el = document.getElementById(id)
	el?.scrollIntoView({ behavior: 'smooth' })
}
