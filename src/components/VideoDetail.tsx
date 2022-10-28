import { useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from "react-player";
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export type Params = {
  id: string;
};
type idtype = {
  kind:string;
  videoId?:string;
  channelId?:string;
}
type snippettype = {
  channelId:string;
  channelTitle:string;
  description:string;
  liveBroadcastContent:string;
  publishTime:string;
  publishedAt:string;
  thumbnails:{default:{height:number;url:string;width:number;};
              high:{height:number;url:string;width:number;};
              maxres:{height:number;url:string;width:number;};
              medium:{height:number;url:string;width:number;};
              standard:{height:number;url:string;width:number;};
              };
  title:string;
}
type videotype = {
  id:idtype;
  kind:string;
  snippet:snippettype;
  statistics?: any;
}

const VideoDetail = () => {
  const [videodetail,setvideodetail] = useState<videotype>()
  const [videos,setvideos] = useState([])
  const { id } = useParams<keyof Params>() as Params;

  useEffect(() => {
    fetchFromAPI('',id,4).then((data) => setvideodetail(data.items[0]))
    fetchFromAPI('',id,1).then((data) => setvideos(data.items))
  },[id])
  console.log(videodetail)
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className='react-player' controls/>
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {videodetail?.snippet?.title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{
              color: '#fff'}} py={1} px={2}>
                <Link to={`/channel/${videodetail?.snippet?.channelId}`}>
                  <Typography variant='h6' color='#fff'>
                    {videodetail?.snippet?.channelTitle}
                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml:'5px'}}/>
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems="center">
                    <Typography variant='body1' sx={{ opacity: 0.7 }}>
                      {parseInt(videodetail?.statistics?.viewCount).toLocaleString()}  views
                    </Typography>
                    <Typography variant='body1' sx={{ opacity: 0.7 }}>
                      {parseInt(videodetail?.statistics?.likeCount).toLocaleString()}  likes
                    </Typography>
                  </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} indirection='column'/>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail