import { dog, order, user } from "../../models/pet";

Feature('Petstore api validation').tag('api');

Scenario('Add a new pet to the store', async ({ I }) => {
  const response = await I.sendPostRequest('/pet', dog)
  await I.assertEqual(await response.status,200)
  await I.assertEqual(await response.data.status,'available')
});

Scenario('Place an order for a pet', async ({ I }) => {
  const response = await I.sendPostRequest('/store/order', order)
  await I.assertEqual(await response.status,200)
  await I.assertEqual(await response.data.status,'placed')
});

Scenario('Create user', async ({ I }) => {
  const response = await I.sendPostRequest('/user', user)
  await I.assertEqual(await response.status,200)
});



