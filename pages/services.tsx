import CtaBanner from '@/components/CtaBanner/CtaBanner'
import ServiceBanner from '@/components/ServiceBanner/ServiceBanner'
import ServiceProducts from '@/components/ServiceProducts/ServiceProducts'
import Wrapper from '@/layout/wrapper/Wrapper'
import React from 'react'

const Services = () => {
  return (
    <Wrapper isInner>
        <ServiceBanner/>
        <ServiceProducts/>
        <CtaBanner/>
    </Wrapper>
  )
}

export default Services