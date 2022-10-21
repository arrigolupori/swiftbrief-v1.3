import { useEffect } from 'react'

export const useExternalUrls = () =>
	useEffect(() => {
		for (
			let links = document.links, i = 0, a: HTMLAnchorElement | HTMLAreaElement;
			(a = links[i]);
			i++
		) {
			if (a.host !== location.host) {
				a.target = '_blank'
				a.rel = 'noreferrer'
			}
		}
	}, [])
