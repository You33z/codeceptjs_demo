import { dog,  user, userUpdated } from "../../models/pet";
let response: any;


Feature('Petstore api validation').tag('api');

Scenario('CRUD pet', async ({ I }) => {
  // Create pet
  response = await I.sendPostRequest('/pet', dog)
  await I.assertEqual(await response.status,200)
  await I.assertEqual(await response.data.name,dog.name)
  const petId = await response.data.id
  // Read pet
  response = await I.sendGetRequest(`/pet/${petId}` , { api_key: 'special_key'})
  await I.assertEqual(await response.status,200)
  await I.assertEqual(await response.data.id,petId)
  // Update pet
  dog.name = 'felix'
  response = await I.sendPutRequest('/pet', dog)
  await I.assertEqual(await response.status,200)
  await I.assertEqual(await response.data.name,'felix')
  // Delete pet
  response = await I.sendDeleteRequest(`/pet/${petId}` , { api_key: 'special_key'})
  await I.assertEqual(await response.status,200)
});

 Scenario('CRUD user', async ({ I }) => {
  // Create user
  response = await I.sendPostRequest('/user', user)
  await I.assertEqual(await response.status,200)
  await I.assertDeepEqual(JSON.parse(await response.config.data),user)
  // Read user
  response = await I.sendGetRequest(`/user/${user.username}`)
  await I.assertEqual(await response.status,200)
  await I.assertDeepEqual(await response.data.username,user.username)
  // Update user
  response = await I.sendPutRequest(`/user/${user.username}`, userUpdated)
  await I.assertEqual(await response.status,200)
  await I.assertDeepEqual(JSON.parse(await response.config.data),userUpdated)
  // Delete user
  response = await I.sendDeleteRequest(`/user/${userUpdated.username}`)
  await I.assertEqual(await response.status,200)
});



