import { useState, useEffect } from 'react'
import { Terminal, Code, GitBranch, Zap, Moon, Sun, Play, Settings, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Tool {
  id: string
  name: string
  description: string
  icon: React.ComponentType<any>
  category: 'scaffolding' | 'git' | 'testing' | 'productivity'
  command: string
  status: 'available' | 'running' | 'completed' | 'error'
}

const tools: Tool[] = [
  {
    id: 'create-react-app',
    name: 'React App Scaffold',
    description: 'Create a modern React TypeScript application with best practices',
    icon: Code,
    category: 'scaffolding',
    command: 'devflow create react-app',
    status: 'available'
  },
  {
    id: 'git-flow',
    name: 'Git Flow Helper',
    description: 'Initialize git flow branching model and create feature branches',
    icon: GitBranch,
    category: 'git',
    command: 'devflow git init-flow',
    status: 'available'
  },
  {
    id: 'api-test',
    name: 'API Test Suite',
    description: 'Generate API tests and mock data for your endpoints',
    icon: Zap,
    category: 'testing',
    command: 'devflow test api',
    status: 'available'
  },
  {
    id: 'workflow-stats',
    name: 'Workflow Analytics',
    description: 'Track your development productivity and workflow metrics',
    icon: Settings,
    category: 'productivity',
    command: 'devflow stats',
    status: 'available'
  }
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const runTool = async (tool: Tool) => {
    setSelectedTool(tool)
    setIsRunning(true)
    setTerminalOutput([`$ ${tool.command}`, 'Initializing...'])
    
    // Simulate tool execution
    const steps = [
      'Setting up environment...',
      'Installing dependencies...',
      'Configuring project structure...',
      'Running initial setup...',
      `✅ ${tool.name} completed successfully!`
    ]
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setTerminalOutput(prev => [...prev, steps[i]])
    }
    
    setIsRunning(false)
  }

  const categoryColors = {
    scaffolding: 'bg-dev-500',
    git: 'bg-success-500',
    testing: 'bg-warning-500',
    productivity: 'bg-purple-500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-terminal-950 dark:to-terminal-900 transition-all duration-300">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-terminal-700 bg-white/80 dark:bg-terminal-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-dev-500 rounded-lg">
                <Terminal className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">DevFlow CLI</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Professional Developer Tools Suite</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-terminal-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-terminal-700 transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-dev-500 text-white rounded-lg hover:bg-dev-600 transition-colors">
                <BookOpen className="h-4 w-4" />
                <span>Docs</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tools Grid */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Available Tools</h2>
              <p className="text-slate-600 dark:text-slate-400">Automate your development workflow with these professional tools</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-terminal-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-terminal-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${categoryColors[tool.category]}`}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-terminal-700 text-slate-600 dark:text-slate-300 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{tool.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{tool.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <code className="text-xs bg-slate-100 dark:bg-terminal-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded font-mono">
                      {tool.command}
                    </code>
                    
                    <button
                      onClick={() => runTool(tool)}
                      disabled={isRunning}
                      className="flex items-center space-x-1 px-3 py-1.5 bg-dev-500 text-white text-sm rounded-lg hover:bg-dev-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Play className="h-3 w-3" />
                      <span>Run</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Terminal Output */}
          <div className="lg:col-span-1">
            <div className="bg-terminal-900 rounded-xl p-6 shadow-xl border border-terminal-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-terminal-300 text-sm font-mono">Terminal</span>
                </div>
                {selectedTool && (
                  <span className="text-xs text-terminal-400 bg-terminal-800 px-2 py-1 rounded">
                    {selectedTool.name}
                  </span>
                )}
              </div>
              
              <div className="font-mono text-sm space-y-1 min-h-[300px] max-h-[400px] overflow-y-auto">
                <AnimatePresence>
                  {terminalOutput.length > 0 ? (
                    terminalOutput.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`${
                          line.startsWith('$') 
                            ? 'text-dev-400' 
                            : line.startsWith('✅') 
                            ? 'text-success-400' 
                            : 'text-terminal-200'
                        }`}
                      >
                        {line}
                        {index === terminalOutput.length - 1 && isRunning && (
                          <span className="animate-terminal-blink">_</span>
                        )}
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-terminal-400 italic">
                      Select a tool to see output...
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-6 bg-white dark:bg-terminal-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-terminal-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Workflow Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Projects Created</span>
                  <span className="font-semibold text-slate-900 dark:text-white">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Commands Run</span>
                  <span className="font-semibold text-slate-900 dark:text-white">48</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Time Saved</span>
                  <span className="font-semibold text-success-500">2.5 hrs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
