import { NextApiRequest, NextApiResponse } from "next"
import sanityClient from '@sanity/client'

const config = {
    dataset: process.env.NEXT_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    apiVersion: '2021-10-21',
    useCdn: true, 
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
};
const client = sanityClient(config)




export default async function createComment(NextApiRequest, NextApiResponse) {


const {_id, comment, name} = JSON.parse(NextApiRequest.body);
try{
    await client.create({
        _type: 'comment',
        post: {
            _type: 'reference',
            _ref: _id
        },
        comment,
        name
    });
}catch(err){
    console.log(err);
    return NextApiResponse.status(500).json({message: 'Could not find comment', err});
}
console.log('comment submitted');
   return NextApiResponse.status(200).json({ message: 'Comment submitted' })
  }
  