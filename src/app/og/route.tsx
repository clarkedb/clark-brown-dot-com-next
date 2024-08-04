import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clark-brown.com'
  const backgroundImage = `url(${siteURL}/og-bg.png)`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundImage: backgroundImage,
        }}
      >
        <div
          style={{
            height: '50%',
            marginTop: '5%',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            alignItems: 'center',
            fontSize: 140,
            fontFamily: 'sans',
            letterSpacing: '-0.01em',
            fontStyle: 'normal',
            color: 'white',
            whiteSpace: 'pre-wrap',
            textAlign: 'center',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      emoji: 'noto',
    },
  )
}
