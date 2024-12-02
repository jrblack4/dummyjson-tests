import { sleep } from 'k6';
import { K6ApiClient } from '@clients/k6-client';
import { TestService } from '@services/test.service';

export let options = {
  vus: 1,
  iterations: 1,
  httpDebug: 'full'
};

const apiClient = new K6ApiClient('https://dummyjson.com');
const testService = new TestService(apiClient);

export default async function() {
  await testService.test('GET');
  sleep(1);
}
