export type NotificationType = "success" | "error" | "info" | "warning"

export interface Snackbar {
  id: string
  message: string
  type: NotificationType
}

export interface SignUpInputType extends LoginInputType {
  name: string,
}

export interface LoginInputType {
  email: string,
  password: string
}

export interface PaymentIntentReponse {
  status: number,
  result?: PaymentResponseResult,
  error?: string
}

export interface PaymentResponseResult {
  secret: string,
  status: string
}

