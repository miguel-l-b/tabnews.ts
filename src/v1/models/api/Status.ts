export interface Status {
  updated_at: Date
  dependencies: Dependencies
}

export interface Dependencies {
  database: Database
  webserver: Webserver
}

export interface Database {
  status: string
  max_connections: number
  opened_connections: number
  latency: Latency
  version: string
}

export interface Latency {
  first_query: number
  second_query: number
  third_query: number
}

export interface Webserver {
  status: string
  provider: string
  environment: string
  aws_region: string
  vercel_region: string
  timezone: string
  last_commit_author: string
  last_commit_message: string
  last_commit_message_sha: string
  version: string
}