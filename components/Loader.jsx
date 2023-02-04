import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Layout, Spin } from 'antd'

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);

const Loader = () => {
    return (
        <Layout className='bg-white'>
            <Spin indicator={antIcon} />
        </Layout>
    )
}

export default Loader