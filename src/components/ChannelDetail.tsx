import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export type Params = {
  id: string;
};

const ChannelDetail = () => {
  const { id } = useParams<keyof Params>() as Params;
  const [channeldetail, setchanneldetail] = useState([])
  const [videos,setvideos] = useState([])
  useEffect(() => {
    fetchFromAPI('',id,2).then((data) => setchanneldetail(data?.items))
    fetchFromAPI('',id,3).then((data) => setvideos(data?.items))
  },[id])
  console.log(channeldetail)
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={ channeldetail[0] } marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail