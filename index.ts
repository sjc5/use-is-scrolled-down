import { useEffect, useRef, useState } from "react"

export const useIsScrolledDown = () => {
  const [is_scrolled_down, set_is_scrolled_down] = useState(false)
  const is_scrolled_down_ref = useRef(null)

  useEffect(() => {
    const el = is_scrolled_down_ref.current
    if (el) {
      const observer = new IntersectionObserver(
        ([entry]) => set_is_scrolled_down(entry?.intersectionRatio === 0),
        { threshold: [1] }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }
    return () => {}
  }, [])

  return { is_scrolled_down, is_scrolled_down_ref }
}
