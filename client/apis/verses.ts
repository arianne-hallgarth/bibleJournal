import request from 'superagent'
import { Verse, SingleVerse } from '../../models/verse'

const rootUrl = '/api/v1'

export async function getAllVerses(): Promise<Verse[]> {
  const response = await request.get('/api/v1/verses')
  return response.body
}

export async function getSingleVerse(id: number): Promise<SingleVerse> {
  const response = await request.get(`/api/v1/verses/${id}`)
  return response.body
}

export async function addVerse(newVerse: Verse): Promise<void[]> {
  return await request
    .post(rootUrl + '/verses/add')
    .send(newVerse)
    .then((res) => {
      return res.body.profiles
    })
}

interface DeleteVerse {
  id: Verse['id']
}
export async function deleteVerse({ id }: DeleteVerse): Promise<void> {
  console.log({ id })
  await request.delete(rootUrl + `/verses/${id}`)
}
