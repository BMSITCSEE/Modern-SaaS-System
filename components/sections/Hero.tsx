"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LoadingButton } from "@/components/ui/loading-button"
import { GlassBox } from "@/components/shared/GlassBox"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"
import { ParticlesBackground } from "@/components/shared/ParticlesBackground"
import { ArrowDown, Sparkles, Zap, Brain, Play, CheckCircle } from "lucide-react"
import { showToast } from "@/components/ui/toast"
import { triggerConfetti } from "@/components/effects/Confetti"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export function Hero() {
  const [isStartingTrial, setIsStartingTrial] = useState(false)

  const handleStartTrial = async () => {
    setIsStartingTrial(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    showToast({ 
      message: "Welcome to ADmyBRAND AI! Your free trial has started.", 
      type: "success" 
    })
    
    triggerConfetti()
    setIsStartingTrial(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Particles Background */}
      <ParticlesBackground />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-blue-600/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-48 -left-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 mb-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">AI-Powered Marketing Suite</span>
            </motion.div>
            
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Transform Your
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Brand with
              </motion.span>{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                AI Magic
              </motion.span>
            </h1>
            
            {/* Description */}
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Revolutionize your marketing strategy with ADmyBRAND AI Suite. 
              Create compelling content, analyze performance, and scale your brand 
              presence—all powered by cutting-edge artificial intelligence.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <LoadingButton 
                size="lg" 
                className="group relative overflow-hidden"
                onClick={handleStartTrial}
                loading={isStartingTrial}
              >
                <span className="relative z-10">Start Free Trial</span>
                <Zap className="ml-2 h-4 w-4 relative z-10 group-hover:animate-pulse" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </LoadingButton>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="group"
                  >
                    <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogTitle className="text-xl font-semibold mb-4">Product Demo</DialogTitle>
                  <DialogDescription className="sr-only">
                    Watch a demo of ADmyBRAND AI Suite
                  </DialogDescription>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Demo video coming soon!</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Stats with Animated Counters */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center sm:text-left"
              >
                <h4 className="text-3xl font-bold text-primary">
                  <AnimatedCounter value={10} suffix="K+" />
                </h4>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center sm:text-left"
              >
                <h4 className="text-3xl font-bold text-primary">
                  <AnimatedCounter value={95} suffix="%" />
                </h4>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center sm:text-left"
              >
                <h4 className="text-3xl font-bold text-primary">24/7</h4>
                <p className="text-sm text-muted-foreground">AI Support</p>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex items-center gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <GlassBox className="p-8" animate>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                    }}
                  >
                    <Brain className="h-32 w-32 text-primary" />
                  </motion.div>
                </div>
              </GlassBox>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
  
          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="cursor-pointer"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }