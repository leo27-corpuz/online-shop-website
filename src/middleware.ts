import { NextRequest, NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  // const isProd = process.env.APP_ENV;
  const cspImages = `
    https://placeholderlogo.com/
    https://valuesdriven.com/ 
    https://img.freepik.com/ 
    https://static.vecteezy.com/ 
    https://png.pngtree.com/
    https://i.ytimg.com/
    https://img.freepik.com/premium-photo/
  `
  const cspScrit = `
    https://vercel.live
  `
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' ${cspScrit};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: ${cspImages};
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()
 
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
 
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  const permissionPolicies = `
    accelerometer=(), attribution-reporting=(), bluetooth=(), browsing-topics=(), camera=(self), compute-pressure=(), display-capture=(), fullscreen=(), geolocation=(self), gyroscope=(self), local-fonts=(self), magnetometer=(self), microphone=(self), payment=(), picture-in-picture=(), publickey-credentials-create=()
  `
 
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('Permissions-Policy', `${permissionPolicies}`)
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  return response
}