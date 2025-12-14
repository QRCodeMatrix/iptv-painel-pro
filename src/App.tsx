import React from 'react'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">IPTV Manager Pro</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-600 p-4 rounded text-white">
          <p className="text-sm">Total de Clientes</p>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="bg-green-600 p-4 rounded text-white">
          <p className="text-sm">Clientes Ativos</p>
          <p className="text-2xl font-bold">23</p>
        </div>
        <div className="bg-yellow-600 p-4 rounded text-white">
          <p className="text-sm">Vencendo em Breve</p>
          <p className="text-2xl font-bold">2</p>
        </div>
        <div className="bg-red-600 p-4 rounded text-white">
          <p className="text-sm">Vencidos</p>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
      <div className="bg-slate-800 p-6 rounded text-white">
        <h2 className="text-xl font-bold mb-4">Painel Operacional</h2>
        <p>Sistema online e funcionando corretamente!</p>
      </div>
    </div>
  )
}

export default App
