import ApiDashboard from '@/components/ApiDashboard'
import RequestApiKey from '@/components/RequestApiKey'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import { FC } from 'react'

export const metadata: Metadata = {
    title: 'Similarity API | Dashboard',
    description: 'Free & open-source text similarity API'
}
 const page = async () => {
    const user = await getServerSession(authOptions)
    if(!user) return notFound()
    const apikey = await db.apiKey.findFirst({
        where: {userId: user.user.id, enabled: true},
    })
  return <div className='max-w-7xl mx-auto mt-16'>
    {
        apikey ? <ApiDashboard/> : <RequestApiKey/>
    }
  </div>
  return <div className='max-w-7xl mx-auto mt-16'>
    <h2>Dashboard</h2>
    
</div>

}

export default page