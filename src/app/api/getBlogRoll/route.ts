import { NextResponse } from 'next/server'
import data from '@data/blogCards.json'

export async function GET() {
  return NextResponse.json({
    status: 200,
    ...data,
  })
}
