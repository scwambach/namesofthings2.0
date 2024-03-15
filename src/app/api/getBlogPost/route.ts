import { NextResponse } from 'next/server'
import data from '@data/blogPost.json'

export async function GET() {
  return NextResponse.json({
    status: 200,
    ...data,
  })
}
