import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import '../styles/Background3D.css'

const Background3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // 3D零件配置
  const parts = [
    // 齒輪
    { type: 'gear', size: 80, x: 15, y: 20, rotateSpeed: 2, depth: 100 },
    { type: 'gear', size: 120, x: 85, y: 70, rotateSpeed: -1.5, depth: 200 },
    { type: 'gear', size: 60, x: 75, y: 15, rotateSpeed: 3, depth: 50 },
    
    // 立方體
    { type: 'cube', size: 100, x: 10, y: 60, rotateSpeed: 1, depth: 150 },
    { type: 'cube', size: 70, x: 90, y: 35, rotateSpeed: -2, depth: 300 },
    
    // 球體
    { type: 'sphere', size: 90, x: 45, y: 80, rotateSpeed: 0.8, depth: 250 },
    { type: 'sphere', size: 110, x: 25, y: 45, rotateSpeed: -1.2, depth: 350 },
    
    // 圓環
    { type: 'torus', size: 85, x: 65, y: 55, rotateSpeed: 1.8, depth: 180 },
    { type: 'torus', size: 65, x: 35, y: 25, rotateSpeed: -2.5, depth: 120 },
    
    // 三角錐
    { type: 'pyramid', size: 75, x: 80, y: 85, rotateSpeed: 1.5, depth: 80 },
    { type: 'pyramid', size: 95, x: 55, y: 10, rotateSpeed: -1, depth: 400 }
  ]

  const renderPart = (part, index) => {
    const baseStyle = {
      left: `${part.x}%`,
      top: `${part.y}%`,
      transform: `translateZ(${part.depth}px) translate(-50%, -50%)`
    }

    const motionProps = {
      animate: {
        rotateX: mousePosition.y * 0.5,
        rotateY: mousePosition.x * 0.5,
        rotateZ: 360
      },
      transition: {
        rotateZ: {
          duration: 10 / Math.abs(part.rotateSpeed),
          repeat: Infinity,
          ease: "linear"
        },
        rotateX: { duration: 0.5 },
        rotateY: { duration: 0.5 }
      }
    }

    switch (part.type) {
      case 'gear':
        return (
          <motion.div
            key={index}
            className="part-3d gear-3d"
            style={{ ...baseStyle, width: part.size, height: part.size }}
            {...motionProps}
          >
            <div className="gear-inner">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="gear-tooth" style={{ 
                  transform: `rotate(${i * 45}deg) translateY(-${part.size * 0.4}px)` 
                }} />
              ))}
            </div>
          </motion.div>
        )

      case 'cube':
        return (
          <motion.div
            key={index}
            className="part-3d cube-3d"
            style={{ ...baseStyle, width: part.size, height: part.size }}
            {...motionProps}
          >
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </motion.div>
        )

      case 'sphere':
        return (
          <motion.div
            key={index}
            className="part-3d sphere-3d"
            style={{ ...baseStyle, width: part.size, height: part.size }}
            {...motionProps}
          >
            <div className="sphere-inner">
              <div className="sphere-highlight"></div>
              <div className="sphere-shadow"></div>
            </div>
          </motion.div>
        )

      case 'torus':
        return (
          <motion.div
            key={index}
            className="part-3d torus-3d"
            style={{ ...baseStyle, width: part.size, height: part.size }}
            {...motionProps}
          >
            <div className="torus-outer">
              <div className="torus-inner"></div>
            </div>
          </motion.div>
        )

      case 'pyramid':
        return (
          <motion.div
            key={index}
            className="part-3d pyramid-3d"
            style={{ ...baseStyle, width: part.size, height: part.size }}
            {...motionProps}
          >
            <div className="pyramid-face front"></div>
            <div className="pyramid-face back"></div>
            <div className="pyramid-face left"></div>
            <div className="pyramid-face right"></div>
            <div className="pyramid-base"></div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="background-3d">
      <div className="scene-3d" style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
      }}>
        {parts.map((part, index) => renderPart(part, index))}
      </div>
      
      {/* 環境光效 */}
      <div className="ambient-light light-1"></div>
      <div className="ambient-light light-2"></div>
      <div className="ambient-light light-3"></div>
    </div>
  )
}

export default Background3D
