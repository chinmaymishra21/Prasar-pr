import { Suspense, lazy, useCallback } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className }) {
  const handleLoad = useCallback((splineApp) => {
    if (!splineApp) return
    // Remove the scene background so the canvas composites onto the hero bg
    if (splineApp.scene) {
      splineApp.scene.background = null
    }
    // Also zero out the renderer clear alpha if accessible
    const renderer = splineApp._renderer ?? splineApp.renderer
    if (renderer) {
      renderer.setClearAlpha(0)
      renderer.setClearColor(0x000000, 0)
    }
  }, [])

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="w-8 h-8 border-2 rounded-full animate-spin"
            style={{ borderColor: '#D48842', borderTopColor: 'transparent' }}
          />
        </div>
      }
    >
      <Spline
        scene={scene}
        onLoad={handleLoad}
        className={className}
        style={{ background: 'transparent' }}
      />
    </Suspense>
  )
}
