'use client'

import { useSession } from 'next-auth/react'

export default function ClientComponent() {
  const session = useSession()

  return (
    <>
      {session?.data && (
        <div className="h-60 max-w-md gap-2 overflow-scroll border bg-slate-50">
          <h2>Client component</h2>
          {JSON.stringify(session)}
        </div>
      )}
    </>
  )
}
