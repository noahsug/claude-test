import { useState } from 'preact/hooks'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Trading Card Display</h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            count is {count}
          </button>
          <p className="mt-4 text-white/80">
            Edit <code className="bg-black/30 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="mt-6 text-white/60">
          Ready to build your trading card application
        </p>
      </div>
    </div>
  )
}