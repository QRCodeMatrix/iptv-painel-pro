export enum ClientStatus {
  ACTIVE = 'Ativo',
  EXPIRINGSOON = 'Vence em Breve',
  EXPIRED = 'Vencido'
}

export interface Client {
  id: string
  name: string
  phone: string
  plan: string
  price: string
  expirationDate: string
  notes?: string
  createdAt: number
}

export interface DashboardStats {
  total: number
  active: number
  expiring: number
  expired: number
}

export interface RenewalMessageRequest {
  clientName: string
  planName: string
  price: string
  expirationDate: string
  daysRemaining: number
}
