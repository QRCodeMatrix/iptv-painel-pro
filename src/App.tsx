import React from 'react'
import { Client, DashboardStats } from './types'

const App: React.FC = () => {
  const [clients] = React.useState<Client[]>([])
  const [stats] = React.useState<DashboardStats>({
    total: clients.length,
    active: 0,
    expiring: 0,
    expired: 0,
  })

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">IPTV Manager Pro</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-600 p-4 rounded text-white">
          <p className="text-sm">Total de Clientes</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-green-600 p-4 rounded text-white">
          <p className="text-sm">Clientes Ativos</p>
          <p className="text-2xl font-bold">{stats.active}</p>
        </div>
        <div className="bg-yellow-600 p-4 rounded text-white">
          <p className="text-sm">Vencendo em Breve</p>
          <p className="text-2xl font-bold">{stats.expiring}</p>
        </div>
        <div className="bg-red-600 p-4 rounded text-white">
          <p className="text-sm">Vencidos</p>
          <p className="text-2xl font-bold">{stats.expired}</p>
        </div>
      </div>
    </div>
  )
}

export default App
