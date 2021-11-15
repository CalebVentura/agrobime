/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { TablesHeader, TablesBody } from './tables/Tables'

const Estadistica: FC = () => (
    <>
        {/* begin::Row */}
        <div className='row gy-5 g-xl-8'>
            <div className='col-xxl-4'>
                <TablesHeader className='card-xxl-stretch mb-5 mb-xl-8' />
            </div>

        </div>
        {/* end::Row */}

                {/* begin::Row */}
                <div className='row gy-5 g-xl-8'>
            <div className='col-xxl-4'>
                <TablesBody className='card-xxl-stretch mb-5 mb-xl-8' />
            </div>

        </div>
        {/* end::Row */}

    </>
)

export { Estadistica }
