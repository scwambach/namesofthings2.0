import { NextResponse } from 'next/server'
import data from '@data/global.json'

export async function GET() {
  return NextResponse.json({
    status: 200,
    ...data,
  })
}
