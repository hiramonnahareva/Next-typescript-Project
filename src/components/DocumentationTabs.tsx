
'use client'
import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/Tabs'
import Code from '@/components/Code'
import SimpleBar from 'simplebar-react'
import { nodejs, python } from '@/helpers/documantation-code'


const DocumentationTabs: FC = () => {
  return <Tabs defaultValue='nodeJs' className='max-w-2xl w-full'>
    <TabsList>
        <TabsTrigger value='nodeJs'>NodeJs</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
        </TabsList>
        <TabsContent value='nodeJs'>
            <SimpleBar>

            <Code animated language='javascript' code={nodejs} show/>
            </SimpleBar>
        </TabsContent>
        <TabsContent value='python'>
             <SimpleBar>
             <Code animated language='python' code={python} show/>
             </SimpleBar>
        </TabsContent>
   
  </Tabs>
}

export default DocumentationTabs