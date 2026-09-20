import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const alt = siteConfig.name
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

const OpengraphImage = async () => {
    const symbol = await readFile(join(process.cwd(), 'app/icon.png'))
    const symbolSrc = `data:image/png;base64,${symbol.toString('base64')}`

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: '80px',
                    backgroundColor: '#030504',
                    color: '#F3F5F1',
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element -- Satori só renderiza <img>; next/image não funciona dentro de ImageResponse. */}
                <img src={symbolSrc} width={116} height={116} alt="" />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            fontSize: 26,
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#00E676',
                            marginBottom: 20,
                        }}
                    >
                        {siteConfig.name}
                    </div>
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 600,
                            lineHeight: 1.1,
                            letterSpacing: '-0.03em',
                            maxWidth: 900,
                        }}
                    >
                        {siteConfig.slogan}
                    </div>
                </div>
            </div>
        ),
        { ...size },
    )
}

export default OpengraphImage
