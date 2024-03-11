'use client'
 
export default function myImageLoader({ src, width, quality } : any) {
    const url = window.location.href;
  return `${url}${src}?w=${width}&q=${quality || 75}`
}