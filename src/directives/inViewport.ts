export const inViewport = {
  mounted(el: HTMLElement, bindings: any, vnode: any) {
    const observer = new IntersectionObserver(
      (entries) => { 
        if (entries.length) {
          const first = entries[0]
          if (first.isIntersecting) {
            vnode.el.dispatchEvent(new CustomEvent('intersects'))
          }
        }
      },
      {
        root: bindings.value,
      }
    )
    observer.observe(el)
  },
}