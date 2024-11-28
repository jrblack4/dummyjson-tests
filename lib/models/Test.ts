// models/Test.ts

export interface TestResponse {
  status: 'ok';
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
}
